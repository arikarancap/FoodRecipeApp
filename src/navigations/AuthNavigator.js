import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../const';
import { Login, ForgotPassword, Register, Home, Recipe } from '../screens';
import BottomNavigator from './BottomNavigator';
const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.HOME}

        >
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.LOGIN} component={Login} />
            <Stack.Screen options={{ headerShown: true }} name={ROUTES.REGISTER} component={Register} />
            <Stack.Screen options={{ headerShown: true }} name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.HOME} component={BottomNavigator} />
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.RECIPE} component={Recipe} />

        </Stack.Navigator>
    )
}

export default AuthNavigator;

const styles = StyleSheet.create({})