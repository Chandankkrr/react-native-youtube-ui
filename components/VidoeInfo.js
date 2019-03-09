import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class VidoeInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:1, padding: 5, margin: 10}}>
        <View style={{flex: 1}}>
          <Image style={styles.avatarImage} source={require('../assets/images/yt_icon_rgb.png')} />
        </View>
          <View style={{flex: 1}}>
          <View style={styles.videoDescription}>
              <Text style={{color: "#fff"}}>
              Still KD: Through the noise...
            </Text>
          </View>
          <View>
            <Text style={{color: "#fff"}}>
              Kevin Durant 1.1 M Views 1 Month ago
            </Text>
          </View>
          </View>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    marginTop: 10
    //justifyContent: 'flex-end',
  },
    avatarImage: {
        //position: "absolute",
        //left: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
       // marginTop: 10,
    },
    videoDescription:{
      color: "#fff",
      position: "absolute",
      left: 0,
    }
});
