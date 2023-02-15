import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Home from './pages/home/Home';
import User from './pages/user/User';
import SignIn from './pages/sign-in/SignIn';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import { Provider } from 'react-redux';
import store from "./app/store";

function App() {
    return (
        <React.StrictMode>
            <Provider store={store} >
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/sign-in' element={<SignIn />} />
                </Routes>
                <Footer />
            </Router>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
