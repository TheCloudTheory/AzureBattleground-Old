import React from "react";
import { Segment, Container, List, Divider, Grid, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Basics' />
                        <List link inverted>
                            <List.Item><Link to='/'>Home</Link></List.Item>
                            <List.Item><Link to='/about'>About</Link></List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Exercises' />
                        <List link inverted>
                            <List.Item><Link to='/exercises/compute'>Compute</Link></List.Item>
                            <List.Item><Link to='/exercises/storage'>Storage</Link></List.Item>
                            <List.Item><Link to='/exercises/integration'>Integration</Link></List.Item>
                            <List.Item><Link to='/exercises/networking'>Networking</Link></List.Item>
                            <List.Item><Link to='/exercises/containers'>Containers</Link></List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Battleground' />
                        <List link inverted>
                            <List.Item><Link to='/battleground/quizes'>Quizes</Link></List.Item>
                            <List.Item><Link to='/battleground/hall-of-fame'>Hall of Fame</Link></List.Item>
                            <List.Item><Link to='/battleground/ranking'>Ranking</Link></List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header inverted as='h4' content='Want to help? Check us on:' />
                        <p>
                            <Image src='images/GitHub_Logo_White.png' size='small' width={100} as='a' href='https://github.com/TheCloudTheory/AzureBattleground' target='_blank' centered className='help-image' />
                        </p>
                    </Grid.Column>
                </Grid>

                <Divider inverted section />
                <List horizontal inverted divided link size='small'>
                    <List.Item>
                        <Link to='/site-map'>Site Map</Link>
                    </List.Item>
                    <List.Item>
                        <Link to='/contact-us'>Contact Us</Link>
                    </List.Item>
                    <List.Item>
                        <Link to='/terms-and-conditions'>Terms and Conditions</Link>
                    </List.Item>
                    <List.Item>
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                    </List.Item>
                </List>
            </Container>
        </Segment>;
    }
}