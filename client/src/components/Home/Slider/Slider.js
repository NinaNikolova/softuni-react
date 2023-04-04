import Carousel from 'react-bootstrap/Carousel';




function UncontrolledExample({
    stories
}) {

  return (
<Carousel style={{marginBlock: '30px'}}>
      {stories.map(item => (
        <Carousel.Item style={{ maxHeight: '600px' }} key={item._id}>
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