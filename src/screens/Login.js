import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { ROUTES, IMAGES } from '../const';
import CustomButton from '../components/CustomButton';
const Login = ({ navigation }) => {
  const returnRender = () => {
    return (
      <View style={{ height: '65%', backgroundColor: 'black' }} >
        <StatusBar backgroundColor={'black'} barStyle={'light-content'} animated={true} />
        <ImageBackground
          source={IMAGES.fruidSalad}
          style={{ flex: 1, justifyContent: 'flex-end' }}
          resizeMode='cover'
        >
          <View
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: 12,
              // borderColor: 'red',
              // borderWidth:1

            }}
          >
            <Text style={{ width: '80%', color: 'white', fontSize: 35, }} >
              Cooking a Delicious Food Easily
            </Text>


          </View>
        </ImageBackground>
      </View>
    )
  }
  const RenderDetail = () => {
    return (
      <View style={{
        flex: 1,
        paddingHorizontal: 12
      }} >
        {/* Descriptions */}
        <Text
          style={{
            marginTop: 10,
            width: '70%',
            color: 'rgba(255, 255, 255,0.6)',
            fontSize: 16,
          }}
        >Discover more than 1200 food recipes in your hands and cooking it easily... </Text>
        {/* Buttons */}
        <CustomButton
          OnPress={() => navigation.navigate(ROUTES.HOME)}
          Colors={['#89D188', '#AADFAA']}
          ButtonText={'Login'}
          ButtonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
            marginTop: 20,
            marginHorizontal: 10

          }}
        />
        <CustomButton
          OnPress={() => navigation.navigate(ROUTES.REGISTER)}
          Colors={[]}
          ButtonText={'Signup'}
          ButtonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
            borderColor: '#AADFAA',
            borderWidth: 1,
            marginTop: 15,
            marginHorizontal: 10

          }}
        />

      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }} >
      {/* ...Header... */}
      {returnRender()}
      {/* ...Detail... */}
      <RenderDetail />
    </View >
  )
}

export default Login

const styles = StyleSheet.create({
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
})