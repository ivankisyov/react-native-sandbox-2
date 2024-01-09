import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);
  const navigation = useNavigation();

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          console.log(navigation);
          navigation.pop();
        });
      }}
    />
  );
};

export default CreateScreen;
