import { StyleSheet, Text, View,Image  } from 'react-native';
import icons from '../assets/images/logo.png';
import { Button } from 'react-native-paper';

export default function LoginPage() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Let's</Text>
        <Text style={styles.lets}>레츠</Text>
        <Image source={icons} style={styles.image}/>
        <View style={styles.buttoncontainer}>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
            Google 로그인
            </Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
            카카로 로그인
            </Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
            Apple 로그인
            </Button>
        </View>
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
        width: 230,
        height: 230,
        transform: [{ translateY: -40 }]
    },
    text: {
        color:'white',
        transform: [{ translateY: -60 }],
        fontSize:27,
        fontWeight: '800'
    },
    lets :{
        color:'white',
        transform: [{ translateY: -60 }]
    },
    buttoncontainer :{
        transform: [{ translateY: 90 }],

    },
    button: {
        marginBottom : 20,
        width: 300,
        // backgroundColor:'white',
        // color:'black'
    }

});
