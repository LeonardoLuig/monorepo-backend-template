crm.backend/
├── .ai/                                   # AI tooling context
│   ├── agents/
│   │   ├── architect/
│   │   ├── backend/
│   │   ├── product-owner/
│   │   └── security/
│   ├── checklists/
│   ├── knowledge/
│   │   ├── architecture/
│   │   ├── backend/
│   │   ├── database/
│   │   ├── devops/
│   │   ├── product/
│   │   └── security/
│   ├── skills/
│   │   ├── analyze-dependencies.md
│   │   ├── create-migration.md
│   │   ├── create-use-case.md
│   │   ├── review-module.md
│   │   ├── review-pr.md
│   │   └── review-query.md
│   ├── standards/
│   │   ├── clean-architecture.md / .examples.md
│   │   ├── clean-code.md / .examples.md
│   │   ├── ddd.md
│   │   ├── engineering-principles.md
│   │   ├── git-flow.md
│   │   ├── naming-conventions.md
│   │   ├── observability.md
│   │   ├── security.md
│   │   ├── solid.md / .examples.md
│   │   └── testing.md
│   ├── templates/
│   ├── validation/
│   │   ├── clean-architecture/       # 10 scenario files + runner
│   │   ├── clean-code/               # 10 scenario files + runner
│   │   ├── engineering-principles/   # 10 scenario files + runner
│   │   └── solid/                    # 10 scenario files + runner
│   └── workflows/
│       ├── architecture-review.md
│       ├── bug-fix.md
│       ├── code-review.md
│       └── new-feature.md
│
├── apps/
│   ├── api/                           # NestJS HTTP server
│   │   └── src/
│   │       ├── application/
│   │       │   ├── auth/
│   │       │   ├── common/
│   │       │   │   └── CoreApiResponse.ts
│   │       │   ├── controllers/
│   │       │   │   ├── documentation/
│   │       │   │   └── HealthController.ts
│   │       │   ├── middlewares/
│   │       │   │   └── CookieSessionMiddleware.ts
│   │       │   ├── modules/
│   │       │   │   └── AppModule.ts
│   │       │   └── ServerApplication.ts
│   │       ├── config/
│   │       │   └── ServerConfig.ts
│   │       └── index.ts
│   ├── socket/                        # (scaffold only)
│   └── worker/                        # (scaffold only)
│
├── packages/
│   ├── config/                        # Shared env/config
│   │   └── src/
│   │       ├── env/
│   │       │   └── DatabaseConfig.ts
│   │       └── index.ts
│   │
│   ├── core/                          # Domain + shared abstractions
│   │   └── src/
│   │       ├── common/
│   │       │   ├── code/Code.ts
│   │       │   ├── constants/regex.constants.ts
│   │       │   ├── entity/
│   │       │   │   ├── Entity.ts
│   │       │   │   └── IRemovableEntity.ts
│   │       │   ├── exception/Exception.ts
│   │       │   ├── repository/types/
│   │       │   │   ├── RepositoryDeleteOptions.ts
│   │       │   │   ├── RepositoryFindOptions.ts
│   │       │   │   └── RepositoryPaginationResult.ts
│   │       │   ├── types/common-types.ts
│   │       │   ├── usecase/
│   │       │   │   ├── adapter/  (Cursor/Offset/Time/UseCase adapters)
│   │       │   │   ├── port/     (Cursor/Offset/Time pagination ports)
│   │       │   │   ├── result/PaginatedUseCaseResult.ts
│   │       │   │   └── IUseCase.ts
│   │       │   ├── utils/
│   │       │   │   ├── assert/CoreAssert.ts
│   │       │   │   └── class-validator/ClassValidator.ts
│   │       │   └── value-object/ValueObject.ts
│   │       ├── domain/
│   │       │   ├── role/
│   │       │   │   ├── di/RoleDITokens.ts
│   │       │   │   ├── entity/
│   │       │   │   │   ├── Role.ts
│   │       │   │   │   └── types/ (Create/EditRoleEntityPayload)
│   │       │   │   ├── repository/RoleRepository.ts
│   │       │   │   ├── service/    (empty)
│   │       │   │   └── usecase/    (empty)
│   │       │   └── user/
│   │       │       ├── di/UserDITokens.ts
│   │       │       ├── entity/
│   │       │       │   ├── User.ts
│   │       │       │   ├── UserRole.ts
│   │       │       │   └── types/ (Create/EditUserEntityPayload)
│   │       │       ├── repository/UserRepository.ts
│   │       │       ├── service/    (empty)
│   │       │       ├── usecase/    (empty)
│   │       │       └── value-object/HashPassword.ts
│   │       └── application/        (empty — placeholder)
│   │
│   └── database/                    # Drizzle ORM infra
│       └── src/
│           ├── drizzle/
│           │   ├── migration/       (empty)
│           │   └── repository/
│           │       └── UserRepository.ts
│           └── index.ts
│
├── docker/
│   ├── api/
│   │   ├── Dockerfile
│   │   └── docker-compose.yml
│   ├── socket/
│   └── worker/
│
├── nx.json
├── turbo.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── .prettierrc