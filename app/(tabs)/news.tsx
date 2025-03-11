import { BLOG_POSTS } from '@/constants/Data/BlogData'; 
import { BlogScreen } from '@/screens';
import { View } from 'react-native';

const News = () => {
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
      <BlogScreen posts={BLOG_POSTS} />
    </View>
  );
};

export default News;
