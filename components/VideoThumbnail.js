import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

import VideoLength from './VideoLength';

export default class VideoThumbnail extends React.Component {

    render() { 
        return ( 
            <View style={styles.container}>
                <View style={styles.thumbnail}>
                    <ImageBackground
                        style={styles.thumbnail}
                        source = {{uri: this.props.thumbnailUrl}}
                        />
                <VideoLength 
                    style={styles.videoLengthText}
                    videoLength={this.props.videoLength} />
            </View>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row'
    },
    thumbnail: {
        flex: 1,
        width: null,
        height: 200,
    },
    videoLengthText: {
        position: "absolute",
        right: 20,
        top: -35,
        backgroundColor: "black",
        color: "white",
        borderRadius: 3,
        paddingHorizontal: 7,
        textAlign: "right",
        overflow: "hidden",
    }
});
