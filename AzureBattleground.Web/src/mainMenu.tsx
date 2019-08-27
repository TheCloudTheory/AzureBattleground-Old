import React from "react";
import { Container, Dropdown, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MainMenu extends React.Component {
    render() {
        return <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header href='/'>
                    <Icon inverted color='blue' name='terminal' size='large' />
                    Azure Battleground
                </Menu.Item>
                <Menu.Item as='a' href='/'>Home</Menu.Item>
                <Menu.Item as='a' href='/about'>About</Menu.Item>

                <Dropdown item simple text='Exercises'>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>Compute</span>
                            <Dropdown.Menu className='mainMenu-exercisesMenu'>
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

                <Dropdown item simple text='Battleground' className='mainMenu-exercisesMenu'>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Link to='/exercises/battleground/tests'>Tests</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='/exercises/battleground/hall-of-fame'>Hall of Fame</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='/exercises/battleground/ranking'>Ranking</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>;
    }
}