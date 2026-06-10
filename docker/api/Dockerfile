FROM node:24-slim AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY tsconfig.json ./

COPY packages/ ./packages/
COPY apps/api/ ./apps/api/

RUN pnpm install --frozen-lockfile

RUN pnpm --filter @repo/core build
RUN pnpm --filter @repo/config build
RUN pnpm --filter @repo/database build
RUN pnpm --filter @apps/api build

FROM gcr.io/distroless/nodejs24-debian12 AS runnner

WORKDIR /app

COPY --from=builder /apps/api/dist ./dist
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /packages ./packages
 
EXPOSE 8000

CMD ["pnpm api:start"]