import { Notif } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ notify }) => {
  return <Notif>{notify}</Notif>;
};

Notification.propTypes = {
  notify: PropTypes.string.isRequired,
};
