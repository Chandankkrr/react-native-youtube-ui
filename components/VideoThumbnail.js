import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

export default class VideoInfo extends React.Component {

    render() { 
        return ( 
            <View style={styles.container}>
                <View style={styles.thumbnail}>
                    <ImageBackground
                        style={styles.thumbnail}
                        source = {{ uri: 'https://images.unsplash.com/photo-1551973932-8131a944f98e'}} />
                <View >
                    <Text style={styles.videoLengthText}>4:58</Text>
                </View>
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
    videoLengthText:{
        position: "absolute",
        right: 0,
        top: -25,
        backgroundColor: "black",
        color: "white",
        //width: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 5,
        textAlign: "right",
    }
})
