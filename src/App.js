import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SignIn from './pages/sign-in/SignIn';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import { Provider } from 'react-redux';
import store from "./utils/redux/store";
import Error404 from './pages/error/Error404';

/**
 * Main component of the application that manages the routing of the different pages
 * @returns {JSX.Element} The router component
 */
function App() {
    return (
        <React.StrictMode>
            <Provider store={store} >
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
                <Footer />
            </Router>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
