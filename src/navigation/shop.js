// tengo que tener una carpeta screens con todas las distintas pantallas y en esta navigation manejor lo que seria el arbol de navegacion

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../screens/productList/productList";
import Categories from "../screens/categories/categories"
import Product from "../screens/product/product"


const Stack = createNativeStackNavigator();


const ShopNavigator = () => {

    return(
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="ProductList" component={ProductList} options={({route}) => ({title: route.params.name})}/>
        </Stack.Navigator>
    )

}


export default ShopNavigator