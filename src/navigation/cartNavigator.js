// tengo que tener una carpeta screens con todas las distintas pantallas y en esta navigation manejor lo que seria el arbol de navegacion

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/cart";

const Stack = createNativeStackNavigator();


const CartNavigator = () => {

    return(
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    )

}


export default CartNavigator