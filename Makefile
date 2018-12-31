vendor: 
	cp db.csv.backup db.csv
	npm install

style-check:	vendor
	./node_modules/.bin/eslint *.js

run:	style-check
	node index.js
