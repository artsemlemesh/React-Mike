# Use an official node image as a parent image.
# For ARM64 architecture
FROM --platform=linux/arm64/v8 node:18-alpine AS build

# Set the working directory.
WORKDIR /app

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the project files.
COPY . .

# Expose the port the app runs on.
EXPOSE 3001

# Run the application.
CMD ["npm", "run", "dev"]
