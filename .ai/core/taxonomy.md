# AI Platform Taxonomy

## Purpose

This document defines the purpose and responsibility of every top-level module within the AI platform.

Each module exists to solve a specific problem.

Responsibilities must remain clearly separated to preserve consistency, maintainability, and scalability.

---

# Core

Purpose

Defines the platform itself.

Core contains the platform's foundational documents, including its mission, principles, governance model, taxonomy, glossary, and structural conventions.

Core is stable and technology-agnostic.

Core never contains engineering knowledge or project-specific information.

---

# Knowledge

Purpose

Stores reusable engineering knowledge.

Knowledge explains concepts, patterns, methodologies, and technical subjects.

Knowledge answers questions such as:

- What is it?
- Why does it exist?
- How does it work?
- When should it be used?

Knowledge does not define project decisions.

Knowledge should remain reusable across projects.

---

# Policies

Purpose

Defines mandatory engineering decisions adopted by the platform or by a specific project.

Policies translate knowledge into actionable rules.

Policies answer questions such as:

- What must be done?
- What is forbidden?
- What is preferred?
- What should be avoided?

Policies may reference Knowledge.

Knowledge must never depend on Policies.

---

# Technology

Purpose

Contains technology-specific guidance.

Technology modules describe frameworks, libraries, runtimes, databases, cloud providers, and other implementation details.

Examples include:

- Programming languages
- Frameworks
- ORMs
- Databases
- Infrastructure tools
- Messaging systems

Technology modules must not redefine engineering principles.

---

# Templates

Purpose

Provide reusable implementation blueprints.

Templates define the expected structure of engineering artifacts.

Examples include:

- Use Cases
- Entities
- Repositories
- Controllers
- API Endpoints
- Tests

Templates apply existing Knowledge and Policies.

Templates should not introduce new concepts.

---

# Skills

Purpose

Implement reusable engineering capabilities.

A Skill performs a single specialized task.

Skills combine Knowledge, Policies, Templates, and project context to accomplish a well-defined objective.

Skills should remain small, focused, and composable.

---

# Agents

Purpose

Coordinate one or more Skills.

Agents represent engineering specialists responsible for solving broader problems.

Agents should orchestrate work rather than contain engineering knowledge.

Knowledge belongs to Knowledge.

Decisions belong to Policies.

Implementation guidance belongs to Skills.

---

# Workflows

Purpose

Coordinate multiple Agents or Skills to accomplish larger engineering processes.

Workflows define execution order.

They do not redefine engineering knowledge.

---

# Validation

Purpose

Verifies the quality and consistency of the platform.

Validation ensures that:

- Knowledge is correctly applied.
- Policies are respected.
- Skills behave as expected.
- Agents produce consistent decisions.
- Workflows execute correctly.

Validation measures reasoning rather than memorization.

---

# Project

Purpose

Contains project-specific information.

Examples include:

- Business context
- Architectural decisions
- Technology selections
- Coding conventions
- Domain terminology

Project information customizes the platform without modifying its reusable core.

---

# Relationships

The platform is organized as follows:

Core

↓

Knowledge

↓

Policies

↓

Technology

↓

Templates

↓

Skills

↓

Agents

↓

Workflows

↓

Validation

Project context is consumed by Skills, Agents, and Workflows but must not alter the reusable platform.

---

# Responsibility Rules

Each module must have a single, clearly defined responsibility.

A document should belong to exactly one module.

If a document appears to fit multiple modules, its responsibility should be reconsidered or the content should be split.

---

# Final Principle

The taxonomy exists to preserve clear boundaries.

Clear boundaries produce maintainable systems.

Maintainable systems enable long-term evolution.
