import PropTypes from 'prop-types';
import {
  ButtonList,
  FeedbackBtn,
  ButtonListItem,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonListItem key={option}>
          <FeedbackBtn type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </FeedbackBtn>
        </ButtonListItem>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
