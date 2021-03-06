---
title: Elastic Container Service
code: N/A
---

![](https://images.viblo.asia/af3a7ac2-ff6f-46e4-afdd-ca285f959a13.png)

- Cluster: House of docker containers

- Task definition: JSON configuration of (upto 10) containers

  ```json
  {
    "containerDefinitions": [
      {
        "name": "wordpress",
        "links": ["mysql"],
        "image": "wordpress",
        "essential": true,
        "portMappings": [
          {
            "containerPort": 80,
            "hostPort": 80
          }
        ],
        "memory": 500,
        "cpu": 10
      },
      {
        // ...
      }
    ],
    "family": "hello_world"
  }
  ```

  - Image can be stored in ECR or any registry
  - One essential container is required. If this container failes or stops then all other containers will be stopped

- Task: Launches containers defined in Task Definition

  Task do not remaining running once complete

- Service: Ensure tasks is keep running, desired counts, ... (eg. webapp)

- Container agent: installed on each ec2 instance, which start/stop containers

- Create ECS cluster:

  - Cluster
  - IAM role
  - CloudFormation stack
  - Task definition
  - Service

- Create services:

  - EC2 based: container run on docker on ec2 instances
  - Fargate: Serverless, pays and containers run
    - Cold start: after a period of inactivity, AWS will drop the container, our function will become inactivity (aka **cold**). A cold start happens when we execute an inactivity function

  ![](https://images.viblo.asia/a488d4d1-8e48-46c8-97ea-aa7be004a726.png)

  * Replicas

- Resource reservation

- Pay at least 1 minute, and every additional second

- EC2 Practical notes:

  - When create EC2 ECS Cluster, AWS will create a CloudFormation stack
  - Container instance that run the ECS container agent will requires ecsInstanceRole (ECS, EC2, ECR, CloudWatch)
  - Login to ECR:
    ```bash
    aws ecr get-login-password | docker login --username AWS --password-stdin <repo_link>
    ```
  - Sensitive env variables can be stored at Parameter Store, ECS will inject those vars to container at runtime
  - Command is comma seperated `yarn,start`

- EC2 with ALB practical notes:

  - 1 service - 1 target group
  - Target group used for ECS should have 0 associated instances because ECS will assign instances automatically when service starts
  - In task definition, keep Host port blank will tell ECS to map Host port automatically (random), and those ports will be mapped to target group instances
  - Delete ECS service will not delete ALB resources

# TODO

- Replica mode (multiple containers) vs Daemon mode (auto replicas)
