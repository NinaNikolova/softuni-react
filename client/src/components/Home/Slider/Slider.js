import { StoriesContext } from "../../../contexts/StoriesContext";
import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';




function UncontrolledExample({
    stories
}) {

  return (
<Carousel>
      {stories.map(item => (
        <Carousel.Item key={item._d}>
          <img
            className="d-block w-100"
            src={item.img}
            alt={item.title}
          />
          <Carousel.Caption>
            <p>{item.title}</p>
           
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;