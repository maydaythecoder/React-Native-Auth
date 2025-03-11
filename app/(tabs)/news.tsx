
import { View } from 'react-native';
import { Blog as BlogScreen } from '@/screens';

const News = () => {
  return (
    <View style={{ 
      flex: 1,
      width: '100%',
    }}>
      <BlogScreen />
    </View>
  );
};

export default News;
