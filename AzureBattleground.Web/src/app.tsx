import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './footer';
import MainMenu from './mainMenu';
import { Container } from 'semantic-ui-react';
import Home from './home/home';
import VirtualMachines from './exercises/compute/virtualMachines';
import AppServices from './exercises/compute/appServices';
import Exercise from './exercises/exercise';
import Quizes from './battleground/quizes/quizes';
import NotFound from './notFound';
import QuizRunner from './battleground/quizes/quizRunner';
import ServiceFabric from './exercises/compute/serviceFabric';
import Aks from './exercises/compute/aks';
import Aci from './exercises/compute/aci';
import AzureFunctions from './exercises/compute/azureFunctions';
import Batch from './exercises/compute/batch';
import ErrorBoundary from './errorBoundary';
import HallOfFame from './battleground/hallOfFame';
import Ranking from './battleground/ranking';
import PrivacyPolicy from './privacyPolicy';

export default class App {
    init() {
        ReactDOM.render(
            <Router>
                <MainMenu />
                <Container fluid className='main-container'>
                    <ErrorBoundary>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/exercises/compute/virtual-machines" exact component={VirtualMachines} />
                            <Route path="/exercises/compute/app-services" exact component={AppServices} />
                            <Route path="/exercises/compute/service-fabric" exact component={ServiceFabric} />
                            <Route path="/exercises/compute/aks" exact component={Aks} />
                            <Route path="/exercises/compute/aci" exact component={Aci} />
                            <Route path="/exercises/compute/azure-functions" exact component={AzureFunctions} />
                            <Route path="/exercises/compute/batch" exact component={Batch} />
                            <Route path="/exercises/compute/virtual-machines/:id" component={Exercise} />
                            <Route path="/exercises/compute/app-services/:id" component={Exercise} />
                            <Route path="/exercises/compute/service-fabric/:id" component={Exercise} />
                            <Route path="/exercises/compute/aks/:id" component={Exercise} />
                            <Route path="/exercises/compute/aci/:id" component={Exercise} />
                            <Route path="/exercises/compute/azure-functions/:id" component={Exercise} />
                            <Route path="/exercises/compute/batch/:id" component={Exercise} />
                            <Route path="/battleground/quizes" exact component={Quizes} />
                            <Route path="/battleground/quizes/:id" component={QuizRunner} />
                            <Route path="/battleground/hall-of-fame" exact component={HallOfFame} />
                            <Route path="/battleground/ranking" exact component={Ranking} />
                            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                            <Route component={NotFound} />
                        </Switch>
                    </ErrorBoundary>
                </Container>
                <Footer />
            </Router>,
            document.getElementById('app')
        );
    }
}

var app = new App();
app.init();