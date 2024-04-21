//사업자등록 번호 입력하는 페이지
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import arrowToLeft from '../assets/images/arrowToLeft.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginPage() {
    const navigation = useNavigation();

    const arrowbuttonPress = () => {
        navigation.navigate('HostAuthentication');
        console.log("arrowbuttonPressed");
    };

    //TextInput
    const [text, setText] = React.useState('');
    const onChangeText = (inputText) => {
        setText(inputText);
        console.log(inputText);
    };

    //사업자등록번호
    const [number, setNumber] = React.useState('');
    const onChangeNumber = (inputNumber) => {
        setNumber(inputNumber);
        console.log(inputNumber);
    };

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={arrowbuttonPress} style={styles.touchable}>
            <Image source={arrowToLeft} style={styles.arrowIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>사장님이신가요?</Text>
            
        </View>

{/* 클릭하면 다시 전 페이지로 가서 가게 이름 다시 찾기 */}
        <View style={styles.textInputContainer}>
            <TextInput
            label="벨지움재즈카페"
            value={text}
            onChangeText={onChangeText}
            style={styles.storeInputText}
            // mode="outlined" // TextInput을 읽기 전용 모드로 변경
            editable={false} // TextInput을 비활성화
            
            />
        </View>

{/* 스타일 수정, 다른 곳 클릭하면 키보드 다시 내려가기, 입력시 라벡 보이지 않게 */}
        <View style={styles.textInputContainer}>
        <TextInput
        label="사업자번호 입력 예)123-45-67890"
        value={number}
        onChangeNumber={onChangeNumber}
        style={styles.storeInputText}
        // placeholder="사업자번호 입력 예)123-45-67890"
        // label=""
        />
        </View>
        
        {/* 사업자번호 형식 만족하면 활성화 */}
        <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.HostBusinessNumberButton}>
        인증
        </Button>

        {/* 인증 완료되면 활성화 */}
        <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.HostBusinessNumberButton}>
        다음
        </Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        alignItems: 'center',
        position: 'relative'
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
    textInputContainer: {
        width: 360,
        justifyContent: 'center',
    },
    storeInputText :{
        height:45,
        borderRadius:5,
        marginBottom:30
    },
    HostBusinessNumberButton: {
        width: 360,
        borderRadius: 5,
        marginTop: 7,
        // backgroundColor:'#01162D',
        backgroundColor:'#B7B7B7',
    },
});
