import React from "react";
import { Container, Header, Icon, List, Button } from "semantic-ui-react";
import QuizesData from '../../../db/quizes/quizes';
import { IQuiz } from "../interfaces/quiz";
import LevelLabel from "../../ui/levelLabel";
import Store from "../../store";
import { Link } from "react-router-dom";

export default class Quizes extends React.Component<{}, QuizesState> {
    constructor(props) {
        super(props);

        this.state = {
            quizes: QuizesData.quizes
        };
    }

    private renderQuizes() {
        let items = [];
        this.state.quizes.forEach((value) => {
            items.push(this.renderListElement(value));
        });

        return <List divided verticalAlign='middle'>
            {items}
        </List>;
    }

    private renderListElement(quiz: IQuiz) {
        return <List.Item key={quiz.id.toString()}>
            <LevelLabel level={quiz.level} />
            <List.Content floated='right'>
                <Button primary onClick={() => Store.setKey('quiz', quiz)}>
                    <Link to={'/'} style={{ color: 'white' }}>Get started</Link>
                </Button>
            </List.Content>
            <List.Content>
                <List.Header>{quiz.title}</List.Header>
                {quiz.description}
            </List.Content>
        </List.Item>;
    }

    render() {
        return <Container className='page-mainContainer'>
            <Header as='h2'>
                <Icon name='desktop' />
                <Header.Content>
                    Quizes
                <Header.Subheader>Here you can find the list of all available quizes with different levels of difficulty.</Header.Subheader>
                </Header.Content>
            </Header>
            {this.renderQuizes()}
        </Container>;
    }
}

type QuizesState = {
    quizes: IQuiz[]
}