#!/bin/bash

# Set npm global binary path for Windows Git Bash
NPM_GLOBAL_PATH="/c/Users/Dell/AppData/Roaming/npm"

echo "npm global binary path is: $NPM_GLOBAL_PATH"

# Check if the path is already in the PATH environment variable
if [[ ":$PATH:" == *":$NPM_GLOBAL_PATH:"* ]]; then
    echo "npm global binary path is already in PATH."
else
    echo "Adding npm global binary path to PATH..."
    
    # Add the path to the current session
    export PATH=$PATH:$NPM_GLOBAL_PATH

    # Check if .bashrc exists, if not create it
    if [ ! -f ~/.bashrc ]; then
        echo "Creating ~/.bashrc file..."
        touch ~/.bashrc
    fi

    # Append the path to .bashrc for persistence
    echo "Persisting npm global path to .bashrc..."
    echo "export PATH=\$PATH:$NPM_GLOBAL_PATH" >> ~/.bashrc

    # Source .bashrc to apply the changes
    echo "Applying the changes by sourcing ~/.bashrc..."
    source ~/.bashrc

    echo "npm global binary path added to PATH and persisted in .bashrc."
fi

# Verify if the ng command is now accessible
echo "Verifying Angular CLI installation..."
ng version

if [ $? -eq 0 ]; then
    echo "Angular CLI is successfully installed and accessible!"
else
    echo "Angular CLI is still not accessible. Please check your installation."
fi
