import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

export default class About extends React.Component {
    render() {
        return <Container className='page-mainContainer'>
            <Header as='h1' icon textAlign='center'>
                <Icon name='question' circular />
                <Header.Content>About</Header.Content>
            </Header>
            <Segment>
                <b>Azure Battleground</b> is an open source project meant to combine Microsoft Azure learning platform with an ability to compete with other in terms of knowledge and experience.
                It is based on the following modules:<br />
                <ul>
                    <li>exercises</li>
                    <li>quizes</li>
                    <li>battleground</li>
                </ul>
                Each one gives you a unique feel and allows to decide how you want to structure your learning curve.
                <h2>Exercises</h2>
                Each exercise is a complete story describing a particular subset of Azure functionalities. They are brought to the platform by various individuals and offer different levels of experience required to complete them.
                Exercises are designed to offer you structured content and a chance to learn a unique skillset by perfoming tasks build in a very customized way.
                <h2>Quizes</h2>
                If you want to test your skills, quizes are something for you. By providing different levels of difficulty, you can easily use them to ensure, you are on the track with your proficiency with various Azur services.
                Quizes are also a great way to contribute to the Battleground, as you can simply create your very own ones and propose as an addition to the platform.
                <h2>Battleground</h2>
                Battlegound is the biggest and the most advanced of the proposed modules. It offers you a way to challenge yourself with other competitors in tests of various difficulty levels. It is also a way to quickly try out 
                skill you have learned and ensure, that everything is clear to you.
            </Segment>
        </Container>;
    }
}