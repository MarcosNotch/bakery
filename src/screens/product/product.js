import { StyleSheet, Text, View, Image} from 'react-native';

export default function Product({item}){

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20
        }
      });

    return(
        <View style={styles.container}>
            <Text>{item.item.title}</Text>
        </View>
    )
}