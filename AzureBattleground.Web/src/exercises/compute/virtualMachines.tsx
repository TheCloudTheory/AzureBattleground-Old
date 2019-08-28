import React from "react";
import { Container, Header, Icon, List, Button, Label, SemanticCOLORS, Item } from "semantic-ui-react";
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

        return <Item.Group divided>
            {items}
        </Item.Group>;
    }

    private renderListElement(exercise: IExercise) {
        return <Item key={exercise.id.toString()}>
            <LevelLabel level={exercise.level} />
            <Item.Content>
                <Item.Header>{exercise.name}</Item.Header>
                <Item.Meta>
                    <span>Time needed - approx. {exercise.estimatedTimeInMinutes} minutes</span>
                </Item.Meta>
                <Item.Description>{exercise.description}</Item.Description>
                <Item.Extra>
                    <Button primary floated='right' onClick={() => Store.setKey('exercise', exercise)}>
                        <Link to={'/exercises/compute/virtual-machines/' + this.getExerciseBeatifulIdentifier(exercise.name)} style={{ color: 'white' }}>Get started</Link>
                    </Button>
                    {this.renderLabels(exercise.tags)}
                </Item.Extra>
            </Item.Content>
        </Item>;
    }

    private getExerciseBeatifulIdentifier(name: string) {
        name = name.toLocaleLowerCase();
        name = name.replace(/ /g, '_');

        return name;
    }

    private renderLabels(tags: string[]) {
        let labels = [];
        tags.forEach((value, index) => {
            labels.push(<Label key={index}>{value}</Label>)
        });

        return labels;
    }

    render() {
        return <Container className='page-mainContainer'>
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