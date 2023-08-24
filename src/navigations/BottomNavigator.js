import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, BookMark, Settings, } from '../screens';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { ROUTES } from '../const';
import { TabIcon } from '../components';


const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='BookMark'
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    height: 100,
                }


            }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                headerShown={false}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                        icon={'home'}
                    />,
                    headerShown: false,
                }}



            />
            <Tab.Screen
                name="BookMark"
                component={BookMark}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                        icon={'bookmark'}
                    />
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                        icon={'search'}
                    />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                        icon={'settings'}
                    />
                }}
            />
        </Tab.Navigator>

    )
}

export default BottomNavigator;