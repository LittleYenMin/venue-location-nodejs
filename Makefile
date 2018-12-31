vendor: 
	cp db.csv.backup db.csv
	npm install

style-check:	vendor
	./node_modules/.bin/eslint *.js

unit-test:	style-check
	./node_modules/.bin/mocha
run:	unit-test
	node index.js
