import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import ItemFeature from '../components/ItemFeature';
import products from '../products';

/**
 * ProductScreen Component
 * 
 * Displays detailed information about a product based on the ID from the URL.
 */
const ProductScreen = () => {
  const { id: productId } = useParams(); // Extract product ID from the URL
  const product = products.find((p) => p._id === productId); // Find product by ID

  const [isAddedToCart, setIsAddedToCart] = useState(false); // Track cart status

  // Handle Add to Cart action
  const handleAddToCart = () => {
    if (!isAddedToCart) {
      setIsAddedToCart(true); // Mark the item as added
      alert(`${product.name} has been added to your cart!`);
    }
  };

  return (
    <>
      {/* Link to go back to Home Screen */}
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <Row>
        {/* Product Image */}
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        {/* Product Details */}
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              {/* Use ItemFeature instead of Rating */}
              <ItemFeature era={product.era} isUnique={product.isUnique} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Add to Cart Section */}
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.isUnique && isAddedToCart
                      ? 'Already Added'
                      : product.isUnique
                      ? 'One of a Kind'
                      : 'In Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={handleAddToCart}
                  disabled={product.isUnique && isAddedToCart}
                >
                  {isAddedToCart ? 'Added' : 'Add To Cart'}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
