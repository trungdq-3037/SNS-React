// src/NewsFeed.js

import React from 'react';
import { VStack, Container, useToast } from '@chakra-ui/react';

import { HeaderBar, Post } from '.';
import api from '../../api/auth';

function NewsFeed() {
  const toast = useToast();
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async () => {
    try {
      const res = await api.get('/post');
      setPosts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useState(() => {
    fetchPosts();
  }, []);

  const toggleLike = React.useCallback(async (postId, liked) => {
    try {
      console.log(postId, liked);

      if (liked) {
        // await api.delete('/like/' + postId);
        // const newPost = [...posts];
        // const index = newPost.findIndex(p => p.id === postId);
        // newPost[index].current_user_liked = false;
        // newPost[index].count_like -= 1;
        // setPosts(newPost);

        setPosts(prev => {
          console.log('start');
          const newPost = [...prev];
          const index = newPost.findIndex(p => p.id === postId);
          newPost[index].current_user_liked = false;
          console.log('newPost[index].count_like ', newPost[index].count_like);
          newPost[index].count_like = newPost[index].count_like - 1;
          console.log('newPost[index].count_like ', newPost[index].count_like);
          console.log('end');
          return newPost;
        });
      } else {
        // await api.post('/like/' + postId);
        // const newPost = [...posts];
        // const index = newPost.findIndex(p => p.id === postId);
        // newPost[index].current_user_liked = true;
        // newPost[index].count_like += 1;
        // setPosts(newPost);

        setPosts(prev => {
          console.log('start');
          const newPost = [...prev];
          const index = prev.findIndex(p => p.id === postId);
          newPost[index].current_user_liked = true;
          console.log('newPost[index].count_like ', newPost[index].count_like);
          newPost[index].count_like += 1;
          console.log('newPost[index].count_like ', newPost[index].count_like);
          console.log('end');
          return newPost;
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error',
        description: error?.response?.data?.message,
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
  }, [setPosts]);

  const deletePost = React.useCallback(async id => {
    try {
      await api.delete(`/post/${id}`);
      await setPosts(prev => {
        return prev.filter(post => post.id !== id);
      });
      toast({
        title: 'Success',
        description: 'Deleted post ',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error',
        description: error?.response?.data?.message,
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
  }, []);

  console.log('render call');
  return (
    <>
      <HeaderBar isHomePage={true} />
      <Container maxW="md" mt={10}>
        <VStack spacing={5} align="stretch" mt={10}>
          {posts.map((post, index) => (
            <Post
              key={index}
              {...post}
              deletePost={deletePost}
              toggleLike={toggleLike}
              
            />
          ))}
        </VStack>
      </Container>
    </>
  );
}

export default NewsFeed;
