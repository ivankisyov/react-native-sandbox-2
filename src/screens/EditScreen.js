import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route }) => {
  const { state, editBlogPost } = useContext(Context);
  const navigation = useNavigation();
  const { title: blogPostTitle, content: blogPostContent } = state.find(
    (blogPost) => blogPost.id === route.params.id
  );

  return (
    <BlogPostForm
      initialValues={{ title: blogPostTitle, content: blogPostContent }}
      onSubmit={(title, content) => {
        editBlogPost(route.params.id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});

export default EditScreen;
