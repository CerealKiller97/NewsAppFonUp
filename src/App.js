import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, Col, Row } from 'reactstrap'
// Views
import Home from './views/Home'
import About from './views/About'
import Article from './views/Article'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/article/:id" exact component={Article} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}

export default App
