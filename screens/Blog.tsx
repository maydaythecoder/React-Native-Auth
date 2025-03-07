import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BlogPost } from '@/types';

export default function BlogScreen({ posts }: { posts: BlogPost[] }) {
  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.header}>Real Estate Insights</ThemedText>
      {posts.map(post => (
        <ThemedView key={post.id} style={styles.postCard}>
          <Image source={{ uri: post.image }} style={styles.postImage} />
          <View style={styles.postContent}>
            <ThemedText style={styles.postTitle}>{post.title}</ThemedText>
            <ThemedText style={styles.postDate}>{post.date}</ThemedText>
            <ThemedText style={styles.postSummary}>{post.summary}</ThemedText>
            <ThemedText style={styles.postAuthor}>By {post.author}</ThemedText>
          </View>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  postCard: {
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  postContent: {
    padding: 16,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  postSummary: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  postAuthor: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});