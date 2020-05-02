import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Service from './pages/service/Service';

function App() {
  return (
    <div className="App">
        <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path='/' component={Home} />
          <Route exact path='/service' component={Service} />
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
