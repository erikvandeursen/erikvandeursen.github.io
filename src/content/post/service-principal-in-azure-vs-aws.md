---
title: "Service principals in Azure and AWS"
description: "Some thoughts on what a Service Principal is in Azure and AWS, and also how these differ between Azure and AWS"
publishDate: "16 Feb 2024"
tags: ["devops", "toc"]
---

When studying for the Azure DevOps and AWS SysOps exams I ran multiple times into the term 'service principal'. A short post to clarity the differences between the two.

In both Azure and AWS, a service principal is a security identity used by services and applications to authenticate and access resources within their respective cloud environments. However, there are some differences in how they are implemented and managed between Azure and AWS. This is due to how they operate in slightly different ways due to the differences in how each cloud platform manages identity and access control.

# Azure

In Azure, a service principal is a security identity used by applications, services, and automation tools to access Azure resources. It's similar to a user identity (Azure AD user), but it's meant for automated tasks or applications rather than for interactive use. Service principals are often used for automated tasks like deployment scripts, or for granting applications access to Azure resources.

## Key points about Azure service principals

1. **Azure Active Directory (AAD)**: Azure uses Azure Active Directory for authentication and authorization. Service principals in Azure are essentially security identities created for use with applications, services, and automation tools. Each service principal has its own identity, represented by a unique ID (called Object ID) and credentials (usually a client ID and a client secret or a certificate).
2. **Resource Access**: Service principals in Azure can be assigned specific roles (such as Reader, Contributor, or Owner) at the subscription, resource group, or resource level, allowing them to access and manage Azure resources accordingly.
3. **Authentication**: Service principals in Azure can authenticate using either a client secret, certificate, or managed identity. They are typically used for non-human authentication scenarios, such as automated scripts or applications accessing Azure resources.
4. **Lifecycle**: Service principals can be created, managed, and deleted programmatically through Azure Active Directory (Azure AD) or Azure CLI/PowerShell.

## AWS

In AWS, the concept is similar but is known as an IAM (Identity and Access Management) role or IAM user rather than a service principal.

## Differences between IAM role and IAM user

1. **IAM Role**: In AWS, an IAM role is an identity with specific permissions that determine what the identity can and cannot do in AWS. Roles can be assumed by IAM users, AWS services, or external identities such as users from another AWS account or from a trusted entity. IAM roles are used to delegate access to resources securely.
2. **IAM User**: An IAM user is an entity in AWS that represents a person or service. It's similar to a service principal in Azure but can also represent a human user. IAM users can be granted permissions through policies attached directly to the user or through group membership.

## Key points about AWS service principals

1. **IAM (Identity and Access Management)**: AWS employs IAM for managing identities and access to AWS services and resources. Service principals in AWS are represented as IAM roles.
2. **Cross-Account Access**: IAM roles can be used to grant access across AWS accounts, allowing resources in one account to access resources in another. This is commonly used for scenarios like cross-account access or federated access.
3. **Temporary Credentials**: IAM roles in AWS can generate temporary security credentials, which are valid for a specified duration. This feature enhances security by reducing the risk of long-term credential exposure.
4. **AssumeRole API**: AWS provides the AssumeRole API, which allows applications to programmatically assume an IAM role and obtain temporary security credentials to access AWS resources.

# Key differences:

1. **Terminology**: Azure uses the term "service principal," while AWS uses "IAM role" or "IAM user."
2. **Scope**: Azure service principals are often used at the application level, whereas in AWS, IAM roles can be assumed by users, services, or other AWS accounts.
3. **Management**: In Azure, service principals are managed through Azure Active Directory, while in AWS, IAM roles and users are managed through the IAM service.

In summary, while both Azure and AWS use service principals (or similar constructs) for managing identities and access to resources, the specifics of their implementation, terminology, and capabilities differ due to the unique features and architectures of each cloud platform.
