# Use the official Node.js image as a base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the application listens on
EXPOSE 3000

# Define the command to start the application
CMD ["node", "main.js"]