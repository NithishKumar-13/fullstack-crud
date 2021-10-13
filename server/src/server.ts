const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const { schema } = require('./schemas/schema')
const cors = require('cors')
const PORT = process.env.PORT || 8080

// middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => console.log(`Server listening to PORT ${PORT}...`))