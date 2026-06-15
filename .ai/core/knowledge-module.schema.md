# Knowledge Module Schema

## Purpose

This document defines the standard structure for every knowledge module within the AI Engineering Platform.

A knowledge module represents a single engineering topic.

Every module should follow the same organization to ensure consistency, discoverability, maintainability, and predictable navigation.

---

# Module Principles

A knowledge module must:

- Have a single responsibility.
- Cover one engineering topic.
- Be technology-agnostic whenever possible.
- Be independently maintainable.
- Be reusable across multiple projects.
- Avoid duplicated knowledge.

Each module should evolve independently from other modules.

---

# Standard Structure

Every knowledge module should follow this structure.

```txt
module-name/

├── overview.md
├── principles.md
├── rules.md
├── decision-tree.md
├── examples.md
├── anti-patterns.md
├── checklist.md
├── references.md
└── validation/
```

Individual modules may omit optional documents when unnecessary.

---

# overview.md

Purpose

Introduce the topic.

Should answer:

- What is it?
- Why does it exist?
- Which problems does it solve?
- When should it be used?

This document should provide context without implementation details.

---

# principles.md

Purpose

Describe the fundamental concepts.

Principles should remain stable over time.

They explain how experts reason about the topic.

Principles should not describe project-specific decisions.

---

# rules.md

Purpose

Define objective engineering rules.

Rules should be:

- Clear
- Testable
- Unambiguous

Rules explain expected engineering behavior.

Project-specific requirements belong to Policies.

---

# decision-tree.md

Purpose

Guide engineering decisions.

Decision trees help resolve situations where multiple valid solutions exist.

They should prioritize reasoning over memorization.

Whenever possible, represent decisions as logical flows.

---

# examples.md

Purpose

Provide practical examples.

Examples should include:

- Good implementations
- Bad implementations
- Explanations
- Trade-offs

Examples reinforce concepts defined elsewhere.

---

# anti-patterns.md

Purpose

Describe common mistakes.

Each anti-pattern should explain:

- Why it is incorrect.
- Potential consequences.
- Recommended alternative.

Learning from mistakes is as important as learning best practices.

---

# checklist.md

Purpose

Provide a concise review checklist.

Checklists should support:

- Manual reviews
- Automated reviews
- AI-assisted reviews

Checklist items should be objective and actionable.

---

# references.md

Purpose

List authoritative learning resources.

References may include:

- Books
- Academic papers
- Official documentation
- Industry standards

References should avoid opinion-based sources whenever possible.

---

# validation/

Purpose

Verify that the module is correctly understood and applied.

Validation should emphasize reasoning.

Recommended contents include:

- Scenario-based exercises
- Classification tasks
- Architecture reviews
- Decision analysis
- Edge cases

Validation should avoid simple memorization questions.

---

## Module Entry Points

Every knowledge module must define two entry documents with distinct responsibilities.

### manifest.md

The manifest defines the module's identity and contract.

Its responsibilities include:

- Metadata
- Purpose
- Scope
- Dependencies
- Consumers
- Module structure
- Learning objectives
- Evolution policy
- Success criteria

The manifest is intended for platform integration and module discovery.

---

### README.md

The README defines the module's entry point and navigation experience.

Its responsibilities include:

- Module overview
- Directory navigation
- Recommended learning path
- Intended consumers
- Related modules
- Usage guidance

The README is intended for engineers and AI agents consuming the module.

---

### Design Principle

The Manifest describes what the module is.

The README describes how the module should be consumed.

---

# Module Independence

Every knowledge module should remain self-contained.

Modules may reference related topics but should not require reading unrelated modules to understand their core concepts.

Cross-references should complement, not replace, the module's own explanations.

---

# Cross References

When related knowledge exists, prefer referencing it rather than duplicating information.

Example:

```txt
clean-architecture/
    references
        → dependency-injection

dependency-injection/
    references
        → inversion-of-control
```

Each concept should have a single authoritative source.

---

# Evolution

Knowledge modules should evolve incrementally.

Prefer adding new focused documents instead of expanding existing ones indefinitely.

When a document becomes difficult to navigate, split it into smaller responsibilities.

---

# Final Principle

A knowledge module should answer one engineering topic completely, clearly, and consistently.

Well-structured knowledge enables accurate reasoning, reusable expertise, and long-term maintainability.
