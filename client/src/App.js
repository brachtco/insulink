import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from "./components/Header";
import LandingPage from './pages/LandingPage';
import HomeTest from './pages/HomeTest';
import UserProfile from './pages/UserProfile';
import Footer from "./components/Footer";
import Container from '@mui/material/Container';
import Login from './pages/Login';
import Signup from './pages/Signup';
//add components as they are finished here:

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Container style={{ height: "100vh", position: "relative" }} >
        <Header />
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/HomeTest"
            element={<HomeTest />}
          />
          <Route
            path="/UserProfile"
            element={<UserProfile />}
          />
          <Route
            path="/login"
            element={<Login />} 
          />
          <Route
          path="/signup"
          element={<Signup/> }
          />                 
        </Routes>
        <Footer />
      </Container>
    </Router>
    </ApolloProvider>
  );
}

export default App;
