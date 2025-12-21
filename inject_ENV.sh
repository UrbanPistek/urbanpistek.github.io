#!/bin/bash

pwd
echo "Check test key value: ${INJECTION_ENV_TEST_KEY}"

# Inject API key into html before build
sed -i "s|__MAP_API_KEY__|${GOOGLE_MAPS_API_KEY}|g" config.js.template
cp config.js.template config.js
sed -i "s|__INJECTION_ENV_TEST_KEY__|${INJECTION_ENV_TEST_KEY}|g" index.html

echo "Environment variables injected successfully"
