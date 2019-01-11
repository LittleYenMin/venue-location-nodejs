# Venue Location nodejs

[![Build Status](https://travis-ci.org/LittleYenMin/venue-location-nodejs.svg?branch=master)](https://travis-ci.org/LittleYenMin/venue-location-nodejs)
[![Coverage Status](https://coveralls.io/repos/github/LittleYenMin/venue-location-nodejs/badge.svg?branch=master)](https://coveralls.io/github/LittleYenMin/venue-location-nodejs?branch=master)

## Description
I'm using the CSV file as the local database. 

I want to make this project easy to deploy and test, so I choose CSV as my local database and not using SQLite or the other RDBMS.

To implement the update location feature it's kind of cost time, so I just left it, to focus on integrate the something fun and make code simple and easy to understand.

## Features
- [x] Retrieve a list of locations by country
- [x] Retrieve a list of locations by the shortest distance given longitude and latitude
- [x] Retrieve a single location by id
- [x] Retrieve a CSV file by the above list
- [ ] Endpoints to create and update venue

## How to run
simple use `make run`

 *If you want to see more, please access the `Makefile`*

## How to test
simple use `make test`

## File structure
```
venue-location-nodejs
 - app
  - controller
  - model
 - config
  - route.js #the api route file
 - test
 index.js #the entry point
```

## Build to Heroku
Unfortunately, you can't build this project to heroku or the other PaaS platform.

Most of the time, You are not allowed to touch the file system of PaaS platform, And this project database depends on the local CSV file, that's why you can't build on Heroku.

## Used frameworks
- Express
- Papaparse
- Mocha

### Why choose Expree as web framework
Because Express is a easy use and lightweight web framework

### Why choose Papaparse as CSV parser
Because to make the system easy deploy and test, I choose CSV file as my database in the local environment.
The Papaparse is very easy to use and understand

### Why choose Mocha as test framework
Because Mocha is most famous test framework, then i can get a lot of document and description

