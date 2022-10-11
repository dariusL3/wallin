import React, { useCallback } from 'react';
import MainLayout from '@components/MainLayout/index';
import { VirtualizedList, StyleSheet } from 'react-native';
import MasterKey from '@screens/BackUpPassphrase/components/MasterKey';
import { useDispatch, useSelector } from 'react-redux';
import {
  masterlessKeyChainSelector,
  noMasterLessSelector,
} from '@src/redux/selectors/masterKey';
import Action from '@screens/BackUpPassphrase/components/Action';
import { View, Text } from '@components/core';
import { useNavigation } from 'react-navigation-hooks';
import routeNames from '@routers/routeNames';
import { removeMasterKey, switchMasterKey } from '@src/redux/actions/masterKey';
import { FONT } from '@src/styles';

const styles = StyleSheet.create({
  padding: {
    marginHorizontal: 25,
    paddingBottom: 5,
  },
  actions: {
    marginTop: 20,
  },
  title: {
    marginBottom: 5,
    ...FONT.TEXT.label,
  },
});

const MasterKeyList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const list = useSelector(noMasterLessSelector);
  const masterlessKeyChains = useSelector(masterlessKeyChainSelector);
  const renderItem = useCallback(
    ({ item }) => {
      return (
        <MasterKey
          number={item.noOfKeychains}
          name={item.name}
          onPress={() => handleSwitch(item.name)}
          onDelete={list.length === 1 ? undefined : handleDelete}
          isActive={item.isActive}
        />
      );
    },
    [list],
  );

  const handleCreate = useCallback(() => {
    navigation.navigate(routeNames.CreateMasterKey);
  }, []);

  const handleImport = useCallback(() => {
    navigation.navigate(routeNames.ImportMasterKey);
  }, []);

  const handleSwitch = useCallback(async (name) => {
    await dispatch(switchMasterKey(name));
    navigation.navigate(routeNames.Keychain);
  }, []);

  const handleDelete = useCallback((name) => {
    dispatch(removeMasterKey(name));
  }, []);

  return (
    <MainLayout header="Master keys" scrollable>
      <View>
        <VirtualizedList
          data={list}
          renderItem={renderItem}
          getItem={(data, index) => data[index]}
          getItemCount={(data) => data.length}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {masterlessKeyChains.noOfKeychains > 0 && (
        <View style={styles.actions}>
          <Text style={[styles.padding, styles.title]}>
            Masterless keychains
          </Text>
          <MasterKey
            name="Tap to manage"
            number={masterlessKeyChains.noOfKeychains}
            onPress={() => handleSwitch(masterlessKeyChains.name)}
            isActive={masterlessKeyChains.isActive}
          />
        </View>
      )}
      <View style={[styles.padding, styles.actions]}>
        <Action
          onPress={handleCreate}
          label="Create"
          desc="Create a new master key"
        />
        <Action
          onPress={handleImport}
          label="Import master key"
          desc="Using a master key phrase"
        />
      </View>
    </MainLayout>
  );
};

export default React.memo(MasterKeyList);
