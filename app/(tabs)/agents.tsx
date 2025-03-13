import { AgentsScreen } from '@/screens';
import { View } from 'react-native';

export default function Agents() {
  return (
    <View style={{ 
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      paddingTop: 48
    }}>
      <AgentsScreen />
    </View>
  );
}
