import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './footer';
import MainMenu from './mainMenu';
import { Container } from 'semantic-ui-react';
import Home from './home/home';

export default class App {
    init() {
        ReactDOM.render(
            <Router>
                <MainMenu />
                <Container fluid className='main-container'>
                    <Route path="/" exact component={Home} />
                </Container>
                <Footer />
            </Router>,
            document.getElementById('app')
        );
    }
}

var app = new App();
app.init();