//import liraries
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Header, SubHeader, NewsItem, CatalogSection, HeaderSearch } from "../../component";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../../../redux/action";
import { userService } from "../../services";

// create a component
const NewsList = ({ navigation }) => {
  const [refresh, setRefresh] = useState(false);
  const NewsListReducer = useSelector((state) => state.NewsListReducer);
  const dispacth = useDispatch();

  const onRefresh = () => {
    return (dispacth) => {
      return userService
        .get("show_berita.php")
        .then((response) => {
          dispacth(getAllData(response.data.berita));
          setRefresh(false);
        })
        .catch((err) => {
          console.log(err);
          setRefresh(false);
        });
    };
  };

  const onSeacrh = (key) => {
    return (dispacth) => {
      return userService
        .get("search_berita.php?cari="+key)
        .then((response) => {
          console.log(response.data.berita)
          dispacth(getAllData(response.data.berita));
          setRefresh(false);
        })
        .catch((err) => {
          console.log(err);
          setRefresh(false);
        });
    };
  };

  useEffect(() => {
    dispacth(onRefresh());
  }, []);

  return (
    <View style={styles.container}>
      <HeaderSearch title="News App" onChangeText={val=> val ? dispacth(onSeacrh(val)): dispacth(onRefresh())} />
      <CatalogSection />
      <FlatList
        data={NewsListReducer.list}
        bounces={true}
        refreshing={refresh}
        ListEmptyComponent={<Text>Berita Belum Termuat</Text>}
        onRefresh={() => dispacth(onRefresh())}
        renderItem={({ item }) => {
          return (
            <NewsItem
              data={item}
              action={() => navigation.navigate("News Detail", { item })}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff2f7",
  },
});

//make this component available to the app
export default NewsList;
