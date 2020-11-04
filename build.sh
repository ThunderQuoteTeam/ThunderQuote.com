#!/bin/bash
echo "Running vue-cli-service build"
npx vue-cli-service build
rm -rf docs/app.html
echo "Building complete. Updating /opt/bitnami/apps/thunderquote/mainpage"
rm -rf /opt/bitnami/apps/thunderquote/mainpage
cp -r docs /opt/bitnami/apps/thunderquote/mainpage
echo "Building complete. Updating ThunderQuote.com Repository"
rm -rf /Users/thunderquote/Documents/GitHub/ThunderQuote.com/docs
cp -r docs /Users/thunderquote/Documents/GitHub/ThunderQuote.com/docs
echo "Build script done"
