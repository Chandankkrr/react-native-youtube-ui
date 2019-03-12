import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import SubscriptionsScreen from '../screens/SubscriptionsScreen';
import InboxScreen from '../screens/InboxScreen';
import LibraryScreen from '../screens/LibraryScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
  defaultNavigationOptions: {
    header: null
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'} size={20} style={{ color: tintColor}}
    />
  ),
};

const TrendingStack = createStackNavigator({
  Trending: TrendingScreen,
}, {
  defaultNavigationOptions: {
    header: null
  }
});

TrendingStack.navigationOptions = {
  tabBarLabel: 'Trending',
  tabBarIcon: ({ tintColor, focused }) => (
    <TabBarIcon
      focused={focused}
      name={'whatshot'} size={20} style={{ color: tintColor}}
    />
  ),
};

const SubscriptionsStack = createStackNavigator({
  Subscriptions: SubscriptionsScreen,
}, {
  defaultNavigationOptions: {
    header: null
  }
});

SubscriptionsStack.navigationOptions = {
  tabBarLabel: 'Subscriptions',
  tabBarIcon: ({ tintColor, focused }) => (
    <View style={{ width: 24, height: 24, margin: 5 }}>
            <TabBarIcon
              focused={focused}
              name={'subscriptions'} size={20} style={{ color: tintColor}}
            />
         {focused ? null: <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: 0,
              top: 0,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 8,
              height: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              
            </Text>
         </View> }
        </View>
  ),
};

const InboxStack = createStackNavigator({
  Inbox: InboxScreen,
},{
  defaultNavigationOptions:{
    header: null
  }
});

InboxStack.navigationOptions = {
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ tintColor, focused }) => (
    <TabBarIcon
      focused={focused}
      name={'mail'} size={20} style={{ color: tintColor}}
    />
  ),
};

const LibraryStack = createStackNavigator({
  Library: LibraryScreen,
}, {
  defaultNavigationOptions: {
    header: null
  }
});

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ tintColor, focused }) => (
    <TabBarIcon
      focused={focused}
      name={'folder'} size={20} style={{ color: tintColor}}
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
