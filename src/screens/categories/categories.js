import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default function Categories({navigation}){



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
            <Text>Hola mundo</Text>
            <Button title='Go to Productos' onPress={() => {navigation.navigate("ProductList")}}/>
        </View>
    )
}