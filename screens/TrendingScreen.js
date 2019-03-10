import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#121212",
      borderBottomWidth: 0
    },
    headerLeft: <Image 
    source = {require('../assets/images/yt_logo_rgb_dark.png')}
    style = {{ height: 22, width: 98, marginLeft: 10, }}
    />,
     headerRight: (
      <View style={{ flexDirection: 'row', marginRight: 10 }}>
        <TouchableOpacity style={{paddingHorizontal: 15}}>
          <Icon name='cast' size={25} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 15}}>
          <Icon name='videocam' size={25} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 15}}>
          <Icon name='search' size={25} color={'#fff'} />
        </TouchableOpacity>
         <TouchableOpacity style={{paddingHorizontal: 15}}>
          <Icon name='account-circle' size={25} color={'#fff'}/>
        </TouchableOpacity>
      </View>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:"center", color:"#fff"}}>Trending</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 15,
    justifyContent: "center",
  },
});
