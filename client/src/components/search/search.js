import { useState } from 'react';
import './Search.css'
import { useStoryContext } from '../../contexts/StoryContext';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


import { Item } from './Item';
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
                <h6>Търсене /само на български език по заглавие/:</h6>
                    <FormControl type="text" placeholder="Търси по заглавие на бълг.ез. !!!" className="mr-sm-2" onChange={e => setSearchTerm(e.target.value)} />
                    <Button variant="outline-success" onClick={handleSearch} >Търси  <i className="fa-solid fa-magnifying-glass"></i></Button>
                </Form>

            </Container>

            <ul className="card-wrapper">
                    {searchResults.length > 0 && searchResults.map(x => <Story key={x._id} {...x} />)}
                </ul>
                {searchResults.length === 0 && <h6>Няма намерени резултати. Опитайте пак!</h6>}

<br />
<br />
<h4> Списък на всички интересни идеи "У нас и по света с деца": </h4>

<ListGroup >
    {stories.map(x=>  <Item key={x._id} {...x}/>)}
     
      
    </ListGroup>

        </section>
    );
};

