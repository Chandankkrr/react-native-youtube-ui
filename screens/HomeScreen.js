import React from 'react';
import { ScrollView, StyleSheet, View, StatusBar } from 'react-native';
import VideoThumbnail from '../components/VideoThumbnail';
import VideoInfo from '../components/VideoInfo';
import VideosData from '../data/VideosInfo';

export default class HomeScreen extends React.Component {
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
