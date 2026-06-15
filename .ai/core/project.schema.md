# Project Schema

## Purpose

This document defines the standard structure that every project must provide in order to integrate with the AI Engineering Platform.

The schema establishes a common contract between the platform and individual projects.

Projects may extend this schema, but should not redefine existing fields.

---

# General Information

Defines the project's identity.

Fields

- Project Name
- Description
- Version
- Repository Type
- Development Stage

---

# Business Context

Defines the business environment.

Fields

- Domain
- Primary Objectives
- Target Users
- Business Constraints
- Critical Features

---

# Architecture

Defines the architectural characteristics.

Fields

- Architecture Style
- Modularization Strategy
- Communication Style
- Deployment Model

Examples

- Monolith
- Modular Monolith
- Microservices
- Serverless

---

# Technology Stack

Defines implementation technologies.

Fields

- Programming Language
- Runtime
- Module System
- Framework
- Database
- ORM
- Cache
- Messaging
- API Style

Technology-specific documentation belongs outside this schema.

---

# Workspace

Defines repository organization.

Fields

- Repository Structure
- Package Manager
- Build System
- Workspace Manager
- CI/CD Platform

---

# Quality Standards

Defines engineering expectations.

Fields

- Architecture Style
- Coding Standards
- Testing Strategy
- Security Requirements
- Performance Goals

---

# Project Conventions

Defines project-specific conventions.

Fields

- Naming Rules
- Folder Organization
- Module Organization
- Commit Strategy
- Branch Strategy

---

# Development Rules

Defines implementation preferences.

Fields

- Dependency Injection
- Error Handling
- Logging
- Validation
- Configuration Management

---

# AI Context

Defines how the platform should interpret the project.

Fields

- Preferred Agents
- Enabled Skills
- Available Templates
- Enabled Policies
- Technology Modules

---

# Extensibility

Projects may introduce additional sections when necessary.

Extensions should not modify the meaning of existing fields.

---

# Validation

Every project should provide sufficient information for the platform to:

- Understand the business context.
- Understand the technical context.
- Select appropriate Knowledge modules.
- Select appropriate Policies.
- Select appropriate Technology modules.
- Activate relevant Skills.
- Activate appropriate Agents.

---

# Final Principle

The Project Schema defines the contract.

Projects provide the implementation.

The platform provides the intelligence.
