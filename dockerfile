
FROM node:24-alpine AS base

RUN npm install -g pnpm@11.9.0 && pnpm --version

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

COPY package.json  pnpm-lock.yaml* pnpm-workspace.yaml* .npmrc* ./


RUN --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build


FROM nginx:alpine

WORKDIR /app

COPY --from=base /app/dist /usr/share/nginx/html

EXPOSE 80

#Using port 3005 as host port
CMD ["nginx", "-g", "daemon off;"]


