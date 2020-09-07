//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {myStyle} from '../../atom/public-style';
import {backWhiteIcon} from '../../../asset';

// create a component
const HeaderTitle = ({title = '', onBack}) => {
  return (
    <View style={styles.toolbar}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.iconLayout} onPress={onBack}>
          <Image style={styles.icon} source={backWhiteIcon}></Image>
        </TouchableOpacity>
        <Text style={[styles.title, myStyle.fontFamilyMed]}>{title}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  toolbar: {
    height: 60,
    backgroundColor: '#29B673',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  toolbarWhite: {
    height: 60,
    backgroundColor: '#FFF',
    paddingVertical: 18,
    paddingHorizontal: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  toolbar2: {
    backgroundColor: '#29B673',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLayout: {
    width: 17,
    height: 11,
    marginRight: 18,
  },
  icon: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
  },
});

//make this component available to the app
export default HeaderTitle;
