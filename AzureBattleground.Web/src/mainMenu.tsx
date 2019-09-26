import React from "react";
import { Container, Dropdown, Menu, Icon } from "semantic-ui-react";

export default class MainMenu extends React.Component {
    render() {
        return <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as='a' href='/'>
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
                                <Dropdown.Item as='a' href='/exercises/compute/virtual-machines'>Virtual Machines</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/compute/app-services'>App Services</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/compute/service-fabric'>Service Fabric</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/compute/aks'>Azure Kubernetes Service</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/compute/aci'>Azure Container Instances</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/compute/azure-functions'>Azure Functions</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/compute/batch'>Azure Batch</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>Storage</span>
                            <Dropdown.Menu>
                                <Dropdown.Item as='a' href='/exercises/storage/storage'>Azure Storage</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/storage/sql'>Azure SQL</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/storage/cosmosdb'>Cosmos DB</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/storage/data-lake'>Azure Data Lake</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/storage/mysql'>Azure Database for MySQL</Dropdown.Item>
                                <Dropdown.Item as='a' href='/exercises/storage/postgresql'>Azure Database for PostgreSQL</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>DevOps</span>
                            <Dropdown.Menu className='mainMenu-exercisesMenu'>
                                <Dropdown.Item as='a' href='/exercises/devops/azure-devops'>Azure DevOps</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown item simple text='Battleground' className='mainMenu-exercisesMenu'>
                    <Dropdown.Menu>
                        <Dropdown.Item as='a' href='/battleground/quizes'>
                            Quizes
                        </Dropdown.Item>
                        <Dropdown.Item as='a' href='/battleground/hall-of-fame'>
                            Hall of Fame
                        </Dropdown.Item>
                        <Dropdown.Item as='a' href='/battleground/ranking'>
                            Ranking
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>;
    }
}