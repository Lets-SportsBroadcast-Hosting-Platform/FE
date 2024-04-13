import { StyleSheet, Text, View,Image  } from 'react-native';

export default function LoginPage() {
    return (
        <View style={styles.container}>
        {/* <Image source={icons} style={styles.image}/> */}
        <Text>HELLO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },

});
