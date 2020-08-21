import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title/Title';
import Result from './Result/Result';
import GenerateButton from './GenerateButton/GenerateButton';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Title />
          </Col>
        </Row>
        <main>
          <Row>
            <Col>
              <Result />
            </Col>
          </Row>
          <Row>
            <Col>
              <GenerateButton />
            </Col>
          </Row>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
