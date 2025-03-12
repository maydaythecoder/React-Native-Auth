import { View, Text } from 'react-native';

function AppScreen () {
  return (
    <View style={{ 
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>App Screen</Text>
    </View>
  );
};

export default AppScreen;