import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import CartNavigator from "./cartNavigator";
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {

    return(
        <BottomTab.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false}}>
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} options={{tabBarIcon: ({focused}) => (<Ionicons name={focused ? "file-tray-full": "file-tray-full-outline" } size={24} color="black" />)}}/>
            <BottomTab.Screen name="CartTab" component={CartNavigator} options={{tabBarIcon: ({focused}) => (<Ionicons name={focused ? "cart": "cart-outline" } size={24} color="black" />)}}/>
        </BottomTab.Navigator>
    )

}


export  default Tabs