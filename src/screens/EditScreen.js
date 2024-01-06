import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

const EditScreen = ({ route }) => {
  const { addBlogPost } = useContext(Context);
  const navigation = useNavigation();
  const { state } = useContext(Context);
  const { title: blogPostTitle, content: blogPostContent } = state.find(
    (blogPost) => blogPost.id === route.params.id
  );
  const [title, setTitle] = React.useState(blogPostTitle);
  const [content, setContent] = React.useState(blogPostContent);

  return (
    <View>
      <Text>Edit Post: {route.params.id}</Text>
      <Text>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Edit Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => navigation.navigate("Home"))
        }
      />
    </View>
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
