import { useState } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const updateFeedback = e.target.name;
    switch (updateFeedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const feedbackData = {
    good,
    neutral,
    bad,
  };
  const countTotalFeedback = () => {
    return Object.values(feedbackData).reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good * 100) / countTotalFeedback() || 0).toFixed(0);
  };
  return (
    <Container>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={Object.keys(feedbackData)}
            onLeaveFeedback={onLeaveFeedback}
          />
        }
      />
      <Section
        title="Statistic"
        children={
          countTotalFeedback() ? (
            <Statistic
              countTotalFeedback={countTotalFeedback()}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
              feedbackData={Object.entries(feedbackData)}
            />
          ) : (
            <Notification notify="There is no feedback" />
          )
        }
      />
    </Container>
  );
};
