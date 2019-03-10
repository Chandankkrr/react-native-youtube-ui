import React, { Component } from 'react'
import { View } from 'react-native'
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuItems = [
    "See fewer videos like this",
    "Block this chaneel", 
    "Save to Watch later", 
    "Save to playlist", 
    "Share", 
    "Report"
    ];

export default class VideoOptions extends Component {
       _menu = null;

       setMenuRef = ref => {
           this._menu = ref;
       };

       hideMenu = () => {
           this._menu.hide();
       };

       showMenu = () => {
           this._menu.show();
       };

  render() {
    return (
      <View>
        <Menu
          ref={this.setMenuRef}
          button={
            <Icon name='more-vert' size={25} color={'#3e3e3e'} onPress={this.showMenu} />
            }>
            {
                MenuItems.map((data, i) => {
                    return(
                        <MenuItem 
                            onPress={this.hideMenu} 
                            style={{backgroundColor: "#121212"}} 
                            textStyle={{color:"#fff"}} 
                            underlayColor={"#121212"} 
                            key={i}>{data}</MenuItem>
                    );
                })
            }
          </Menu>
      </View>
    )
  }
}
