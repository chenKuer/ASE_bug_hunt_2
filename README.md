# **GameFame**

[![Build Status](https://travis-ci.com/alekzieba/game-fame.svg?token=yqqaA7mpgDZTSHs8o8Cz&branch=master)](https://travis-ci.com/alekzieba/game-fame)

Welcome to our project for COMS 4156: Advanced Software Engineering at
Columbia University. This document is a work in progress and includes details
about running, testing, and building this application.

# Running:

Ensure that you have a proper `.env` file within the root directory of the
project. Here are the environment variables we have defined so far:

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_DATABASE_URL`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MSID`

You can run the development environment with the following series
of commands:

`$ yarn install`

`$ yarn dev`

Run the test suite with:

`$ yarn test`
