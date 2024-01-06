import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", {
              id: route.params.id,
            })
          }
        >
          <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
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

export default ShowScreen;
