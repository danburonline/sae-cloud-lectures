# Get the latest node image
FROM node:21.5.0-alpine

# Create app directory
WORKDIR /app

# Copy package.json and source code
COPY package.json index.js /app/

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]