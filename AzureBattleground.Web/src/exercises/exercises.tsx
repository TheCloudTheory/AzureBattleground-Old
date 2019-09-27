import React from "react";
import { Container, Header, Segment, Breadcrumb, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AzureDevOpsExercises from '../../db/exercises/devops/azureDevOps';
import { IExercise } from "./interfaces/exercise";
import Store from "../store";

export default class Exercises extends React.Component {
    private renderExercises() {
        return <List>
            <List.Item>
                <List.Content>
                    <List.Header as='a' href='/exercises/devops'>DevOps</List.Header>
                    <List.List>
                        <List.Item>
                            <List.Content>
                                <List.Header as='a' href='/exercises/devops/azure-devops'>Azure DevOps</List.Header>
                                <List.List>
                                    {this.renderExercisesFromFile(AzureDevOpsExercises.exercises, AzureDevOpsExercises.category, AzureDevOpsExercises.module)}
                                </List.List>
                            </List.Content>
                        </List.Item>
                    </List.List>
                </List.Content>
            </List.Item>
        </List>
    }

    private renderExercisesFromFile(data: IExercise[], category: string, module: string) {
        let exercises = [];
        data.forEach((exercise, index) => {
            exercises.push(<List.Item key={index} onClick={() => Store.setKey('exercise', exercise)}>
                <List.Content>
                    <List.Header as='a' href={`/exercises/${category}/${module}/${this.getExerciseBeatifulIdentifier(exercise.name)}`}>{exercise.name}</List.Header>
                    <List.Description>{exercise.description}</List.Description>
                </List.Content>
            </List.Item>);
        });

        return exercises;
    }

    private getExerciseBeatifulIdentifier(name: string) {
        name = name.toLocaleLowerCase();
        name = name.replace(/ /g, '_');

        return name;
    }

    render() {
        return <Container className='page-mainContainer'>
            <Breadcrumb size='small'>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Exercises</Breadcrumb.Section>
            </Breadcrumb>
            <Header as='h1' attached='top'>
                <Header.Content>
                    Exercises
                    <Header.Subheader>Here you can find all the available exercises, divided into categories.</Header.Subheader>
                </Header.Content>
            </Header>
            <Segment attached>
                {this.renderExercises()}
            </Segment>
        </Container>;
    }
}