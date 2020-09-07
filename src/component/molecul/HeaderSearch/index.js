//import liraries
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {myStyle} from '../../atom/public-style';

// create a component
const HeaderSearch = ({title, onChangeText}) => {
  return (
    <View style={styles.toolBar}>
      <Text style={[styles.titleText, myStyle.fontFamilyMed]}>{title}</Text>
      <TextInput style={{height:24,color:'white',fontSize:12,borderColor:'white', borderWidth:1, flex:1, marginHorizontal:8, borderRadius:8}} onChangeText={onChangeText} ></TextInput>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  titleText: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 24,
  },
  toolBar: {
    height: 60,
    backgroundColor: '#29B673',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection:'row',
    alignItems:'center'
  },
});

//make this component available to the app
export default HeaderSearch;
