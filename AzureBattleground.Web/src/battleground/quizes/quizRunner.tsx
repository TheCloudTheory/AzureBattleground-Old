import React from "react";
import Axios from "axios";
import { IQuiz } from "../interfaces/quiz";
import Store from "../../store";
import { Container, Breadcrumb, Segment, Header, List, Divider, Progress, Loader, Dimmer } from "semantic-ui-react";
import { Link } from "react-router-dom";
import QuizClock from "./quizClock";

export default class QuizRunner extends React.Component<{}, QuizState> {
    constructor(props) {
        super(props);

        this.state = {
            quiz: undefined,
            metadata: Store.getKey('quiz'),
            questionIndex: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            showAnswers: false,
            questionsTotal: 0,
            isLoading: true,
            shouldStopClock: false
        };

        Axios.get<QuizData>(`/db/quizes/data/${this.state.metadata.id}.json`).then(res => {
            this.setState({
                quiz: res.data,
                questionsTotal: res.data.questions.length,
                isLoading: false
            });
        });

        this.handleAnswerClick = this.handleAnswerClick.bind(this);
    }

    private handleAnswerClick(answer: QuizAnswer) {
        let correctAnswers = this.state.correctAnswers;
        let wrongAnswers = this.state.wrongAnswers;
        if (answer.isCorrect === true) {
            correctAnswers += 1;
        } else {
            wrongAnswers += 1;
        }

        this.setState({
            selectedAnswer: answer,
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers,
            showAnswers: true,
            shouldStopClock: true
        });

        if (this.state.questionIndex + 1 == this.state.questionsTotal) {
            return;
        }

        setTimeout(() => this.setState({
            selectedAnswer: undefined,
            showAnswers: false,
            questionIndex: this.state.questionIndex + 1,
            shouldStopClock: false
        }), 3000);
    }

    private renderQuiz() {
        return <List selection verticalAlign='middle'>
            {this.renderAnswers()}
        </List>;
    }

    private renderAnswers() {
        let answers = [];
        let currentQuestion = this.state.quiz.questions[this.state.questionIndex];
        currentQuestion.answers.forEach((value, index) => {
            answers.push(<List.Item key={index}>
                {this.renderIcon(value)}
                <List.Content>
                    <List.Header onClick={this.handleAnswerClick.bind(null, value)}>{value.text}</List.Header>
                </List.Content>
            </List.Item>);
        });

        return answers;
    }

    private renderIcon(answer: QuizAnswer) {
        if (typeof (this.state.selectedAnswer) === 'undefined' || this.state.showAnswers === false) {
            return;
        }

        if (answer.isCorrect) {
            return <List.Icon name='check' color='green' />;
        }

        return <List.Icon name='close' color='red' />;
    }

    private renderCurrentQuestion() {
        return `Question ${this.state.questionIndex + 1}: ${this.state.quiz.questions[this.state.questionIndex].text}`;
    }

    render() {
        return <Container className='page-mainContainer'>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section><Link to='/battleground'>Battleground</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section><Link to='/battleground/quizes'>Quizes</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>{this.state.metadata.title}</Breadcrumb.Section>
            </Breadcrumb>
            <Segment>
                <Header as='h2'>
                    <Header.Content>
                        {this.state.metadata.title}
                        <Header.Subheader>{this.state.metadata.description}</Header.Subheader>
                    </Header.Content>
                </Header>
                <Divider />
                <Header as='h4'>{typeof (this.state.quiz) !== 'undefined' && this.renderCurrentQuestion()}</Header>
                {typeof (this.state.quiz) !== 'undefined' && this.renderQuiz()}
                {typeof (this.state.quiz) !== 'undefined' &&
                    <QuizClock key={this.state.questionIndex}
                        questionTime={this.state.quiz.questions[this.state.questionIndex].timeInSeconds}
                        shouldStop={this.state.shouldStopClock} />}
                {this.state.isLoading == true && <Dimmer active>
                    <Loader indeterminate>Loading quiz...</Loader>
                </Dimmer>}
            </Segment>
        </Container>;
    }
}

type QuizState = {
    quiz: QuizData,
    metadata: IQuiz,
    questionIndex: number,
    selectedAnswer?: QuizAnswer,
    correctAnswers: number,
    wrongAnswers: number,
    showAnswers: boolean,
    questionsTotal: number,
    isLoading: boolean,
    shouldStopClock: boolean
}

type QuizData = {
    questions: QuizQuestion[];
}

type QuizQuestion = {
    id: Number,
    text: string,
    kind: 'single|multiple',
    answers: QuizAnswer[],
    timeInSeconds: number
}

type QuizAnswer = {
    id: Number,
    text: string,
    isCorrect: boolean
}