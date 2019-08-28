import React from "react";
import { Progress } from "semantic-ui-react";

export default class QuizClock extends React.Component<QuizClockProps, QuizClockState> {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: 1
        };
    }

    private isSuccess() {
        if(this.state.currentTime / this.props.questionTime < 0.7) {
            return true;
        }

        return false;
    }

    private isWarning() {
        let ratio = this.state.currentTime / this.props.questionTime;
        if(ratio < 0.95 && ratio >= 0.7) {
            return true;
        }

        return false;
    }

    private isError() {
        if(this.state.currentTime / this.props.questionTime >= 0.95) {
            return true;
        }

        return false;
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            if(this.state.currentTime === this.props.questionTime) {
                return;
            }

            if(this.props.shouldStop) {
                return;
            }

            this.setState({
                currentTime: this.state.currentTime + 1
            });
        }, 1000);

        this.setState({
            intervalId: intervalId
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return <Progress 
                value={this.props.questionTime - this.state.currentTime} 
                total={this.props.questionTime} 
                progress='value' 
                success={this.isSuccess()}
                warning={this.isWarning()}
                error={this.isError()} />;
    }
}

type QuizClockProps = {
    questionTime: number,
    shouldStop: boolean,
}

type QuizClockState = {
    currentTime: number,
    intervalId?: number
}