import React from "react";
import Axios from 'axios';
import { Container, Header, Segment, Breadcrumb } from "semantic-ui-react";
import ReactMarkdown from 'react-markdown';
import { IExercise } from "./interfaces/exercise";
import Store from "../store";
import { Link } from "react-router-dom";

export default class Exercise extends React.Component<{}, ExerciseType> {
    constructor(props) {
        super(props);

        this.state = {
            exercise: '',
            metadata: Store.getKey('exercise')
        };

        Axios.get(`/db/exercises/${this.state.metadata.path}`).then(res => {
            this.setState({
                exercise: res.data
            });
        });
    }

    render() {
        return <Container style={{ padding: '3em 0' }}>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section><Link to='/exercises'>Exercises</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section><Link to='/exercises/compute'>Compute</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section><Link to='/exercises/compute/virtual-machines'>Virtual Machines</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>{this.state.metadata.name}</Breadcrumb.Section>
            </Breadcrumb>
            <Segment>
                <Header as='h2'>
                    <Header.Content>
                        {this.state.metadata.name}
                        <Header.Subheader>{this.state.metadata.description}</Header.Subheader>
                    </Header.Content>
                </Header>
                <ReactMarkdown source={this.state.exercise} />
            </Segment>
        </Container>;
    }
}

type ExerciseType = {
    exercise: string,
    metadata: IExercise
}