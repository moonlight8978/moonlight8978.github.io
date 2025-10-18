---
title: SSO, OAuth và Auth0 có phải là một không?
published: 2021-06-10
draft: true
tags: [sso, oauth, auth0]
---

## Mở đầu

Khách hàng của bạn có nhiều hệ thống độc lập, giờ họ cần làm sao để connect chúng lại với nhau, họ cũng gợi ý cho bạn dùng SSO, ... Lên mạng research, bạn lại thấy một loạt các từ ngữ khó hiểu khác như là Auth0, OAuth, SAML, vân vân và mây mây... Vậy tên chúng na ná nhau, thế có phải là một hay không? Ta hãy cùng tìm hiểu xem!

## Federated Identity Management

Trước tiên, thay vì đống khái niệm ở tiêu đề, ta hãy đi tìm hiểu 1 từ khoá có vẻ chả liên quan gì cả =)) **Federated Identity Management**

Federated Identity Management chỉ việc quản lý khi hệ thống sử dụng một số trust domain (Facebook, Google, ... hay các công ty đối tác), cho phép người dùng của những trust domain này (ví dụ người dùng FB, người dùng GG, ...) quyền access vào tài nguyên của hệ thống bằng 1 identity của họ.

- Mỗi identity của user sẽ được gọi là **federated identity**. Việc sử dụng pattern trên (dùng federated identity để cho phép access vào hệ thống) gọi là **identity federation**

- Do ngày nay, đa số việc quản lý identity thường được delegate sang các provider khác, nên những trust domain trên còn được gọi là **identity broker**. Tuỳ vào role mà còn được gọi bởi nhiều tên khác nữa, nhưng bản chất thì vẫn thế

  - Identity Provider (IdP)
  - Resident Identity Provider
  - Federated Identity Provider
  - Federation Provider
  - Resident Authorization Provider

Những cách thức Federated Identity Management có thể kể đến là:

- SSO
- ...

Đó, vì 1 trong những thứ chúng ta đang tìm hiểu là 1 trong số Federated Identity Management, nên ta mới mở bát bằng thằng này :v

## SSO là gì?

**Single Sign-on** viết tắt là SSO, cái tên nói lên tất cả. SSO chỉ việc người dùng chỉ cần sử dụng một credentials mà có thể access được nhiều ứng dụng.

SSO là một Federated Identity Management, tuy nhiên chỉ focus chính vào phần authentication.

Nghe hay đấy, vậy làm sao để sử dụng SSO, hay SSO hoạt động như nào?

Để SSO hoạt động, ta sẽ cần một server trung tâm đảm nhiệm việc lưu thông tin đăng nhập của người dùng. Cách thức lưu thì tuỳ vào protocol mà server này sử dụng mà sẽ khác nhau. Những protocol có thể kể đến là:

- LDAP - Lightweight Directory Access Protocol
- OAuth - Open Authorization _\*ồ nghe quen không này =))_
- SAML - Security Assertion Markup Language
- Kerberos
- ...

Nhìn chung SSO hoạt động theo cách thức sau:

1. User vào trang web mình muốn truy cập (gọi là Service Provider)
2. Service Provider redirect user sang trang login của SSO Provider
3. SSO Provider sẽ kiểm tra người dùng đã đăng nhập hay chưa.
4. Nếu login rồi, redirect user trở lại trang web ở ①
5. Nếu chưa login thì sẽ yêu cầu người dùng nhập thông tin của mình, hoặc SSO Provider có thể cho phép người dùng login thông qua các mạng xã hội, hay những trang web đáng tin cậy khác (FB, Github, Google, ...). Sau khi login redirect lại trang web của Service Provider ở ①
6. Khi redirect, thông thường SSO Provider gửi thêm 1 token (hoặc gì đó khác tuỳ vào protocol) ứng với user để Service Provider lưu lại (thường là vào cookie)
7. User có thể access vào thệ thống của Service Provider

Điểm quan trọng trong mô hình này, là sự tin tưởng giữa ứng dụng và SSO Provider. Vì vậy khi triển khai SSO, thường mọi người sẽ tìm đến 1 service có độ tin tưởng cao thay vì tự implement _\*và chắc gì người khác dùng của mình =))_. Một số cái tên quen thuộc có thể kể đến là:

- Auth0 _\*dejavu nữa này :v_
- Microsoft Azure Active Directory
- OneLogin
- Okta
- ...

## Protocol

### OAuth

OAuth là 1 authorization framework, OAuth không handle authentication. OAuth cho phép các bên thứ 3 có thể truy cập vào protected resource của user, mà không cần cung cấp long-term credentials, hoặc identity của user.

Trước khi có OAuth, nhiều Identity Broker expose cả username lẫn password của user cho ứng dụng. Việc này dẫn đến nhiều vấn đề liên quan tới bảo mật.

OAuth không làm như vậy. Thay vì can lộ lộ như trên, Identity Broker sẽ chỉ trả về một _access token_ (hiện tại phổ biến nhất là JWT), quyền truy cập của token này phụ thuộc vào _scope_ mà user đã lựa chọn. Khi đó application (aka _client_) sẽ sử dụng access token trên để truy cập API của bên Identity Broker, client không cần quan tâm token đó là của ai, mà chỉ cần biết access token đó lấy được dữ liệu cần thiết cho ứng dụng của họ.

Nếu app chỉ cần phía Identity Broker xác thực user, thì scope càng nhỏ càng tốt.

Flow của OAuth2

![OAuth2 Flow](/img/oauth2-in-action/flow.png)

OAuth không có spec về refresh token, cũng như cách thức verify token. Nếu sử dụng JWT, bên thứ 3 có thể sẽ cung cấp cho ta public key để có thể verify signature của token.

OAuth thường được sử dụng trong những trường hợp cần lấy resource của một bên thứ 3. Ngoài ra dùng để delegate việc xác thực cho bên thứ 3 đáng tin cậy cũng không vấn đề.

### SAML

SAML sinh ra cũng nhằm giải quyết bài toán trao đổi thông tin xác thực của user giữa application - Service Provider (SP) và Identity Provider (IdP).

SAML chủ yếu sử dụng trong bài toán về authentication, SSO.

Flow của SAML 2.0

![SAML Flow](/img/blog/saml-flow.jpeg)

Mỗi client sẽ được cung cấp certificate (public key) dùng để verify SAML token ở step 4

## Tham khảo

- https://wso2.com/articles/2018/06/what-is-federated-identity-management/

- https://www.getkisi.com/blog/authentication-protocols-overview

- https://www.onelogin.com/learn/how-single-sign-on-works

- https://auth0.com/docs/protocols/protocol-oauth2

- https://oauth.net/articles/authentication/

- https://www.ubisecure.com/uncategorized/difference-between-saml-and-oauth/

- https://developers.onelogin.com/saml
