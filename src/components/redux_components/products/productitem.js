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
    <div className="d-flex align-items-center justify-content-between">
      <div>
      <Button variant="primary">Add to cart</Button>
      </div>
      <div>
      <p variant="primary">Price :{data?.price}</p>
      </div>
    </div>
    </Card.Body>
    </Card>
   </>
  )
}

export default Productitem