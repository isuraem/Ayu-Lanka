import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import './ProductDetails.css'

function ProductDetails() {
  const { productId } = useParams(); // Get the product ID from the URL

  // Dummy data or fetch real data from an API/server
  const product = {
    id: productId,
    name: 'Herbal Tea',
    description: 'A soothing, calming blend perfect for relaxing afternoons.',
    imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg'
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;
