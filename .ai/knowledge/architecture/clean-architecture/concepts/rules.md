# Rules

## Metadata

Name: Clean Architecture Rules

Category: Knowledge / Architecture / Clean Architecture

Version: 1.0.0

Status: Stable

Owner: AI Engineering Platform

---

# Purpose

This document defines the objective architectural rules of Clean Architecture.

Unlike architectural principles, these rules are explicit, verifiable, and intended to guide implementation and architecture reviews.

Every rule should be evaluated independently.

---

# Rule 1 — Respect Dependency Direction

Dependencies must always point toward higher-level policies.

A lower-level component may depend on a higher-level component through abstractions.

A higher-level component must never depend directly on lower-level implementation details.

---

# Rule 2 — Protect Business Logic

Business logic must not directly depend on:

- Frameworks
- Databases
- User interfaces
- Messaging platforms
- External services
- Infrastructure components

Business logic should remain isolated from implementation concerns.

---

# Rule 3 — Isolate Infrastructure

Infrastructure components should remain outside the business core.

Infrastructure is responsible for implementing technical capabilities rather than defining business behavior.

Business rules should remain executable without infrastructure.

---

# Rule 4 — Separate Responsibilities

Each architectural component should have one primary responsibility.

Components that accumulate unrelated responsibilities should be decomposed.

Architectural organization should prioritize cohesion.

---

# Rule 5 — Depend on Contracts

Communication between architectural boundaries should occur through explicit contracts or abstractions.

Concrete implementations should not be exposed across boundaries unless explicitly required.

---

# Rule 6 — Prevent Cyclic Dependencies

Architectural dependencies must not form cycles.

Every dependency graph should have a clear direction.

Cycles increase coupling and reduce maintainability.

---

# Rule 7 — Keep Boundaries Explicit

Architectural boundaries should be visible and intentional.

Responsibilities belonging to different architectural concerns should not be merged merely for convenience.

Boundaries should communicate ownership and purpose.

---

# Rule 8 — Isolate Change

A change in one implementation detail should minimize its impact on unrelated architectural components.

Changes should remain localized whenever possible.

Architectural coupling should be minimized.

---

# Rule 9 — Preserve Replaceability

Implementation details should be replaceable without requiring modifications to business rules.

Replacing technologies should primarily affect the outer architectural boundaries.

---

# Rule 10 — Avoid Framework-Centric Design

Frameworks should support the architecture.

The architecture should not be organized around framework conventions.

Business concepts should define the system structure.

---

# Rule Relationships

These rules reinforce one another.

For example:

- Respecting dependency direction helps protect business logic.
- Explicit boundaries reduce coupling.
- Isolated infrastructure improves replaceability.
- Clear responsibilities improve maintainability.

Rules should be applied collectively rather than individually.

---

# Compliance Criteria

A system demonstrates compliance when:

- Business rules remain independent.
- Dependencies follow architectural direction.
- Responsibilities are clearly separated.
- Infrastructure remains isolated.
- Architectural boundaries are explicit.
- Components communicate through abstractions.
- Cyclic dependencies are absent.

Architectural quality should be evaluated continuously throughout the system lifecycle.

---

# Expected Outcomes

Applying these rules should result in software systems that are:

- Easier to maintain.
- Easier to test.
- Easier to evolve.
- Easier to understand.
- Less coupled.
- More resilient to technological change.

---

# Final Principle

Architectural rules exist to preserve architectural intent.

Violating individual rules may appear harmless in isolation, but repeated violations gradually erode the architecture and increase long-term maintenance costs.
