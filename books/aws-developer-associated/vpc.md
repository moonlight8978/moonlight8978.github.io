---
title: AWS Virtual Private Cloud
code: N/A
---

![](/img/aws-dva/vpc-overview.webp)

## Overview

- Region-specific, do not span across regions
- Up to 5 VPC per region, 200 subnet per VPC
- Cost money: NAT Gateway, VPC endpoint, VPN gateway
- Default VPC:
  - /16 IPv4 CIDR block
  - /20 default subnet in each AZ
  - default Internet Gateway which associate with VPC
  - Default security group
  - Default NACL
  - Default DHCP option set
  - Default main route table
- Route table
  - Used to determine where the traffic will be directed
  - Each subnet must be associated with 1 and only 1 route table, multiple subnets can be associated to single route table
- Bastion / Jumpbox
  - Security harden
  - Access to EC2 instances which in private subnet via SSH
  - NAT Gateway/Instance is required to gain outbound access to the internet
  - Can be replaced by SSM Sessions Manager

## Internet Gateway

- Does 2 things:
  - Handle traffic which is internet-routable
  - Provide one-to-one NAT (Requires instance to have public IP)
- Allow both inbound and outbound traffic to the internet
- Public subnet: Subnet with a route table that have a route to an internet gateway
  Otherwise, private subnet

## NAT Gateway / NAT Instance

- Instance don't need public IP
- Allow outbound traffic to the internet
- Can attach Elastic IP
- Useful when the instance group need a fixed public IP for whitelisting

## Network Access Control List (NACL)

- Firewall to block/allow traffic from IP range, or a specific IP address on subnet level
- Each subnet can only be associated with 1 NACL at a time
- Rule number determines the order of evaluation, from lowest to highest
  - Max is 32766
  - Recommended to work in 10 or 100 increments
- **STATELESS**: Incoming rule will not be applied to the outgoing

## Security Group

- Virtual firewall that controls the traffic to and from EC2 instances, or ENI (Elastic Network Interface)
- There are no Deny rules. All traffic is blocked by default
- Inbound: Traffic from the internet to the instances

  Outbound: Traffic from instances to the internet

  **STATEFUL**: Traffic which is allowed inbound it is also allowed outbound

- Multiple instances across multiple subnets can belong to a security group
- Multiple security groups can be attached to single instance
- Security rule's traffic source can be IP range, a specific IP, or a security group
- Limitation

  - Up to 10.000 Security Groups per Region (default is 2500)
  - Up to 60 inbound rules, and 60 outbound rules per security group
  - Up to 16 security groups per ENI (default is 5)

- NACL is required to block specific IP addresses

## VPC Flow Logs

- Capture IP traffic information go into the interfaces: VPC/Subnet/ENI Flow Logs
  - Support AWS-Managed Services: RDS, ElastiCache, ELB, ...
- Monitoring and Troubleshooting
- Output: S3, CloudWatch

## VPC Peering

- Allow connect between 2 VPCs privately (AWS Network)
- Behave like they are in the same VPC
- Use star configuration: 1 central - 4 others
- No CIDR overlapping
- One-to-one, no Transitive Peering (k có tính chất bắc cầu)

## VPC Endpoint

![](/img/aws-dva/vpc-endpoint-overview.webp)

- Allow private connection from VPC (and only within VPC) to another AWS Service, and VPC Endpoint services (All AWS are public)
- 2 types of VPC Endpoint

  - Interface Endpoints: the reset
    - Interface Endpoints are Elastic Network Interfaces (ENI) with a private IP address, serve as an entry point for traffic going to a supported service
    - Powered by AWS PrivateLink
      - Per VPC endpoint per AZ: 0.01$/h
      - Per GB data: 0.01$
  - Gateway Endpoints: S3, DynamoDB
    - Free
    - Is a gateway that is a target for a specific route in route table

- Eliminates the need for Internet Gateway, NAT, VPN, AWS Direct Connect connections
- Instances in the VPC do not require a public IP address
- Traffic does not leave the AWS network

## Site to Site VPN & AWS Direct Connect

- Allow connect from on-premise VPN to AWS VPC
- Cannot access VPC Endpoints

#### Site to Site VPN

- Traffic go over public www network

#### Direct Connect

- Traffic go over private network
- Using physical connection, and take at least 1 month to establish

![](/img/aws-dva/vpc-direct-connect.webp)

- establish dedicated network connections from on-premise instances to AWS
- Very fast network (50M-500M, 1G or 10G )
- Great traffic, reliable, and secure network

## Practical notes

- VPC: DNS hostname will be disabled by default. Enable this will create DNS name for instance
- Enable subnet auto IPv4 assignment, combine with Security Group will eliminate the require of NAT
- Fixed public IP + ASG: NAT Instance / NAT Gateway
- Internet Gateway/NAT will be set as target in Route Table
