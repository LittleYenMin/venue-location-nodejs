const express = require('express')
const routes = require('./config/routes.js')
const app = express()
routes(app)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Application listening on PORT ${port}!`))
