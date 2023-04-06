import React from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { StoryProvider } from './contexts/StoryContext';

import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { MyNavbar } from './components/Header/Nav';

import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { StoryDetails } from './components/StoryDetails/StoryDetails';
import { Logout } from './components/Logout/Logout';
import { EditStory } from './components/EditStory/EditStory';
import { RouteGuard } from './components/common/RouteGuard';
import { StoryOwner } from './components/common/StoryOwner';
import {SearchBar } from './components/search/search';





function App() {

    return (

        <AuthProvider>
            <StoryProvider>
                <MyNavbar />
                <main id="main">

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/catalog/:storyId' element={<StoryDetails />} />
                        <Route element={<RouteGuard />}>
                            <Route path='/create' element={<Create />} />
                            <Route element={<StoryOwner />}>
                                <Route path='/catalog/:storyId/edit' element={<EditStory />} />
                            </Route>
                            <Route path='/logout' element={<Logout />} />
                        </Route>
                        <Route path='/search' element={<SearchBar />} />
                        <Route path='/login' element={<Login />} />

                        <Route path='/register' element={<Register />} />
                        <Route path='*' element={<h1>404</h1>} />

                    </Routes>

                </main>

                <Footer />

            </StoryProvider>
        </AuthProvider>

    );
}

export default App;
