# Use the official Node.js 16 image as a base
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build

# Expose port 80 to the outside world
EXPOSE 80

# Set the command to run the application when the container starts
CMD ["npm", "start"]