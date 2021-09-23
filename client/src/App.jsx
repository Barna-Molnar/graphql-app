import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DisplayData from './DisplayData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello from React GQl-App</h1>
        <h2>List of Users</h2>
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
