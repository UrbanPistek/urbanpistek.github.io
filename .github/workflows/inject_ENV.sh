#!/bin/bash

# Inject API key into html before build
sed -i "s|__MAP_API_KEY__|${GOOGLE_MAPS_API_KEY}|g" ../../index.html
echo "Environment variables injected successfully"
