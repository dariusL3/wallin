import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch } from 'react-redux';
import { actionGetPDexV3Inst } from '@screens/PDexV3';
import { withLayout_2 } from '@src/components/Layout';
import { Header } from '@src/components';
import { ScrollView, Button } from '@src/components/core';
import { createForm } from '@src/components/core/reduxForm';
import { actionSetNFTTokenData } from '@src/redux/actions/account';
import LoadingTx from '@src/components/LoadingTx';
import {
  PrivacyVersion,
  ACCOUNT_CONSTANT,
} from 'react-native-incognitojs';
import format from '@src/utils/format';
import { PRV } from '@src/constants/common';
import { ExHandler } from '@src/services/exception';
import globalStyled from '@src/theme/theme.styled';
import { Hook } from '@screens/PDexV3/features/Extra';
import NFTTokenHook from './NFTToken.hook';

const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
    paddingTop: 32,
  },
  form: {
    // flex: 1,
    paddingVertical: globalStyled.defaultPadding.paddingVertical,
    minHeight: 100,
    marginBottom: 50,
  },
});

export const formConfigs = {
  formName: 'FORM_MINT_NFT_TOKEN',
  amount: 'amount',
};

const initialFormValues = {
  selltoken: '',
  buytoken: '',
  slippagetolerance: '',
  feetoken: '',
};

const Form = createForm(formConfigs.formName, {
  initialValues: initialFormValues,
  destroyOnUnmount: true,
  enableReinitialize: true,
});

export const FormMint = React.memo(() => {
  const dispatch = useDispatch();
  const [minting, setMinting] = React.useState(false);
  const navigation = useNavigation();
  const hookFactories = React.useMemo(
    () =>
      [
        {
          label: 'Amount',
          value: 'Fee',
        },
        {
          label: 'Network fee',
          value: format.amountFull(
            ACCOUNT_CONSTANT.MAX_FEE_PER_TX,
            PRV.pDecimals,
            false,
          ),
        },
      ].map((hook) => <Hook {...hook} key={hook.label} />),
    [],
  );
  const onMint = async () => {
    try {
      await setMinting(true);
      const pDexV3Inst = await dispatch(actionGetPDexV3Inst());
      await pDexV3Inst.createAndMintNftTx({
        extra: { version: PrivacyVersion.ver2 },
      });
      await dispatch(actionSetNFTTokenData());
    } catch (error) {
      new ExHandler(error).showErrorToast();
    } finally {
      await setMinting(false);
      navigation.goBack();
    }
  };
  return (
    <View style={styled.form}>
      <Form>
        {({ handleSubmit }) => (
          <>
            {hookFactories}
            <Button
              title={`Mint${minting ? '...' : ''}`}
              disabled={minting}
              onPress={onMint}
              buttonStyle={{ marginTop: 24 }}
            />
            {minting && <LoadingTx />}
          </>
        )}
      </Form>
    </View>
  );
});

const MintNFTToken = (props) => {
  const hookFactories = React.useMemo(
    () => [
      {
        label: 'What is Lorem Ipsum?',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
    [],
  );
  return (
    <View style={styled.container}>
      <Header title="Mint a nft token" />
      <ScrollView style={styled.scrollview}>
        {hookFactories.map((hook) => (
          <NFTTokenHook {...hook} key={hook.label} />
        ))}
        <FormMint />
      </ScrollView>
    </View>
  );
};

MintNFTToken.propTypes = {};

export default withLayout_2(React.memo(MintNFTToken));
