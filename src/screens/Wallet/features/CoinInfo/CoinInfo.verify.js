import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text} from '@components/core/index';
import { View2 } from '@components/core/View';
import globalStyled from '@src/theme/theme.styled';
import { withLayout_2 } from '@src/components/Layout';
import Header from '@src/components/Header';
import { FONT, COLORS } from '@src/styles';
import { useSelector } from 'react-redux';
import { selectedPrivacySelector } from '@src/redux/selectors';
import LinkingService from '@src/services/linking';

const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom: 30,
    fontFamily: FONT.NAME.specialMedium,
    fontSize: FONT.SIZE.medium,
    lineHeight: FONT.SIZE.medium + 4,
    color: COLORS.colorGreyBold,
  },
  sub: {
    color: COLORS.black,
    textDecorationLine: 'underline',
  },
  extra: {
    marginTop: 23,
  },
});

const CoinInfoVerify = () => {
  const { isVerified } = useSelector(selectedPrivacySelector.selectedPrivacy);
  return (
    <View2 style={styled.container}>
      <Header
        title={
          isVerified
            ? 'What is a verified coin?'
            : 'What is an unverified coin?'
        }
      />
      {isVerified ? <CoinInfoVerified /> : <CoinInfoUnVerified />}
    </View2>
  );
};

const NormalText = ({ text, sub }) => (
  <Text style={styled.text}>
    {text}
    <Text
      style={styled.sub}
      onPress={() =>
        LinkingService.openUrl(
          'https://incognito.org/t/verified-badges-for-custom-privacy-coins-on-incognito-chain/952',
        )
      }
    >
      {sub}
    </Text>
  </Text>
);

const CoinInfoVerified = () => {
  return (
    <View style={[styled.extra, {flex: 1, padding: 0, paddingTop: 24, marginTop: 0}, globalStyled.defaultPadding3]} borderTop>
      <NormalText text="Genuine coins that originate from an external blockchain (Ethereum, Bitcoin, Binance, etc.) are automatically verified." />
      <NormalText text="For user-created coins, the verified tick certifies that this coin is associated with a particular project and is not a duplicate." />
    </View>
  );
};

const CoinInfoUnVerified = () => {
  return (
    <View style={[styled.extra, {flex: 1, padding: 0, paddingTop: 24, marginTop: 0}, globalStyled.defaultPadding3]} borderTop>
      <NormalText text="If you are shielding a coin or adding it to your list, look out for the verified symbol to make sure you have the correct coin you are looking for." />
      <NormalText text="On certain blockchains, anyone can create duplicates with the same name and symbol. If an ERC20, BEP20 or BEP2 coin does not have a verified tick, it is likely to be a copy." />
      <NormalText
        text="If an Incognito coin does not have a verified tick, its creators have not yet gone through the process of "
        sub="verifying their coin."
      />
    </View>
  );
};

CoinInfoVerified.propTypes = {};

export default withLayout_2(CoinInfoVerify);
