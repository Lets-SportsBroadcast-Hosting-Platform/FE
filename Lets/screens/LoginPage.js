import { StyleSheet, Text, View,Image  } from 'react-native';
import icons from '../assets/images/logo.png';


export default function LoginPage() {
    return (
        <View style={styles.container}>
        <Image source={icons} style={styles.image}/>
        <Text style={styles.text}>HELLO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01162D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        transform: [{ translateY: -70 }]
    },
    text: {
        color:'white',
        transform: [{ translateY: -70 }]
    }

});
