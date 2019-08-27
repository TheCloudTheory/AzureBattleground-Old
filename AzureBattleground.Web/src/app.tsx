import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './footer';
import MainMenu from './mainMenu';
import { Container } from 'semantic-ui-react';
import Home from './home/home';
import VirtualMachines from './exercises/compute/virtualMachines';
import Exercise from './exercises/exercise';
import Quizes from './battleground/quizes/quizes';

export default class App {
    init() {
        ReactDOM.render(
            <Router>
                <MainMenu />
                <Container fluid className='main-container'>
                    <Route path="/" exact component={Home} />
                    <Route path="/exercises/compute/virtual-machines" exact component={VirtualMachines} />
                    <Route path="/exercises/compute/virtual-machines/:id" component={Exercise} />
                    <Route path="/exercises/battleground/quizes" exact component={Quizes} />
                </Container>
                <Footer />
            </Router>,
            document.getElementById('app')
        );
    }
}

var app = new App();
app.init();