import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoThumbnail from '../components/VideoThumbnail';
import VideoInfo from '../components/VideoInfo';
import VideosData from '../data/VideosInfo';

export default class HomeScreen extends React.Component {
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
      <StatusBar barStyle="light-content" />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          {
           VideosData.map((_data, i) => {
                 return ( 
                     <View key = {i} style={{flex:1}}>
                         <VideoThumbnail 
                          thumbnailUrl = {_data.videoInfo.videoThumbnailUrl}
                          videoLength={_data.videoInfo.videoLength}
                          />
                          <VideoInfo
                            videoTitle={_data.videoInfo.title}
                            videoInfo={_data.videoInfo}
                            channelName={_data.channelInfo.channelName}
                            channelAvatarImage={_data.channelInfo.channelAvatarImage} />
                     </View>
                 );
           })
          }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
