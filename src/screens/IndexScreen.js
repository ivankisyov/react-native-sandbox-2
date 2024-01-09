import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const navigation = useNavigation();
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } =
    useContext(Context);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Feather name="plus" size={35} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("focus", () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Show", {
                  id: item.id,
                })
              }
            >
              <View style={styles.row}>
                <View>
                  <Text style={styles.title}>
                    {item.title} - {item.id}
                  </Text>
                  <Text>{item.content}</Text>
                </View>

                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
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
});

export default IndexScreen;
