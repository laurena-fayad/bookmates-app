import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, FontAwesome} from '@expo/vector-icons';
import axios from 'axios';

const BookmateReview = ({ review }) => {
  const [like_status, setLikeStatus] = useState(false);
  const [dislike_status, setDislikeStatus] = useState(false);

  const likeReview = () => {
    setLikeStatus(!like_status);
  };

  const dislikeReview = () => {
    setDislikeStatus(!dislike_status);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          backgroundColor: 'white',
          marginBottom: 10,
          flex: 1,
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        <Image style={styles.profile_pic} source={{uri: `${review.user_id.profile_image_URL}`}} />
        <View style={{ flex: 1 }}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={styles.name}>{review.user_id.first_name} {review.user_id.last_name}</Text>
          
          </View>
          <Text style={styles.book_title}>
            on {review.book_id.title} by {review.book_id.author_id.name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.book_img} source={{uri: `${review.book_id.thumbnail}`}} />
            
            <Text style={styles.review_text}>{review.text}</Text>
          
          </View>

          {/* Interactions */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 }}>
            <TouchableOpacity onPress={() => likeReview()}>
              {like_status ? (
                <Text style={{ color: '#5A7FCC' }}>
                  {review.likes.length} <AntDesign name="like1" size={18} color="#5A7FCC" />
                </Text>
              ) : (
                <Text style={{ color: '#5A7FCC' }}>
                  {review.likes.length} <AntDesign name="like2" size={18} color="#5A7FCC" />
                </Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dislikeReview()}>
              {dislike_status ? (
                <Text style={{ color: '#5A7FCC' }}>
                  {review.dislikes.length} <AntDesign name="dislike1" size={18} color="#5A7FCC" />
                </Text>
              ) : (
                <Text style={{ color: '#5A7FCC' }}>
                  {review.dislikes.length} <AntDesign name="dislike2" size={18} color="#5A7FCC" />
                </Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{ color: '#5A7FCC' }}>
                {review.comments.length} <FontAwesome name="commenting-o" size={18} color="#5A7FCC" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
    </SafeAreaView>
  );
};

export default BookmateReview;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    alignItems:'center',
    width: 200,
    borderRadius:10,
    marginVertical: 75,
    marginHorizontal: 18,
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  profile_pic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 10,
  },
  name: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  book_title: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: 'Roboto_300Light_Italic',
    fontSize: 14,
  },
  book_img: {
    height: 85,
    width: 60,
    marginHorizontal: 10,
    borderRadius: 6,
    marginTop: 4,
  },
  review_text: {
    textAlign: 'justify',
    fontFamily: 'Roboto_300Light',
    flex: 1,
    flexWrap: 'wrap',
    flexGrow: 1,
    lineHeight: 18,
  },
  modalContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  confirmbutton:{
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A7FCC',
    borderRadius: 20,
  },
});