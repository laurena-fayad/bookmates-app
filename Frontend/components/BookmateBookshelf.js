import React , {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import BookSearch from '../components/BookSearch';

const BookmateBookshelf = ({user}) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{ flexDirection: 'row', paddingVertical: 20, justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ color: '#5A7FCC', paddingLeft: 20, fontFamily: 'Baloo2_600SemiBold', fontSize: 16 }}>
            Currently Reading
          </Text>
          <TouchableOpacity>
            <Text style={{ color: '#5A7FCC', paddingRight: 20 }}>See more</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {/* <BookSearch thumbnail={require('./../assets/mebeforeyou.jpg')} />
          <BookSearch thumbnail={require('./../assets/mockingbird.jpg')} />
          <BookSearch thumbnail={require('./../assets/EE.jpg')} /> */}
        </View>

        <View
          style={{ flexDirection: 'row', paddingVertical: 20, justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ color: '#5A7FCC', paddingLeft: 20, fontFamily: 'Baloo2_600SemiBold', fontSize: 16 }}>
            To-Read
          </Text>
          <TouchableOpacity>
            <Text style={{ color: '#5A7FCC', paddingRight: 20 }}>See more</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {/* <BookSearch thumbnail={require('./../assets/Whomovedmycheese.jpg')} />
          <BookSearch thumbnail={require('./../assets/RichDadPoorDad.jpg')} />
          <BookSearch thumbnail={require('./../assets/awakenthegiant.jpg')} /> */}
        </View>

        <View
          style={{ flexDirection: 'row', paddingVertical: 20, justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ color: '#5A7FCC', paddingLeft: 20, fontFamily: 'Baloo2_600SemiBold', fontSize: 16 }}>
            Finished
          </Text>
          <TouchableOpacity>
            <Text style={{ color: '#5A7FCC', paddingRight: 20 }}>See more</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {/* <BookSearch thumbnail={require('./../assets/Zerotoone.jpg')} />
          <BookSearch thumbnail={require('./../assets/Bigquestions.jpg')} />
          <BookSearch thumbnail={require('./../assets/AtomicHabits.jpg')} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookmateBookshelf;