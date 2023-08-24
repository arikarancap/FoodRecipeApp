import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import React from 'react'
import { BlurView } from "@react-native-community/blur";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const RecipeCardDetails = ({ recipeItem }) => {
    return (
        <View style={{ flex: 1 }} >
            {/* Name & BookMark */}
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
            }} >
                <Text
                    style={{
                        width: '70%',
                        color: 'white',
                        fontSize: 18,
                    }}
                >
                    {recipeItem.name}
                </Text>
                {
                    recipeItem.Bookmark
                        ? <MaterialIcons name={'bookmark'} size={30} color={'#89D188'} />
                        : <MaterialIcons name={'bookmark-border'} size={30} color={'white'} />
                }
            </View>
            {/* Duration & Serving */}
            <Text style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 14,
            }} >
                {recipeItem.duration} | {recipeItem.serving} Servings
            </Text>
        </View>
    )
}

const RecipeCardInfo = ({ recipes }) => {
    if (Platform.OS === 'ios') {
        return (
            <BlurView
                blurType='dark'
                style={styles.recipeCardContainer} >

            </BlurView>
        )
    }
    else {
        return (
            <View style={{
                ...styles.recipeCardContainer,
                backgroundColor: 'rgba(0,0,0,0.7)',

            }} >
                <RecipeCardDetails
                    recipeItem={recipes}
                />
            </View>
        )
    }
}



const TrendingCard = ({ ContainerStyle, recipeItem, OnPress }) => {
    return (
        <TouchableOpacity
            onPress={OnPress}
            style={{
                height: 350,
                width: 250,
                marginTop: 10,
                marginRight: 20,
                borderRadius: 10,
                ...ContainerStyle,
                // backgroundColor: 'black'
            }}
        >
            {/* Background Image */}
            <Image
                source={recipeItem.image}
                resizeMode='cover'
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: 20,
                }}
            />
            {/* Category */}
            <View style={{
                position: 'absolute',
                top: 20,
                left: 15,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius: 10,

            }} >
                <Text
                    style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>
                    {recipeItem.Category}
                </Text>
            </View>

            {/* CardInfo */}

            <RecipeCardInfo
                recipes={recipeItem} />
        </TouchableOpacity>
    )
}

export default TrendingCard;

const styles = StyleSheet.create({
    recipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadious: 10,
        // backgroundColor: 'red'
    }
})
