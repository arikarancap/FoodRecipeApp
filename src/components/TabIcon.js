import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesom5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'

const TabIcon = ({ focused, icon }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', height: 80, width: 50 }} >
            {focused ?
                icon == 'settings' ? <Feather name={icon} size={25} color={'green'} />
                    : <FontAwesom5 name={icon} size={25} color={'green'} />
                :
                icon == 'settings' ? <Feather name={icon} size={25} color={'#AADFAA'} />
                    : <FontAwesom5 name={icon} size={25} color={'#AADFAA'} />
            }
            {focused ?
                <View style={{ height: 5, width: '90%', backgroundColor: 'green', margin: 5 }} ></View>
                : ''}
        </View>
    )
}

export default TabIcon;

const styles = StyleSheet.create({})