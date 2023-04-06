import ListGroup from 'react-bootstrap/ListGroup';

export const Item =({_id, title})=>{
   
    return(
      
      <ListGroup.Item action href={`/catalog/${_id}`}>
      { title}
      </ListGroup.Item>   
    )

      
  
}