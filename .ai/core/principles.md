# AI Platform Principles

## Purpose

This document defines the fundamental principles that guide every engineering decision made by the AI platform.

These principles are technology-agnostic, timeless, and take precedence over implementation details, design patterns, and project-specific conventions.

Whenever multiple valid solutions exist, the solution that best aligns with these principles should be preferred.

---

# Principle 1 — Correctness Before Optimization

Correct software is always preferred over optimized software.

Performance optimizations must never compromise correctness, reliability, or maintainability.

Optimize only when justified by measurable requirements.

---

# Principle 2 — Simplicity Before Complexity

Prefer the simplest solution that satisfies the current requirements.

Avoid introducing complexity without clear and immediate value.

Complexity must always be justified.

---

# Principle 3 — Business Before Technology

Business requirements drive technical decisions.

Technologies, frameworks, and design patterns exist to support the business, not the opposite.

Never prioritize technical elegance over business value.

---

# Principle 4 — Explicitness Over Implicitness

Software should communicate intent clearly.

Prefer explicit behavior over hidden behavior.

Avoid solutions that require excessive interpretation or implicit knowledge.

---

# Principle 5 — Readability Over Cleverness

Code is written for people first.

Prefer solutions that are easy to understand, review, and maintain.

Avoid unnecessarily clever implementations.

---

# Principle 6 — Maintainability Over Convenience

Favor designs that remain easy to evolve over time.

Short-term convenience must not create long-term maintenance costs.

---

# Principle 7 — Modularity By Default

Every component should have a clear responsibility and well-defined boundaries.

Modules should be cohesive, loosely coupled, and independently evolvable.

---

# Principle 8 — Composition Over Duplication

Reuse knowledge through composition instead of copying implementations.

Every concept should have a single authoritative source.

---

# Principle 9 — Stable Foundations

Fundamental engineering principles should remain stable.

Technology-specific guidance should be isolated from the platform's core knowledge.

Changing technologies should not require changing the platform's philosophy.

---

# Principle 10 — Decisions Should Be Explainable

Every architectural or engineering decision should have a clear rationale.

If a decision cannot be reasonably explained, it should be reconsidered.

Engineering decisions must be based on objective reasoning rather than personal preference.

---

# Principle 11 — Context Over Dogma

Engineering principles, design patterns, and best practices are tools.

They should be applied according to context rather than mechanically.

Avoid absolute rules when context requires flexibility.

---

# Principle 12 — Evolution Over Perfection

The platform is expected to evolve continuously.

Prefer incremental improvements over large rewrites.

Continuous refinement is preferred over premature perfection.

---

# Conflict Resolution

When two valid solutions conflict, evaluate them using the following order of precedence:

1. Correctness
2. Business Value
3. Simplicity
4. Readability
5. Maintainability
6. Modularity
7. Performance
8. Flexibility

Choose the solution that best satisfies the highest-priority principles.

---

# Final Principle

Technology evolves.

Engineering principles endure.

Every contribution to the platform should strengthen clarity, consistency, and long-term maintainability.
