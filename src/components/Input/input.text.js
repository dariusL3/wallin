import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { BtnMax } from '@src/components/Button';
import { COLORS, FONT } from '@src/styles';

import { colorsSelector } from '@src/theme/theme.selector';
import { useSelector } from 'react-redux';
import { commonStyled as styled } from './input.styled';

const inputStyled = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontFamily: FONT.NAME.specialMedium,
    fontSize: FONT.SIZE.medium,
    lineHeight: FONT.SIZE.medium + 4,
    padding: 0,
  },
});

const Input = React.forwardRef((props, ref) => {
  const {
    label,
    labelStyle,
    errorStyle,
    validated,
    containerStyled,
    showBorderBottom,
    hook,
    inputMax,
    containerInputStyle,
    ...rest
  } = props;
  const [state, setState] = React.useState({
    isFocused: false,
  });
  const { isFocused } = state;
  const colors = useSelector(colorsSelector);
  const onFocus = () => {
    setState({ ...state, isFocused: true });
    if (typeof rest.onFocus === 'function') {
      rest.onFocus();
    }
  };
  const onBlur = () => {
    setState({ ...state, isFocused: false });
    if (typeof rest.onBlur === 'function') {
      rest.onBlur();
    }
  };
  return (
    <View style={[styled.container, containerStyled]}>
      {!!label && (
        <Text
          style={[
            styled.label,
            isFocused ? styled.labelFocused : null,
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          inputStyled.inputContainer,
          isFocused && inputStyled.inputFocused,
          containerInputStyle && containerInputStyle,
        ]}
      >
        <TextInput
          {...rest}
          ref={ref}
          style={[
            inputStyled.input,
            rest.style ? rest.style : null,
            { color: colors.text1 },
          ]}
          onFocus={onFocus}
          onBlur={onBlur}
          autoCapitalize="none"
          spellCheck={false}
          textAlignVertical="center"
          autoCompleteType="off"
          autoCorrect={false}
          allowFontScaling={false}
          placeholderTextColor={colors.subText}
        />
        {inputMax.visible && <BtnMax onPress={inputMax.handleShowMax} />}
      </View>
      {validated && validated.error && (
        <Text style={[styled.error, errorStyle]}>{validated.message}</Text>
      )}
    </View>
  );
});

Input.defaultProps = {
  label: '',
  validated: {
    error: false,
    message: '',
  },
  containerStyled: {},
  showBorderBottom: true,
  labelStyle: {},
  errorStyle: {},
  hook: () => null,
  inputMax: {
    visible: false,
    handleShowMax: () => null,
  },
  containerInputStyle: null,
};

Input.propTypes = {
  label: PropTypes.string,
  validated: PropTypes.shape({
    error: PropTypes.bool,
    message: PropTypes.string,
  }),
  containerStyled: PropTypes.any,
  labelStyle: PropTypes.any,
  showBorderBottom: PropTypes.bool,
  errorStyle: PropTypes.any,
  hook: PropTypes.element,
  inputMax: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    handleShowMax: PropTypes.func.isRequired,
  }),
  containerInputStyle: PropTypes.any,
};

export default Input;
