import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// App component acts as the main layout for the app
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* Outlet renders the current route's component */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
