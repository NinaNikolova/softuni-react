import React, { useState } from 'react';
import './search.css'
import { useStoryContext } from '../../contexts/StoryContext';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { Story } from '../Catalog/Story/Story';


export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { stories } = useStoryContext()


    const handleSearch = () => {

        // Perform search logic here, e.g. fetch data from API, filter local data, etc.
        // Here's an example of filtering an array of items by title
        const filteredResults = stories.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <section id="search">
            <Container>
                <Form inline>
                    <FormControl type="text" placeholder="Търси по заглавие на български" className="mr-sm-2" onChange={e => setSearchTerm(e.target.value)} />
                    <Button variant="outline-primary" onClick={handleSearch} >Търси</Button>
                </Form>

            </Container>

 <ul className="card-wrapper">
                    {searchResults.map(x => <Story key={x._id} {...x} />)}
                </ul>
                {searchResults.length === 0 && <h2>Няма намерени резултати. Опитайте пак!</h2>}

        </section>
    );
};

