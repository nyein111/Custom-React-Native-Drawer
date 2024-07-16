import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

const CustomDrawerNavigation: React.FC<DrawerContentComponentProps> = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9f1239',
            alignSelf: 'center',
            marginVertical: 15,
          }}>
          Menu
        </Text>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.textlabel}>Logout</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

export default CustomDrawerNavigation;

const styles = StyleSheet.create({
  logoutBtn: {
    flexDirection: 'row',
    width: 260,
    marginTop: 60,
    height: 45,
    backgroundColor: '#9f1239',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 6,
  },
  textlabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFF',
  },
});
