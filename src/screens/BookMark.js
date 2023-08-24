import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, u } from 'react'

const BookMark = () => {

  const API_KEY = '7450577f4b1de0d6cf8c10ba577fef95';
  const APP_ID = 'cd9c5bba'
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=chicken`);
      console.log(response.counts);
      // console.log('This is from Response',response._bodyBlob._data.__collector[0]);

    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <View>
      <Text>BookMark</Text>
      <View style={{ backgroundColor: 'powderblue', width: '100%', height: 200 }} >

      </View>
    </View>
  )
}

export default BookMark

const styles = StyleSheet.create({})