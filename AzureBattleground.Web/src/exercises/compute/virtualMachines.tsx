import React from "react";
import { Container, Header, Icon, List, Button, Label, SemanticCOLORS } from "semantic-ui-react";
import VirtualMachinesExercises from '../../../db/exercises/compute/virtualMachines';
import { IExercise } from "../interfaces/exercise";
import { Link } from "react-router-dom";
import Store from "../../store";
import LevelLabel from "../../ui/levelLabel";

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
            <LevelLabel level={exercise.level} />
            <List.Content floated='right'>
                <Button primary onClick={() => Store.setKey('exercise', exercise)}>
                    <Link to={'/exercises/compute/virtual-machines/' + this.getExerciseBeatifulIdentifier(exercise.name)} style={{ color: 'white' }}>Get started</Link>
                </Button>
            </List.Content>
            <List.Content>
                <List.Header>{exercise.name}</List.Header>
                {exercise.description}
            </List.Content>
        </List.Item>;
    }

    private getExerciseBeatifulIdentifier(name: string) {
        name = name.toLocaleLowerCase();
        name = name.replace(/ /g, '_');

        return name;
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