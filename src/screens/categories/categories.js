import { StyleSheet, Text, View, Image, Button, ScrollView, FlatList, SafeAreaView} from 'react-native';
import GridItem from '../../components/gridItem/GridItem';
import { categories } from '../../constants/data/categories';

export default function Categories({navigation}){


  const onSelected = (item) => {
    navigation.navigate("ProductList", {name: item.title, categoryID: item.id})
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