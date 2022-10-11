import { StyleSheet, Text, View, Image, Button, FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { products } from '../../constants/data/products';
import { Product } from '../product/product'
import { useEffect, useState } from 'react';
import { filteredProduct } from '../../store/actions/products.action';


export default function ProductList({navigation}){

  const selectedCategory = useSelector((state => state.category.selected))

  const productsFiltered = useSelector((state) => state.products.filteredProduct )


    const dispatch = useDispatch()
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

      useEffect(() => {
        dispatch(filteredProduct(selectedCategory.id))
      }, [])

      const onSelected = (item) => {
        navigation.navigate('Product', {name: item.title, productId: item.id })
      }

      const renderItem = (item) => {
        <Product item={item} onSelected={onSelected}/>
      }

    return(
      <FlatList 
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      />
    )
}