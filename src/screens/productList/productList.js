import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default function ProductList({navigation}){

    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });



    return(
        <View style={styles.container}>
            <Button title='View the product' onPress={() => {navigation.navigate("Product")}}/>
        </View>
    )
}