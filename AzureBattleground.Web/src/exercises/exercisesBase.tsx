import React from "react";
import { IExercise } from "./interfaces/exercise";
import { Label, Item, Button, Container, Header, Icon, SemanticICONS } from "semantic-ui-react";
import Store from "../store";
import { Link } from "react-router-dom";
import LevelLabel from "../ui/levelLabel";

export default class ExercisesBase extends React.Component<ExercisesBaseProps> {
    constructor(props: Readonly<ExercisesBaseProps>) {
        super(props);
    }

    protected renderExercises() {
        let items = [];
        this.props.exercises.forEach((value) => {
            items.push(this.renderListElement(value));
        });

        if (items.length === 0) {
            return <Header as='h3' icon textAlign='center'>
                <Icon name='puzzle piece' circular />
                <Header.Content>No exercises</Header.Content>
                <Header.Subheader>
                    It seems we don't have any exercise for this category. You can help us fill it with incredible content on GitHub.
            </Header.Subheader>
            </Header>;
        }

        return <Item.Group divided>
            {items}
        </Item.Group>;
    }

    private renderListElement(exercise: IExercise) {
        let routeParts = exercise.path.split('/');

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
                        <Link to={`/exercises/${this.props.routeBase}/${this.getExerciseBeatifulIdentifier(exercise.name)}`} style={{ color: 'white' }}>Get started</Link>
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
                <Icon name={this.props.icon} />
                <Header.Content>
                    {this.props.title}
                    <Header.Subheader>{this.props.subheader}</Header.Subheader>
                </Header.Content>
            </Header>
            {this.renderExercises()}
        </Container>;
    }
}

type ExercisesBaseProps = {
    exercises: IExercise[],
    routeBase: string,
    title: string,
    subheader: string,
    icon: SemanticICONS
}