import { StyleSheet, Text, View,Image  } from 'react-native';
import icons from '../assets/images/logo.png';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
    const navigation = useNavigation();
    const applebuttonPress = () => {
        navigation.navigate('ChooseUser')
    };
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Let's</Text>
        <Text style={styles.lets}>레츠</Text>
        <Image source={icons} style={styles.image}/>
        <View style={styles.buttoncontainer}>
            <Button icon={()=><Icon name="google" size={24} color={"white"}></Icon>} mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
            <Text style={styles.text1}>Google 로그인</Text>
            </Button>
            <Button icon={()=><Icon name="instagram" size={24} color={"white"}></Icon>} mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
            <Text style={styles.text1}>인스타그램 로그인</Text>
            </Button>
            <Button icon={()=><Icon name="apple" size={24} color={"white"}></Icon>} mode="contained" onPress={applebuttonPress} style={styles.button}>
            <Text style={styles.text1}>Apple 로그인</Text>
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
    text1: {
        width: 300,
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
