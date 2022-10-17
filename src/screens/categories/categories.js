import { StyleSheet, Text, View, Image, Button, ScrollView, FlatList, SafeAreaView} from 'react-native';
import GridItem from '../../components/gridItem/GridItem';
import { useSelector, useDispatch  } from 'react-redux';
import { selectedCategory } from '../../store/reducers/categorySlice';


export default function Categories({navigation}){

  const categories = useSelector((state) => state.category.categories)
  
  const dispatch = useDispatch();

  const onSelected = (item) => {
    dispatch(selectedCategory({categoryId: item.id}))
    navigation.navigate("ProductList", {name: item.title})
  }

  const renderItem = ({item}) => <GridItem onSelected={() => {onSelected(item)}} item={item}/>


  const styles = StyleSheet.create({

  itemList: {
    flex: 1,
    marginVertical:20,
    marginHorizontal: 20 
  },

      });

    return(

        <FlatList style={styles.itemList} data={categories} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}/>
    
    )
}