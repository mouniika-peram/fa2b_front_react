import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Productitem({data}) {
  return (
   <>


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data?.image} />
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <Card.Text>
          {data?.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
   
   </>
  )
}

export default Productitem