import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class SubscriptionsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:"center", color:"#fff"}}>Subscriptions</Text>
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