# Stage 1: Builder Stage
FROM oven/bun:1.0.25-alpine as builder

# Create temp build directory
RUN mkdir -p /temp/build

# Copy package.json, bun.lockb and source code
COPY package.json bun.lockb src tsconfig.json /temp/build/

# Set working directory
WORKDIR /temp/build

# Install dependencies and build the app
RUN bun install --frozen-lockfile && bun run build

# Remove node_modules and reinstall only production dependencies
RUN rm -rf node_modules && bun install --production --frozen-lockfile


# -------------------------------------------------------


# Stage 2: Production Stage
FROM node:21.5.0-alpine

# Create app directory
WORKDIR /production

# Copy built assets from builder stage
COPY --from=builder /temp/build/dist ./dist
COPY --from=builder /temp/build/node_modules ./node_modules

# Set the environment to production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Set the user to node due to security reasons
USER node

# Run the app
CMD ["node", "dist/main"]
