//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { accountIcon } from "../../../asset";
import { myStyle } from "../../atom/public-style";

const NewsItem = ({ data, action }) => {
  return (
    <TouchableOpacity style={styles.containerItemOuter} onPress={action}>
      <View style={styles.containerItem}>
        <Image
          style={styles.imgProfile}
          source={data.foto === "" ? accountIcon : { uri: data.foto }}
        />
        <View>
          <Text style={[styles.caption, myStyle.text12GrayBold]}>
            {data.judul_berita}
          </Text>
          <Text numberOfLines={3} style={styles.subCaption}>
            {data.isi_berita}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  caption: {
    color: "rgba(51, 51, 51, 0.7)",
    fontSize: 15,
    lineHeight: 22,
  },
  subCaption: {
    color: "rgba(51, 51, 51, 0.7)",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: 18,
    alignSelf: "flex-start",
  },
  outerContainer: {
    backgroundColor: "#eff2f7",
    height: "98%",
  },
  toolBar: {
    height: 60,
    backgroundColor: "#29B673",
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#eff2f7",
    height: "100%",
  },
  containerItem: {
    borderRadius: 4,
    backgroundColor: "#FFF",
    padding: 10,
    height: 170,
    position: "absolute",
    top: 0,
    bottom: 4,
    right: 0,
    left: 0,
    // alignItems: "center",
    // flexDirection: 'row',
  },
  containerItemOuter: {
    borderRadius: 4,
    backgroundColor: "#009666",
    height: 176,
    position: "relative",
    marginVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  imgProfile: {
    borderRadius: 100,
    backgroundColor: "#009666",
    flex:1,
    height: 70,
    marginBottom: 10,
  },
});

//make this component available to the app
export default NewsItem;
