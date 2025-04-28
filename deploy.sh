#!/bin/bash

# Print commands for debugging
set -x

echo "Starting deployment process..."

# Make sure we're in the project root
cd "$(dirname "$0")"

# Install dependencies in the main project (which has workspaces configured)
echo "Installing root dependencies..."
npm install

# Navigate to the reveriontech directory and install its dependencies
echo "Installing reveriontech dependencies..."
cd reveriontech
npm install

# Build the project
echo "Building the application..."
npm run build

# Return to the root directory
cd ..

echo "Deployment build completed!"

# The build output will be in reveriontech/dist 