FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Keep pnpm version aligned with packageManager in the workspace.
RUN corepack enable && corepack prepare pnpm@10.33.2 --activate

WORKDIR /workspaces/moonlight8978.github.io
