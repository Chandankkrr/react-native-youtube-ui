import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { WebBrowser } from 'expo';
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
             console.log(_data, i)
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

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed......
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
