import { StyleSheet,Text, View, Image,FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../product/product';
import { useEffect } from 'react';
import { filteredProducts } from '../../store/reducers/productsSlice';

export default function ProductList({navigation}){

  const selectedCategory = useSelector((state => state.category.selected))

  const productsFiltered = useSelector(state => state.products.filteredProducts)

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
        dispatch(filteredProducts({categoryId: selectedCategory.id}))
      }, [])

      const onSelected = (item) => {
        navigation.navigate('Product', {name: item.title, productId: item.id })
      }

      const renderItem = (item) => {
        return( <Product item={item} onSelected={onSelected}/>)
      }


    return(
      <FlatList 
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      />
    )


}