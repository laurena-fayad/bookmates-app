import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import {useIsFocused} from '@react-navigation/native'

const BookmateProfileBody = ( {user} ) => {
  const isFocused = useIsFocused();
  const [bookmate, setBookmate] = useState(user)
  const [isFollowed, setIsFollowed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if(isFocused){
    getUserProfile()
    }
  }, [isFocused])
  
  const getUserProfile = async () =>{
    const token = await SecureStore.getItemAsync('token');
    try {
      const { data } = await axios({
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        url: 'http://18.191.232.230:3000/api/user/userprofile/'+ bookmate?.user?._id,
      }).then((res) => {
        setBookmate(res.data.user)
        setIsFollowed(res.data.isFollowed)
      });
    } catch (err) {
      setErrorMessage('Error! Please try again later.');
    }
  }

  const follow = async () => {

    setIsFollowed(true);
    const token = await SecureStore.getItemAsync('token');
    try {
      const { data } = await axios({
        method: 'put',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        url: 'http://18.191.232.230:3000/api/user/follow',
        data: {
          user_id: bookmate._id,
        },
      }).then((res) => {
        setIsFollowed(true); 
        getUserProfile()
      });
    } catch (err) {
      setErrorMessage('Error! Please try again later.');
    }
  };

  const unfollow = async () => {
    setIsFollowed(false);
    const token = await SecureStore.getItemAsync('token');
    try {
      const { data } = await axios({
        method: 'put',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        url: 'http://18.191.232.230:3000/api/user/unfollow',
        data: {
          user_id: bookmate._id,
        },
      }).then((res) => {
        setIsFollowed(false);
        getUserProfile()
      });
    } catch (err) {
      setErrorMessage('Error! Please try again later.');
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingLeft: 10,
        }}
      >
        <View>
          <Image
            source={{uri: `${bookmate?.profile_image_URL}`}}
            style={{
              resizeMode: 'cover',
              width: 70,
              height: 70,
              borderRadius: 100,
            }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{bookmate?.followers?.length}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, paddingRight: 15 }}>{bookmate?.following?.length}</Text>
          <Text style={{ paddingRight: 15 }}>Following</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}
      >
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          {bookmate?.first_name} {bookmate?.last_name} 
        </Text>

        {isFollowed ? (
        <TouchableOpacity
          onPress={() => unfollow()}
          style={{ width: 100, height: 30, justifyContent: 'center', backgroundColor: '#5A7FCC', borderRadius: 20 }}
        >  
          <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>Unfollow</Text>
        </TouchableOpacity>
        ) : (
          <TouchableOpacity
          onPress={() => follow()}
          style={{ width: 100, height: 30, justifyContent: 'center', backgroundColor: '#5A7FCC', borderRadius: 20 }}
          >
            <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>Follow</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={{ paddingVertical: 15, paddingLeft: 10 }}>{bookmate?.profile_bio}</Text>
    </SafeAreaView>
  );
};

export default BookmateProfileBody;
