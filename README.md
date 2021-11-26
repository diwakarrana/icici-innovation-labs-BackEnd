# icici-innovation-labs-BackEnd

Create a service that accepts the necessary information and sends emails. It should provide an abstraction between two different email service providers. If one of the services goes down, your service can quickly failover to a different provider without affecting your customers.

I have used SendGrid service provider to support my code firstly.

If Sercide of sendgrid is down and i will redirect my request to mailgun. this can be perfomed by calling mailgun service when response show server is not avialable or any error happens
