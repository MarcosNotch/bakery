import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {styles} from "./style.js"

const GridItem = ({item, onSelected}) => {

    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={() => onSelected(item)} style={{...styles.button, backgroundColor: item.color}}>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )


}


export default GridItem