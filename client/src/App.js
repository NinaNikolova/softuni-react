import React from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { StoriesContext } from './contexts/StoriesContext';
import { AuthProvider } from './contexts/AuthContext';

import * as storyService from './services/storyService';

import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Header } from './components/Header/Nav';

import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { StoryDetails } from './components/StoryDetails/StoryDetails';
import { Logout } from './components/Logout/Logout';
import { EditStory } from './components/EditStory/EditStory'







function App() {
    const [stories, setStories] = useState([])
   
    const navigate = useNavigate()

    const onCreateStorySubmit = async (data) => {
        const newStory = await storyService.create(data);
        // TODO: add to state
        setStories(state => ([...state, newStory]))
        // TODO: redirect to catalog
        navigate('/catalog')
    }
   
    const storyAdd = (storyData) => {
        setStories(state => [
            ...state,
            storyData,
        ]);

        navigate('/catalog');
    };

    const storyEdit = (storyId, storyData) => {
        setStories(state => state.map(x => x._id === storyId ? storyData : x));
    
    }
    const storyDelete = (storyId) => {
        setStories(state => state.filter(x => x._id !== storyId));
        navigate('/catalog');
    }
    useEffect(() => {
        storyService.getAll().then(data => {
            setStories(data)

        })
    }, [])


    return (
        <AuthProvider>

                <Header />

             
                <StoriesContext.Provider value={{ stories, storyAdd, storyEdit, storyDelete }}>
                    <main id="main">

                        <Routes>
                            <Route path='/' element={<Home stories={stories} />} />
                            <Route path='/create' element={<Create onCreateStorySubmit={onCreateStorySubmit} />} />
                            <Route path='/catalog' element={<Catalog stories={stories} />} />
                            <Route path='/catalog/:storyId' element={<StoryDetails />} />
                            <Route path='/catalog/:storyId/edit' element={<EditStory />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='*' element={<h1>404</h1>} />

                        </Routes>

                    </main>
                </StoriesContext.Provider>
                <Footer />
 

        </AuthProvider>
    );
}

export default App;
