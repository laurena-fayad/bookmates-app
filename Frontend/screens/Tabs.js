import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import Search from './Search';
import MyProfile from './MyProfile';
import Notifications from './Notifications';
import Feed from './Feed';
import BookmatesMap from './BookmatesMap';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      activeColor="#5A7FCC"
      barStyle={{
        backgroundColor: '#FFFFFF',
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex:999,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}
    >
      <Tab.Screen
        name="Map"
        component={BookmatesMap}
        options={{
          tabBarLabel: 'bookmates',
          tabBarIcon: ({ color }) => <Feather name="map" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarBadge: '1',
          tabBarBadgeStyle: {
            minWidth: 14,
            minHeight: 14,
            maxWidth: 10,
            maxHeight: 14,
            borderRadius: 7,
          },          
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
