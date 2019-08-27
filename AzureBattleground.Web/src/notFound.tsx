import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";

export default class NotFound extends React.Component {
    render() {
        return <Container className='page-mainContainer'>
            <Header as='h1' icon textAlign='center'>
                <Icon name='frown' circular />
                <Header.Content>Not Found</Header.Content>
                <Header.Subheader>
                    For some reason we couldn't find the requested page. It may either a bug or not implemented module.<br />
                    If you believe it's a bug, fill an issue on GitHub.
                </Header.Subheader>
            </Header>
        </Container>;
    }
}