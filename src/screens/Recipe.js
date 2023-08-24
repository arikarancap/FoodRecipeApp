import {
    StyleSheet, Text, View, TouchableOpacity, ImageBackground,
    Image, Animated, FlatList, Dimensions
} from 'react-native'
import React, { useRef } from 'react'
import { ROUTES, Category } from '../const';
import { CategoryCard } from '../components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const Ingredients = ({ Item, Index }) => {

//     return (
//         <View>
//             {/* <Text>This is Text field</Text> */}
//             <FlatList
//                 data={[Item,]}
//                 renderItem={({ item, index }) => {
//                     return (

//                     )
//                 }
//                 }
//             />
//         </View>)

// }





const Recipe = ({ navigation, route }) => {
    let { recipe } = route.params;
    const [selectedRecipe, setSelectedRecipe] = React.useState([recipe]);
    const HEADER_HEIGHT = windowHeight - 500;

    // setSelectedRecipe(recipe);
    // React.useEffect(() => {

    //     console.log(recipe);
    //     console.log(selectedRecipe?.name)
    // }, [])
    const Progressive = () => {
        console.log(selectedRecipe?.name)

    }
    const scrollY = useRef(new Animated.Value(0)).current;

    const RecipeCardHeader = () => {
        return (
            <View
                style={{ borderColor: 'black', borderWidth: 1, alignItems: 'center' }}
            >
                {/* Background Image */}
                <Animated.Image
                    source={recipe?.image}
                    resizeMode={"contain"}
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                                })
                            },
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [2, 1, 0.75]
                                })
                            }]
                    }}
                />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
            <Animated.FlatList
                data={selectedRecipe}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={true}
                ListHeaderComponent={
                    <View>
                        {/* Header */}
                        <RecipeCardHeader />
                        {/* info */}
                        {/* Ingredient title */}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={
                    Animated.event([
                        {
                            nativeEvent: { contentOffset: { y: scrollY } }
                        }
                    ], { useNativeDriver: true })}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            flexDirection: 'row',
                            paddingHorizontal: 30,
                            marginVertical: 5
                        }}
                        >
                            {/* Icon */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 50,
                                width: 50,
                                borderRadius: 10,
                                backgroundColor: 'rgba(0, 0, 0,0.3)'
                            }} >
                                <Image
                                    source={item.icon[index]}
                                    style={{ height: 50, width: 50 }}
                                />
                            </View>
                            {/* Description */}
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                justifyContent: 'center',
                            }} >
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: '400',
                                        color: 'black',

                                    }}
                                >{item.name}Tomato Chauss</Text>
                            </View>
                            {/* quantity */}
                            <View
                                style={{
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '400',
                                    color: 'black',

                                }} >{'100g'}</Text>
                            </View>
                        </View>
                    )
                }}
            />

        </View>
    )
}

export default Recipe

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        padding: 17,
        margin: 10,
        borderRadius: 5,
        fontSize: 18,
        width: 180,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
