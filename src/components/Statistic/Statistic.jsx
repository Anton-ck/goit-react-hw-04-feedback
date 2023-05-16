import PropTypes from 'prop-types';
import {
  StatisticCount,
  StatisticList,
  StatisticListItem,
} from './Statistic.styled';

export const Statistic = ({
  dataState,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <StatisticList>
      {dataState.map(item => (
        <StatisticListItem key={item[0]}>
          {item[0]}: <StatisticCount>{item[1]}</StatisticCount>
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
