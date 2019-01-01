# Venue Location nodejs

[![Build Status](https://travis-ci.org/LittleYenMin/venue-location-nodejs.svg?branch=master)](https://travis-ci.org/LittleYenMin/venue-location-nodejs)

## Description
I'm using the CSV file as the local database. 

To implement the update location feature it's kind of cost my time, so I just left it.

Let's talking about using CSV file as Database,
because I want to make this project it's easy to deploy and test.

So, I focus on integrate the something fun and make code simple to understand.

## What Can this do?
- Retrieve a list of locations by country
- Retrieve a list of locations by the shortest distance given longitude and latitude
- Retrieve a list of locations by the shortest distance given longitude and latitude
- Retrieve a CSV file by the above list

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
 - test
 index.js #the entry point
```

## Is possible to build to Heroku
Unfortunately, No.
Because this project database depend on the local csv file.
that's why you can't build on Heroku

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

