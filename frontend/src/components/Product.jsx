import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ItemFeature from './ItemFeature'; // Import the ItemFeature component

/**
 * Product Component
 * 
 * This component is responsible for displaying individual product details
 * as a styled card. It includes the product image, name, price, condition,
 * size, and material.
 * 
 * Props:
 * - product: An object containing the product details such as _id, name, image,
 *   price, condition, size, material, era, and isUnique.
 */
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* Product Image with Link */}
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        {/* Product Name with Link */}
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        {/* Item Features */}
        <Card.Text as="div">
          <ItemFeature era={product.era} isUnique={product.isUnique} />
        </Card.Text>

        {/* Product Price */}
        <Card.Text as="h3">${product.price}</Card.Text>

        {/* Additional Product Details */}
        <Card.Text>
          <strong>Condition:</strong> {product.condition}
        </Card.Text>
        <Card.Text>
          <strong>Size:</strong> {product.size}
        </Card.Text>
        <Card.Text>
          <strong>Material:</strong> {product.material}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

/**
 * PropTypes Validation
 * 
 * This ensures that the product object passed as a prop has the required
 * structure and types.
 */
Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Unique product identifier
    image: PropTypes.string.isRequired, // URL or path to product image
    name: PropTypes.string.isRequired, // Product name
    price: PropTypes.number.isRequired, // Product price
    condition: PropTypes.string.isRequired, // Product condition (e.g., "New", "Like New")
    size: PropTypes.string.isRequired, // Product size (e.g., "M", "L")
    material: PropTypes.string.isRequired, // Material of the product (e.g., "Cotton")
    era: PropTypes.string.isRequired, // Era of the product (e.g., "1990s")
    isUnique: PropTypes.bool.isRequired, // Indicates if the item is one-of-a-kind
  }).isRequired,
};

export default Product;
