import React from "react";
import Axios from "axios";
import { IQuiz } from "../interfaces/quiz";
import Store from "../../store";
import { Container, Breadcrumb, Segment, Header, List, Divider, Progress, Loader, Dimmer, Icon, Statistic } from "semantic-ui-react";
import { Link } from "react-router-dom";
import QuizClock from "./quizClock";

export default class QuizRunner extends React.Component<{}, QuizState> {
    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            answers: [],
            metadata: Store.getKey('quiz'),
            questionIndex: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            showAnswers: false,
            questionsTotal: 0,
            isLoading: true,
            shouldStopClock: false,
            quizFinished: false
        };

        Axios.get<QuizData>(`/db/quizes/data/${this.state.metadata.id}.json`).then(res => {
            let questions = this.shuffle(res.data.questions);
            this.setState({
                questions,
                answers: this.shuffle(questions[0].answers),
                questionsTotal: res.data.questions.length,
                isLoading: false
            });
        });

        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.clockEndedHandler = this.clockEndedHandler.bind(this);
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

        this.proceedToNextQuestion();
    }

    private renderQuiz() {
        return <List selection verticalAlign='middle'>
            {this.renderAnswers()}
        </List>;
    }

    private renderAnswers() {
        let answers = [];
        this.state.answers.forEach((value, index) => {
            answers.push(<List.Item key={index}>
                {this.renderIcon(value)}
                <List.Content>
                    <List.Header onClick={this.handleAnswerClick.bind(null, value)}>{value.text}</List.Header>
                </List.Content>
            </List.Item>);
        });

        return answers;
    }

    private shuffle(array: Array<any>) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    private renderIcon(answer: QuizAnswer) {
        if (this.state.showAnswers === false) {
            return;
        }

        if (answer.isCorrect) {
            return <List.Icon name='check' color='green' />;
        }

        return <List.Icon name='close' color='red' />;
    }

    private renderCurrentQuestion() {
        return `Question ${this.state.questionIndex + 1}: ${this.state.questions[this.state.questionIndex].text}`;
    }

    private clockEndedHandler() {
        this.setState({
            showAnswers: true
        });

        this.proceedToNextQuestion();
    }

    private proceedToNextQuestion() {
        if (this.state.questionIndex + 1 === this.state.questionsTotal) {
            this.setState({
                quizFinished: true
            });

            return;
        }

        setTimeout(() => this.setState({
            selectedAnswer: undefined,
            showAnswers: false,
            questionIndex: this.state.questionIndex + 1,
            shouldStopClock: false,
            answers: this.shuffle(this.state.questions[this.state.questionIndex + 1].answers)
        }), 3000);
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
                <Header as='h4'>{this.state.questions.length > 0 && this.state.quizFinished == false && this.renderCurrentQuestion()}</Header>
                {this.state.questions.length > 0 && this.state.quizFinished == false && this.renderQuiz()}
                {this.state.questions.length > 0 && this.state.quizFinished == false &&
                    <QuizClock key={this.state.questionIndex}
                        questionTime={this.state.questions[this.state.questionIndex].timeInSeconds}
                        shouldStop={this.state.shouldStopClock}
                        clockCallback={this.clockEndedHandler} />}
                {this.state.isLoading == true && <Dimmer active>
                    <Loader indeterminate>Loading quiz...</Loader>
                </Dimmer>}
                {this.state.quizFinished && <div><Header as='h2' icon textAlign='center'>
                    <Icon name='check' circular />
                    <Header.Content>Congratulations!</Header.Content>
                    <Header.Subheader>
                        You have finished a quiz. Here are your results:
                    </Header.Subheader>
                </Header>
                    <Statistic.Group widths='two'>
                        <Statistic color='green'>
                            <Statistic.Value>{this.state.correctAnswers}</Statistic.Value>
                            <Statistic.Label>correct answers</Statistic.Label>
                        </Statistic>
                        <Statistic color='red'>
                            <Statistic.Value>{this.state.wrongAnswers}</Statistic.Value>
                            <Statistic.Label>wrong answers</Statistic.Label>
                        </Statistic>
                    </Statistic.Group></div>}
            </Segment>
        </Container>;
    }
}

type QuizState = {
    questions: QuizQuestion[],
    answers: QuizAnswer[],
    metadata: IQuiz,
    questionIndex: number,
    selectedAnswer?: QuizAnswer,
    correctAnswers: number,
    wrongAnswers: number,
    showAnswers: boolean,
    questionsTotal: number,
    isLoading: boolean,
    shouldStopClock: boolean,
    quizFinished: boolean
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