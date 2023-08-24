import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CustomButton = ({ Width, Height, Colors, ButtonText, OnPress, ButtonContainerStyle }) => {
    if (Colors.length > 0) {
        return (
            <TouchableOpacity
                onPress={OnPress}
            >
                <LinearGradient
                    colors={Colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ ...ButtonContainerStyle }}
                >
                    <Text
                        style={{ color: 'white', textAlign: 'center', fontSize: 18 }}
                    >{ButtonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity
                onPress={OnPress}
                style={ButtonContainerStyle}
            >
                <Text
                    style={{ color: 'white', textAlign: 'center', fontSize: 18 }}
                >{ButtonText}</Text>
            </TouchableOpacity>
        )
    }

    // <View style={{
    //     alignItems: 'center',
    //     justifyContent: 'center'

    // }} >
    //     <TouchableOpacity
    //         style={{
    //             width: Width ? Width : '80%',
    //             height: Height ? Height : 50,
    //             backgroundColor: 'green',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             borderRadius: 20
    //         }}
    //         onPress={() => navigation.navigate("")}
    //     >
    //         <Text  >{ButtonText}</Text>
    //     </TouchableOpacity>
    // </View>

}

export default CustomButton

const styles = StyleSheet.create({

})