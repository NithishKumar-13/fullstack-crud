import ReactDOM from 'react-dom'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";
import App from './App'

const client = new ApolloClient({
    uri: `http://localhost:8080/graphql`,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
document.querySelector('#root'))