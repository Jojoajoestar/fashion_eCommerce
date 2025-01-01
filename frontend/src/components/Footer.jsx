import { Container, Row, Col } from 'react-bootstrap';

/**
 * Footer Component 
 * Displays a footer at the bottom of the page with copyright information
 */

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                    <p>Thrift Daddyy &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;