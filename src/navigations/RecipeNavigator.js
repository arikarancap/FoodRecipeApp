import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../const';
import { Recipe } from '../screens'
const Stack = createStackNavigator()
const RecipeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.RECIPE} component={Recipe} />
        </Stack.Navigator>
    )
}

export default RecipeNavigator;

const styles = StyleSheet.create({})