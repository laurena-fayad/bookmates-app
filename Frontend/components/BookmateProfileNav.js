import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookmateBookshelf from './BookmateBookshelf';
import ReviewsSection from './ReviewsSection';

const ProfileNav = ({user}) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIndicatorStyle: {
          backgroundColor: '#5A7FCC',
          height: 2.5,
        },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
      })}
    >
      <Tab.Screen name="Bookshelf" children={() => <BookmateBookshelf user={user}/>}  />
      <Tab.Screen name="Reviews" children={() => <ReviewsSection user={user}/>} />
    </Tab.Navigator>
  );
};


export default ProfileNav;