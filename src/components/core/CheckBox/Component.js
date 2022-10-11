import PropTypes from 'prop-types';
import { CheckBox as RNCheckBox } from '@rneui/themed';

const CheckBox = RNCheckBox;

CheckBox.propTypes = {
  label: PropTypes.string,
  labelStyle: PropTypes.objectOf(PropTypes.object),
  containerStyle: PropTypes.objectOf(PropTypes.object)
};

export default CheckBox;
