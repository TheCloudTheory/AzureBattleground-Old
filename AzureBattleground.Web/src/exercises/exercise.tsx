import React from "react";
import Axios from 'axios';
import { Container, Header, Segment } from "semantic-ui-react";
import ReactMarkdown from 'react-markdown';
import { IExercise } from "./interfaces/exercise";
import Store from "../store";

export default class Exercise extends React.Component<{}, ExerciseType> {
    constructor(props) {
        super(props);

        this.state = {
            exercise: '',
            metadata: Store.getKey('exercise')
        };

        Axios.get('/db/exercises/compute/virtualMachines/1.md').then(res => {
            this.setState({
                exercise: res.data
            });
        });
    }

    render() {
        return <Container style={{ padding: '3em 0' }}>
            <Header as='h2'>
                <Header.Content>
                    {this.state.metadata.name}
                    <Header.Subheader>{this.state.metadata.description}</Header.Subheader>
                </Header.Content>
            </Header>
            <Segment><ReactMarkdown source={this.state.exercise} /></Segment>
        </Container>;
    }
}

type ExerciseType = {
    exercise: string,
    metadata: IExercise
}