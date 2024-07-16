import {StyleSheet, Text, View, Image} from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screen/Home';
import About from '../screen/About';
import CustomDrawerNavigation from '../components/CustomDrawerNavigation';
import {drawerStyle} from './styles';
import {NavigationContainer} from '@react-navigation/native';

type DrawerParamList = {
  Home: undefined;
  About: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerNavigation {...props} />}
        screenOptions={drawerStyle}
        initialRouteName="Home">
        <Drawer.Screen
          options={{
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({focused, size, color}) => (
              <Image
                source={require('../assents/home.jpg')}
                style={{
                  width: focused ? '20%' : '10%',
                  height: '70%',
                  zIndex: 2,
                }}
                resizeMode={'stretch'}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={{
            title: 'About',
            drawerLabel: 'About',
            //  headerRight: () => (
            //     // <Ionicons
            //     //     style={{ marginRight: 20, borderRadius: 10, backgroundColor: '#2459A9' }}
            //     //     name={'ios-logo-facebook'}
            //     //     size={32}
            //     // // color={'#2459A9'}
            //     // />
            //     <View
            //       style={{
            //         width: 80,
            //         height: 30,
            //         alignItems: 'center',
            //         justifyContent: 'center',
            //         marginRight: 260,
            //       }}>
            //       <Image
            //         source={logoHeader}
            //         style={{width: 80, height: 30, borderRadius: 10}}
            //         resizeMode={'contain'}
            //       />
            //     </View>
            //   ),
            //   headerLeft: () => (
            //     <Image
            //       source={tabImg}
            //       style={{
            //         flex: 1,
            //         width: '100%',
            //         height: '100%',
            //         zIndex: 1,
            //         backgroundColor: '#2459A9',
            //       }}
            //       resizeMode={'stretch'}
            //     />
            //   ),
            drawerIcon: ({focused, size, color}) => (
              <Image
                source={require('../assents/About.png')}
                style={{
                  width: focused ? '20%' : '10%',
                  height: '70%',
                  zIndex: 2,
                }}
                resizeMode={'stretch'}
              />
            ),
          }}
          name="About"
          component={About}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
