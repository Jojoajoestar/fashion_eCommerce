import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

/**
 * HomeScreen Component
 * Displays all available products.
 */
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Thrifted T-Shirts</h1>
      <p>Each item is one-of-a-kind. Grab your favorite before it’s gone!</p>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
