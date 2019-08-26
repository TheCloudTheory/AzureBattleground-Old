import React from "react";
import { Segment, Grid, Header, Icon, Container, Label } from "semantic-ui-react";

export default class Home extends React.Component {
  render() {
    return <div>
      <Segment vertical className='home-mainSegment'>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h1' icon>
                <Icon inverted name='terminal' size='large' circular />Azure Battleground
                <Label color='red' >
                  Alpha
                </Label>
              </Header>
              <p style={{ fontSize: '1.33em' }}>Join the constant battle of excelling in Azure.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Container style={{ padding: '3em 0' }}>
        <Grid columns='equal' stackable>
          <Grid.Row>
            <Grid.Column textAlign='left' verticalAlign='middle'>
              <Header as='h2'>
                Designed for everyone!
                <Header.Subheader>
                  No matter how proficient with Azure you are, you can always find something for you.
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon name='universal access' size='massive' circular />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns='equal' stackable>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Icon name='file code' size='massive' circular />
            </Grid.Column>
            <Grid.Column textAlign='left' verticalAlign='middle'>
              <Header as='h2'>
                Focused on practice
                <Header.Subheader>
                  Just grab your subscription and start coding with multiple exercises!
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns='equal' stackable>
          <Grid.Row>
            <Grid.Column textAlign='left' verticalAlign='middle'>
              <Header as='h2'>
                Compete with others
                <Header.Subheader>
                  Solve quizes and use the battleground to battle with others
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon name='trophy' size='massive' circular />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>;
  }
}