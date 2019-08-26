import React from "react";
import { Segment, Grid, Header, Icon } from "semantic-ui-react";

export default class Home extends React.Component {
    render() {
        return <Segment vertical className='home-mainSegment'>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h1' icon>
                <Icon inverted name='terminal' size='large' circular />Azure Battleground
              </Header>
              <p style={{ fontSize: '1.33em' }}>Join the constant battle of excelling in Azure.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>;
    }
}