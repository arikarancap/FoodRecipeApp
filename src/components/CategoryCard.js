import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Category } from '../const';

const CategoryCard = ({ ContainerStyle, CategoryItem, Color, OnPress, ViewAll }) => {

    if (ViewAll == true) {
        return (
            <TouchableOpacity
                style={
                    [ContainerStyle, {
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 10,
                        // backgroundColor: 'lightgrey',
                        backgroundColor: 'rgba(0, 0, 0,0.02)'
                    }]}
                onPress={OnPress}
            >
                <Image
                    source={CategoryItem.image}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                    }}
                    resizeMode='cover'
                />
                {/* ...Details... */}
                <View
                    style={{
                        width: '65%',
                        paddingHorizontal: 20,
                        // borderColor: 'black',borderWidth:1
                    }}
                >
                    {/* ...Name... */}
                    <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold' }} > {CategoryItem.name} </Text>
                    {/* ...Servings... */}
                    <Text style={{}} >
                        {CategoryItem.duration} | {CategoryItem.serving} Servings...

                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (CategoryItem.id == 1) {
        // return (
        // <View style={{ height: 50, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
        //     <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }} >Click View All to See More</Text>
        // </View>
        // )
    }

}

export default CategoryCard;

const styles = StyleSheet.create({})