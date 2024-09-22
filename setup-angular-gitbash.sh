#!/bin/bash

# Check if Node.js and npm are installed
echo "Checking if Node.js is installed..."
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install Node.js from https://nodejs.org/ before proceeding."
    exit 1
else
    echo "Node.js version:"
    node -v
fi

echo "Checking if npm is installed..."
if ! command -v npm &> /dev/null
then
    echo "npm is not installed. Please install npm with Node.js."
    exit 1
else
    echo "npm version:"
    npm -v
fi

# Install Angular CLI globally
echo "Installing Angular CLI globally..."
npm install -g @angular/cli

# Verify Angular CLI installation
echo "Verifying Angular CLI installation..."
ng version

# Navigate to the Angular project directory (Replace with your actual project path)
echo "Navigating to Angular project directory..."
cd ~/Awsclass/project1/fullstack/Frontend || exit

# Install project dependencies
echo "Installing project dependencies..."
npm install

# Build the Angular project
echo "Building the Angular project..."
ng build

# Confirmation message
echo "Setup complete. You can now run your Angular project using 'ng serve'."
