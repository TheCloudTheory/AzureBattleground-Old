import React from "react";
import { Container, Header, Icon, List, Button, Label, SemanticCOLORS } from "semantic-ui-react";
import VirtualMachinesExercises from '../../../db/exercises/compute/virtualMachines';
import { IExercise } from "../interfaces/exercise";

export default class VirtualMachines extends React.Component<{}, VirtualMachinesState> {
    constructor(props) {
        super(props);

        this.state = {
            exercises: VirtualMachinesExercises.exercises
        };
    }

    private renderExercises() {
        let items = [];
        this.state.exercises.forEach((value) => {
            items.push(this.renderListElement(value));
        });

        return <List divided verticalAlign='middle'>
            {items}
        </List>;
    }

    private renderListElement(exercise: IExercise) {
        return <List.Item key={exercise.id.toString()}>
            {this.getLevelLabel(exercise.level)}
            <List.Content floated='right'>
                <Button primary>Get started</Button>
            </List.Content>
            <List.Content>
                <List.Header>{exercise.name}</List.Header>
                {exercise.description}
            </List.Content>
        </List.Item>;
    }

    private getLevelLabel(level: Number) {
        let label: LevelLabel = {
            text: '',
            color: 'grey'
        };

        switch (level) {
            case 1:
                label.text = 'Easy';
                label.color = 'green';
                break;
            case 2:
                label.text = 'Medium';
                label.color = 'orange';
                break;
            case 3:
                label.text = 'Hard';
                label.color = 'red';
                break;
            default:
                label.text = 'Not rated';
                label.color = 'grey';
        }

        return <Label color={label.color} horizontal style={{ float: 'left' }}>
            {label.text}
        </Label>;
    }

    render() {
        return <Container style={{ padding: '3em 0' }}>
            <Header as='h2'>
                <Icon name='desktop' />
                <Header.Content>
                    Virtual Machines
                    <Header.Subheader>Learn about virtual machines in Azure</Header.Subheader>
                </Header.Content>
            </Header>
            {this.renderExercises()}
        </Container>;
    }
}

type VirtualMachinesState = {
    exercises: IExercise[]
}

type LevelLabel = {
    text: string;
    color: SemanticCOLORS
}