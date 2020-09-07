import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { myStyle } from "../../atom/public-style";

const ItemRoundedForm = ({ text }) => (
  <TouchableOpacity style={styles.roundedForm}>
    <Text style={[styles.subTitle, myStyle.fontFamilyBold]}>{text}</Text>
  </TouchableOpacity>
);

const katalog = [
  {id:4, text:"Trending"},
  {id:0, text:"News"},
  {id:1, text:"Sport"},
  {id:2, text:"Food"},
  {id:3, text:"Entertainment"},
  {id:5, text:"Health Care"},
  {id:6, text:"Technology"},
]

const CatalogSection = () => {
  return (
    <View style={styles.header}>
      <FlatList
        data={katalog}
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text>Katalog Belum Termuat</Text>}
        renderItem={({ item }) => {
          return (
            <ItemRoundedForm key={item.id+""} text={item.text}/>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: { marginRight: 10, width: 20, height: 20 },
  header: {
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    elevation: 1,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 2,
  },
  roundedForm: {
    padding: 4,
    borderRadius: 10,
    borderColor: "#009666",
    borderWidth: 2,
    marginHorizontal:6,
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 22,
    color: "#333333",
  },
});

export default CatalogSection;
