#!/bin/bash

echo "Build script"


# start building for production
npm run build
if [ $? ne 0]; then
  echo 'The app build failed'
  exit 1
fi 

# start app
npm run start-prod
if [ $? ne 0]; then
  echo 'Something went wrong when starting the app'
  exit 1
fi


