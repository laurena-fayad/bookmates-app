import { StyleSheet, Text, View, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProfileReview from './ProfileReview';
import * as SecureStore from 'expo-secure-store';
import {useIsFocused} from '@react-navigation/native'

const MyReviewsSection = () => {

  const isFocused = useIsFocused();
  const [reviews, setReviews] = useState([])
  const [refreshing, setRefreshing] = useState(true);

    useEffect(async () =>{
      if(isFocused){
        loadReviews();
      }
    },[isFocused])
  
    const loadReviews = async () => {
      const token = await SecureStore.getItemAsync('token')
      fetch('http://18.191.232.230:3000/api/review/myreviews',{
          headers:{
            Authorization: "Bearer "+token
          }
        }).then(res=>res.json())
        .then(result=>{
          setReviews(result)
          setRefreshing(false);
        })
        .catch(err => console.log(err))
    }
  
    return (
      <SafeAreaView>
        {refreshing ? <ActivityIndicator /> : null}
        {reviews.length ? 
          <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadReviews}/>}>
          {reviews?.map((result) => {         
              return ( <ProfileReview key={result._id} review= {result} />)})
            }
          </ScrollView>
          :
          <View style={{backgroundColor:'white', height:600}}>
            <Text style={{marginVertical:20,color:'gray' , textAlign: 'center', fontFamily:'Roboto_300Light', fontSize:14}}>No Reviews</Text>
          </View>
        }

      </SafeAreaView>
    );
  };

export default MyReviewsSection