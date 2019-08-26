import React from "react";
import { Segment, Container, List, Divider, Grid, Header, Image } from "semantic-ui-react";

export default class Footer extends React.Component {
    render() {
        return <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Basics' />
                        <List link inverted>
                            <List.Item as='a'>Home</List.Item>
                            <List.Item as='a'>About</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Exercises' />
                        <List link inverted>
                            <List.Item as='a'>Compute</List.Item>
                            <List.Item as='a'>Storage</List.Item>
                            <List.Item as='a'>Integration</List.Item>
                            <List.Item as='a'>Networking</List.Item>
                            <List.Item as='a'>Containers</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Battleground' />
                        <List link inverted>
                            <List.Item as='a'>Tests</List.Item>
                            <List.Item as='a'>Hall of Fame</List.Item>
                            <List.Item as='a'>Ranking</List.Item>
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
                    <List.Item as='a' href='#'>
                        Site Map
            </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
            </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
            </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
            </List.Item>
                </List>
            </Container>
        </Segment>;
    }
}