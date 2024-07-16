import {DrawerNavigationOptions} from '@react-navigation/drawer';

export const drawerStyle: Partial<DrawerNavigationOptions> = {
  drawerInactiveBackgroundColor: '#ECE6E6',
  drawerActiveBackgroundColor: '#ddd6fe',
  drawerItemStyle: {
    color: 'white',
  } as any, // You might need to adjust this if you know the exact type
  drawerLabelStyle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#691C30',
  },
  headerTintColor: 'white',
  headerTitleStyle: {},

  headerStyle: {
    backgroundColor: '#9f1239',
  },
};
