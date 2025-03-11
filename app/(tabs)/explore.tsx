import { ExploreScreen } from '@/screens';
import { View } from 'react-native';
const Explore = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
  height: '100%',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
        paddingTop: 48,
      }}
    >
      <ExploreScreen />
    </View>
  );
};

export default Explore;
