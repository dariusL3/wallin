import React from 'react';
import { SectionItem as Section } from '@screens/Setting/features/Section';
import PropTypes from 'prop-types';
import {ClearFillIcon} from '@components/Icons/icon.clear';
import enhance from './RemoveStorage.enhance';

const RemoveStorage = (props) => {
  const { onPressRemove } = props;
  return (
    <Section
      data={{
        title: 'Clear history',
        desc: 'Remove locally stored data',
        handlePress: onPressRemove,
        icon: <ClearFillIcon />
      }}
    />
  );
};

RemoveStorage.propTypes = {
  onPressRemove: PropTypes.func.isRequired,
};

export default enhance(React.memo(RemoveStorage));
