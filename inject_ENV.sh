#!/bin/bash

pwd
echo "Check test key value: ${INJECTION_ENV_TEST_KEY}"

# Inject key into html before build
sed -i "s|__INJECTION_ENV_TEST_KEY__|${INJECTION_ENV_TEST_KEY}|g" index.html

echo "Environment variables injected successfully"
