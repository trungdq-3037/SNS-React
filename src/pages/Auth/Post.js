// src/NewsFeed.js

import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Divider,
  Input,
  Button,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Comment } from '.';
import { FaHeart } from 'react-icons/fa';
import api from '../../api/auth';

function Post({
  user_name,
  content,
  comments,
  id,
  deletePost,
  count_comment,
  count_like,
  current_user_liked,
  toggleLike,
  setPosts,
}) {
  const toast = useToast();

  const [listComment, setListComment] = React.useState([...comments]);
  const [commentInput, setCommentInput] = React.useState('');

  const handleInput = e => {
    setCommentInput(e.target.value);
  };

  const createComment = async () => {
    try {
      const newComment = await api.post('/comment', {
        comment_text: commentInput,
        post_id: id,
      });
      setListComment(prev => {
        return [...prev, newComment.data.data];
      });
      setCommentInput('');
      toast({
        title: 'Successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const deleteComment = async comment_id => {
    try {
      await api.delete(`/comment/${comment_id}`);

      await setListComment(prev => {
        return prev.filter(cm => cm.id !== comment_id);
      });

      toast({
        title: 'Successfully',
        description: 'Deleted comment',
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.response?.data?.message,
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
  };

  // const toggleLike = async (postId, liked) => {
  //   try {
    
  //     console.log(postId, liked);
   
  //     if (liked) {
  //       await api.delete("/like/"+postId);

  //       setPosts(prev => {
  //         const newPost = [...prev];
  //         const index = prev.findIndex(p => p.id === postId);
  //         newPost[index].current_user_liked = false;
  //         newPost[index].count_like = newPost[index].count_like - 1;
  //         console.log(newPost);
  //         return newPost;
  //       });
  //     } else {
  //       await api.post('/like/' + postId);
  //       setPosts(prev => {
  //         const newPost = [...prev];
  //         const index = prev.findIndex(p => p.id === postId);
  //         newPost[index].current_user_liked = true;
  //         newPost[index].count_like = newPost[index].count_like +1;
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
  console.log("post render")
  return (
    <Box borderWidth="1px" p={4} mb={4} borderRadius="md">
      <HStack direction={['column', 'row']}>
        <Box flex="1">
          <Text fontWeight="bold">{user_name}</Text>
          <Text>{content}</Text>

          <Text fontSize={13} fontStyle="italic">
            Like: {count_like}, comments: {listComment.length}
          </Text>
        </Box>
        <Box>
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={() => {
              deletePost(id);
            }}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </HStack>

      <Divider my={2} />

      <VStack spacing={2}>
        {listComment?.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </VStack>

      <HStack mt={5}>
        <Button
          onClick={() => {
            // console.log("call toggle")
            toggleLike(id, current_user_liked);
          }}
          variant={current_user_liked ? 'outline' : ''}
          colorScheme="teal"
        >
          <Icon as={FaHeart} />
        </Button>
        <Input
          placeholder="Add a comment"
          value={commentInput}
          onChange={handleInput}
        />
        <Button onClick={createComment} colorScheme="teal">
          Comment
        </Button>
      </HStack>
    </Box>
  );
}

export default React.memo(Post);
