import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import { COLORS } from '@src/styles';

const WizardAnim = ({ onAnimationFinish }) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        style={styles.lottie}
        resizeMode="cover"
        onAnimationFinish={onAnimationFinish}
        source={require('../../../assets/lottie/intro.json')}
      />
    </View>
  );
};

WizardAnim.propTypes = {
  onAnimationFinish: PropTypes.func.isRequired,
};

export default WizardAnim;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: '100%',
  },
});
