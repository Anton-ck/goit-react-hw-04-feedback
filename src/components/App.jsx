import React, { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const updateFeedback = e.target.name;
    this.setState(prevState => {
      return {
        [updateFeedback]: prevState[updateFeedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good * 100) / this.countTotalFeedback() || 0).toFixed(
      0
    );
  };

  render() {
    return (
      <Container>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        />
        <Section
          title="Statistic"
          children={
            this.countTotalFeedback() ? (
              <Statistic
                countTotalFeedback={this.countTotalFeedback()}
                countPositiveFeedbackPercentage={
                  this.countPositiveFeedbackPercentage()
                }
                dataState={Object.entries(this.state)}
              />
            ) : (
              <Notification notify="There is no feedback" />
            )
          }
        />
      </Container>
    );
  }
}
