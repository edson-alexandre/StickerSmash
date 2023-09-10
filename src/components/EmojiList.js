import { useState } from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

export default EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([
    require("../assets/images/emoji1.jpeg"),
    require("../assets/images/emoji2.jpeg"),
    require("../assets/images/emoji3.jpeg"),
    require("../assets/images/emoji4.jpeg"),
    require("../assets/images/emoji5.jpeg"),
    require("../assets/images/emoji6.jpeg"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image key={index} source={item} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
