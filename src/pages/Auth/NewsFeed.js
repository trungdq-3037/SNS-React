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

  // const toggleLike = async (postId, liked) => {
  //   try {
  //     // console.log(posts);
  //     // console.log(setPosts);
  //     // return console.log(postId, liked);
  //     // debugger
  //     // const liked = await
  //     if (liked) {
  //       const res = await api.delete(`/like/${postId}`, {});

  //       setPosts(prev => {
  //         const newPost = [...prev];
  //         const index = prev.findIndex(p => p.id === postId);
  //         newPost[index].current_user_liked = !liked;
  //         return newPost;
  //       });
  //     } else {
  //       const res = await api.create(`/like/${postId}`);
  //       setPosts(prev => {
  //         const newPost = [...prev];
  //         const index = prev.findIndex(p => p.id === postId);
  //         newPost[index].current_user_liked = !liked;
  //         return newPost;
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast({
  //       title: 'Error',
  //       description: error?.response?.data?.message,
  //       status: 'error',
  //       duration: 1000,
  //       isClosable: true,
  //     });
  //   }
  // };

  const deletePost = async id => {
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
  };

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
              // toggleLike={toggleLike}
              setPosts={setPosts}
            />
          ))}
        </VStack>
      </Container>
       
    </>
  );
}

export default NewsFeed;
