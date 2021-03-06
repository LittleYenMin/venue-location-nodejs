.PHONY: vendor test

db.csv:
	cp db.csv.backup db.csv

vendor:	db.csv
	npm install

style-check:	vendor
	./node_modules/.bin/eslint .

test:	style-check
	./node_modules/.bin/nyc ./node_modules/.bin/mocha

run:	test
	npm start
