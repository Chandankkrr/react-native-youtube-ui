import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class VidoeInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.avatarContainer}>
       <Image style={styles.avatarImage} source={require('../assets/images/yt_icon_rgb.png')} />
      </View>

      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>
          Building YouTube app (dark mode)
        </Text>

        <Text style={styles.titleText}>
          in React Native
        </Text>

        <Text style={styles.descriptionText}>
          ReactNative 1.1K views . 1 week ago
        </Text>
      </View>
      <View>
        <TouchableOpacity style={{paddingHorizontal: 15}}>
          <Icon name='more-vert' size={25} color={'#3e3e3e'} />
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        marginTop: 5,
      },
    avatarContainer: {
      marginHorizontal: 15,
    },

    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    videoDescription:{
      fontWeight: '600',
        fontSize: 18,
        color: '#fff',
    },
    titleText: {
        fontWeight: '600',
        fontSize: 18,
        color: '#fff',
        flex: 1, 
        flexWrap: 'wrap'
      },
      descriptionText: {
        fontSize: 14,
        marginTop: 6,
        color: '#4d4d4d',
      },
});
