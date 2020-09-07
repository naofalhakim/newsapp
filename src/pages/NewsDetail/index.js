import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView, Image } from "react-native";
import { HeaderTitle, Gap, Loader } from "../../component";
import { myStyle } from "../../component/atom/public-style";
import { accountIcon } from "../../asset";

const NewsDetail = ({ navigation, route }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(route.params.item);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* <Loader loading={loading} /> */}
      <HeaderTitle
        title={data.judul_berita}
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            style={styles.imgProfile}
            source={
              data.foto === "" ? accountIcon : { uri: data.foto }
            }
          />
        </View>
        <Text style={[myStyle.text14GrayBold]}>{data.judul_berita}</Text>
        <Text style={[myStyle.fontFamilyReg, styles.caption]}>
          {data.isi_berita}
        </Text>
        <Text style={[myStyle.text10GrayMedium]}>
          {data.penulis + " / " + data.tanggal}
        </Text>
        <Gap height={40} />
        <Gap height={100} />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  idText: {
    alignSelf: "center",
  },
  container: {
    padding: 12,
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
  caption: {
    fontSize: 12,
    textAlign: "justify",
  },
  imgProfile: {
    borderRadius: 100,
    backgroundColor: "#009666",
    flex: 1,
    height: 70,
    marginBottom: 10,
  },
});

//make this component available to the app
export default NewsDetail;
