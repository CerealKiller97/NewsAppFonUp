import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, Col, Row } from 'reactstrap'
// Views
import Home from './views/Home'
import About from './views/About'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Container>
            <Row>
              <Col sm='12' md={{ size: 6, offset: 3 }}>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/article/:id' exact component={About} />
                <Home />
                <About />
              </Col>
            </Row>
          </Container>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
