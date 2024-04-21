// 이용약관동의
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Linking,Switch} from 'react-native';
import arrowToLeft from '../assets/images/arrowToLeft.png';
import { useNavigation } from '@react-navigation/native';


export default function TermsOfService() {
    const navigation = useNavigation();

    const arrowbuttonPress = () => {
        navigation.navigate('ChooseUser');
        console.log("arrowbuttonPressed");
    };

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={styles.container}>

        <View style={styles.header}>
            <TouchableOpacity onPress={arrowbuttonPress} style={styles.touchable}>
            <Image source={arrowToLeft} style={styles.arrowIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>이용약관 동의</Text>
        </View>

        <View style={styles.linkContainer}>
        {/* <OpenURLButton url={serviceUseURL}>Service Use URL</OpenURLButton> */}
        <Text style={{color: 'grey',textDecorationLine: 'underline', }}
            onPress={() => Linking.openURL('http://google.com')}>
            서비스 이용약관
        </Text>
        <Text style={{color: 'grey',textDecorationLine: 'underline', paddingTop:50}}
            onPress={() => Linking.openURL('http://google.com')}>
            개인정보 처리 동의
        </Text>
        </View>

        <View style={styles.toogleContainer}>
        <Text> 알림 </Text>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        // paddingVertical: 30,
        // paddingHorizontal: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 10,
        width: '100%',
        position: 'relative',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    touchable: {
        alignItems: 'center',
        position: 'absolute',
        top: '50%', left: 0,
        transform: [{translateY: 13.1}, {translateX: 20}]
    },
    arrowIcon: {
        width: 20,
        height: 20,
        // 이미지와 텍스트 사이의 간격 조정
    },
    linkContainer :{
        marginTop:50,
        alignContent:'center',
        justifyContent:'center'
    },
    toogleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 10,
        width: '100%',
        position: 'relative',
    }
});
