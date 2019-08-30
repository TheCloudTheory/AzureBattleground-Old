import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            error: ''
        };
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info) {
        this.setState({
            error: error.stack
        });
    }

    render() {
        if (this.state.hasError === true) {
            return <Container className='page-mainContainer'>
                <Header as='h1' icon textAlign='center'>
                    <Icon name='bug' circular />
                    <Header.Content>Ooops!</Header.Content>
                    <Header.Subheader>
                        Something went really, really wrong.<br />
                        If you believe it's a bug, fill an issue on GitHub providing the following info:
            </Header.Subheader>
                </Header>
                <code>{this.state.error.toString()}</code>
            </Container>;
        }

        return this.props.children;
    }
}

type ErrorBoundaryState = {
    hasError: boolean,
    error: string
}