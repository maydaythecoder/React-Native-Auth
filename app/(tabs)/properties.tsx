import React from 'react';
import { PropertiesScreen } from '@/screens';
import { View } from 'react-native';

const Properties = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 48
      }}>
    <PropertiesScreen />
    </View>
  );
};

export default Properties;
