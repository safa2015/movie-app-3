import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


const MovieCard = ({el,handleDelete}) => {
  return (
      <div>
          <div className="movie">
          <Card
            key={el.id}
            id="card"
            style={{ width: "18rem" , marginTop :"30px"  }}
          >
            <Card.Img
              id="img"
              variant="top"
              src={el.image}
              style={{ height: "300px", borderRadius: "10px" }}
            ></Card.Img>
            <Card.Body style={{}}>
              <Card.Title id="title"> {el.title} </Card.Title>
              <Card.Text id="year"> {el.year} </Card.Text>

            </Card.Body>
            <div className='playdel'>
              
            <i id='i'class="far fa-trash-alt fa-2x  " onClick={()=>handleDelete(el.id)}></i> 
          <Link to={`/movielist/${el.id}`}>  <Button>See Details</Button></Link>
          </div>
           
          </Card>{" "}
        
      </div>
      </div>
  )
}

export default MovieCard