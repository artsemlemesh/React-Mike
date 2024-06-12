# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code into the container at /app
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
