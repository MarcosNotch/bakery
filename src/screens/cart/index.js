import { StyleSheet, Text, View, Image} from 'react-native';

export default function Cart(){

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
            <Text>Cart</Text>
        </View>
    )
}