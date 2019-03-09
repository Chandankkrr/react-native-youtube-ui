import React from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {
  Ionicons
} from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import SubscriptionsScreen from '../screens/SubscriptionsScreen';
import InboxScreen from '../screens/InboxScreen';
import LibraryScreen from '../screens/LibraryScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-home'} size={20} style={{ color: tintColor}}
    />
  ),
};

const TrendingStack = createStackNavigator({
  Trending: TrendingScreen,
});

TrendingStack.navigationOptions = {
  tabBarLabel: 'Trending',
  tabBarIcon: ({ tintColor, focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-flame'} size={20} style={{ color: tintColor}}
    />
  ),
};

const SubscriptionsStack = createStackNavigator({
  Subscriptions: SubscriptionsScreen,
});

SubscriptionsStack.navigationOptions = {
  tabBarLabel: 'Subscriptions',
  tabBarIcon: ({ tintColor, focused }) => (
    <View style={{ width: 24, height: 24, margin: 5 }}>
            <TabBarIcon
              focused={focused}
              name={'ios-play-circle'} size={20} style={{ color: tintColor}}
            />
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: 2,
              top: 1,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 8,
              height: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              
            </Text>
          </View>
        </View>
  ),
};

const InboxStack = createStackNavigator({
  Inbox: InboxScreen,
});

InboxStack.navigationOptions = {
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ tintColor, focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-mail'} size={20} style={{ color: tintColor}}
    />
  ),
};

const LibraryStack = createStackNavigator({
  Library: LibraryScreen,
});

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ tintColor, focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-folder'} size={20} style={{ color: tintColor}}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  TrendingStack,
  SubscriptionsStack,
  InboxStack,
  LibraryStack
}, {
      tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#121212',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        paddingVertical: 5
      },
    },
});
