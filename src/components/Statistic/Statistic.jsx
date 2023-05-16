import PropTypes from 'prop-types';
import {
  StatisticCount,
  StatisticList,
  StatisticListItem,
} from './Statistic.styled';

export const Statistic = ({
  feedbackData,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <StatisticList>
      {feedbackData.map(feedbackDataItem => (
        <StatisticListItem key={feedbackDataItem[0]}>
          {feedbackDataItem[0]}:{' '}
          <StatisticCount>{feedbackDataItem[1]}</StatisticCount>
        </StatisticListItem>
      ))}

      <StatisticListItem>
        Total feedbacks: <StatisticCount>{countTotalFeedback}</StatisticCount>
      </StatisticListItem>
      <StatisticListItem>
        Positive feedback:{' '}
        <StatisticCount>{countPositiveFeedbackPercentage}%</StatisticCount>
      </StatisticListItem>
    </StatisticList>
  );
};

Statistic.propTypes = {
  feedbackData: PropTypes.array,
  positiveFeedbackPercentageCounter: PropTypes.func,
};
