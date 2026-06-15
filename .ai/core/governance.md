# AI Platform Governance

## Purpose

This document defines the governance model for the AI engineering platform.

Its purpose is to ensure that the platform remains:

- Consistent
- Modular
- Maintainable
- Predictable
- Easy to evolve

Every addition or modification must preserve these qualities.

---

# Governance Principles

The platform evolves through composition, not duplication.

Knowledge should be centralized.

Policies should be authoritative.

Agents should remain lightweight.

Every component must have a single responsibility.

---

# Single Source of Truth

Every piece of information must exist in only one location.

Avoid duplicated knowledge across:

- Knowledge
- Policies
- Templates
- Skills
- Agents
- Workflows

When the same concept appears in multiple places, extract it into its own document.

---

# Separation of Responsibilities

Each module has a distinct responsibility.

## Core

Defines how the platform operates.

Never contains project-specific information.

---

## Knowledge

Explains engineering concepts.

Answers:

"What is it?"

"How does it work?"

Never defines project decisions.

---

## Policies

Defines mandatory engineering decisions.

Answers:

"How should this platform behave?"

Policies override Knowledge when conflicts exist.

---

## Templates

Provide reusable implementation structures.

Templates should not teach concepts.

They apply existing knowledge and policies.

---

## Skills

Implement reusable engineering capabilities.

A Skill performs one well-defined task.

Skills should remain independent whenever possible.

---

## Agents

Coordinate multiple Skills.

Agents should orchestrate work rather than contain engineering knowledge.

Business knowledge belongs to Knowledge.

Engineering rules belong to Policies.

---

## Workflows

Coordinate multiple Agents to achieve larger objectives.

Workflows should describe execution order rather than implementation details.

---

# Change Management

Before creating a new document, determine whether the information belongs in an existing one.

Prefer extending existing documents over creating new ones.

Create a new document only when:

- The responsibility is clearly different.
- The content can evolve independently.
- Separation improves maintainability.

---

# Avoid Duplication

Never duplicate:

- Engineering principles
- Architectural decisions
- Naming rules
- Technology guidance

Reference the existing source instead.

---

# Modularity

Every document should have a clear and limited scope.

A reader should understand its purpose within the first few paragraphs.

If a document begins covering multiple unrelated topics, split it.

---

# Dependency Direction

Dependencies should flow toward more fundamental knowledge.

Core
↓

Policies
↓

Knowledge
↓

Templates
↓

Skills
↓

Agents
↓

Workflows

Higher-level modules should never depend on lower-level implementations.

---

# Evolution Rules

The platform should evolve incrementally.

Prefer small, focused improvements.

Avoid large structural rewrites unless they significantly improve maintainability.

New modules should integrate with the existing architecture instead of replacing it.

---

# Naming Rules

Document names should describe responsibility rather than implementation.

Prefer:

- clean-architecture.md
- dependency-rules.md
- repository-pattern.md

Avoid:

- architecture-v2.md
- new-clean-code.md
- misc.md
- helpers.md

---

# Versioning

Changes should preserve backward compatibility whenever practical.

Breaking changes should be intentional, documented, and justified.

Deprecated content should be removed only after replacement exists.

---

# Technology Independence

Core, Knowledge and Policies must remain technology-agnostic.

Technology-specific guidance belongs exclusively to dedicated technology modules.

---

# Validation

Every new module should eventually include validation scenarios.

Validation should verify:

- Correctness
- Consistency
- Decision quality

Validation must focus on reasoning rather than memorization.

---

# Decision Hierarchy

When multiple documents apply, precedence follows:

Core

↓

Policies

↓

Knowledge

↓

Templates

↓

Skills

↓

Agents

↓

Workflows

Higher-priority documents always prevail.

---

# Quality Standards

Every document should be:

- Focused
- Unambiguous
- Reusable
- Maintainable
- Independent
- Easy to navigate

---

# Final Principle

The platform should become simpler as it grows.

Growth must increase capabilities without increasing unnecessary complexity.
