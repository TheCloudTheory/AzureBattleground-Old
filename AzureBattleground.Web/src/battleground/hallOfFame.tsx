import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

export default class HallOfFame extends React.Component {
    render() {
        return <Container className='page-mainContainer'>
            <Header as='h1' icon textAlign='center'>
                <Icon name='coffee' circular />
                <Header.Content>Coming soon!</Header.Content>
                <Header.Subheader>
                    This module is under development and will be available soon. If you want to help us, check out the possibilities on GitHub!
            </Header.Subheader>
            </Header>
        </Container>;
    }
}