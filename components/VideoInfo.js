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

export default class VideoInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.avatarContainer}>
       <Image style={styles.avatarImage} source={{uri: this.props.channelAvatarImage}} />
      </View>

      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>
          {this.props.videoTitle}
        </Text>
        <Text style={styles.descriptionText}>
          {this.props.channelName} {this.props.videoInfo.description.views} {this.props.videoInfo.description.uploadDate}
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
        margin: 0,
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
