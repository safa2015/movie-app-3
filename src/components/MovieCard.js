// import { Button } from 'bootstrap'
import React from 'react'
import { Card,Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const MovieCard = ({ el ,movie, handleDelete }) => {
  return (
    <Card style={{ width: "19rem" }} className="mx-4 my-3">
      <Card.Img variant="top" src={movie.posterUrl} style={{ height: "70%" }} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            value={movie.rate}
          />
        </Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="primary" onClick={() => handleDelete(movie.id)}>
            Delete
          </Button>
          <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
          <div className='playdel'>
          <i id='i' class="far fa-trash-alt fa-2x  " onClick={()=>handleDelete(el.id)}></i> 
          
          <i id='e' class="far fa-credit-card fa-2x" ></i>

         
          
           </div>
        </Card>
      
    
  );
};

export default MovieCard;
