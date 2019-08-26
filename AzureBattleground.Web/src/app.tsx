import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Container, Dropdown, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './footer';

export default class App {
    init() {
        ReactDOM.render(
            <Router>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Icon inverted color='blue' name='terminal' size='large' />
                            <Link to='/'>Azure Battleground</Link>
                        </Menu.Item>
                        <Menu.Item as='a'><Link to='/home'>Home</Link></Menu.Item>
                        <Menu.Item as='a'><Link to='/about'>About</Link></Menu.Item>

                        <Dropdown item simple text='Exercises'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <i className='dropdown icon' />
                                    <span className='text'>Compute</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to='/exercises/compute/virtual-machines'>Virtual Machines</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/compute/app-services'>App Services</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/compute/service-fabric'>Service Fabric</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/compute/aks'>Azure Kubernetes Service</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/compute/aci'>Azure Container Instances</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/compute/azure-functions'>Azure Functions</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/compute/batch'>Azure Batch</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <i className='dropdown icon' />
                                    <span className='text'>Storage</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to='/exercises/storage/storage'>Azure Storage</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/storage/sql'>Azure SQL</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/storage/cosmosdb'>Cosmos DB</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/storage/data-lake'>Azure Data Lake</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/storage/mysql'>Azure Database for MySQL</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/exercises/storage/postgresql'>Azure Database for PostgreSQL</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>
                <Footer />
            </Router>,
            document.getElementById('app')
        );
    }
}

var app = new App();
app.init();