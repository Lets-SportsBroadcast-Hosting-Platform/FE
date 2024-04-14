import { StyleSheet, Text, View,Image  } from 'react-native';
import icons from '../assets/images/logo.png';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// sso login
import react, { useState, useEffect} from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: "814369862994-q1q7dql3i8dgja96pmrjcqm7hl4bv3js.apps.googleusercontent.com",
        androidClientId: "814369862994-a3ne5dc9o270opj57vbcpevjddg702t5.apps.googleusercontent.com",
    });
    const [userInfo, setUserInfo] = useState(null);

    // Google 로그인 처리하는 함수
    const handleSignInWithGoogle = async () => {
        const user = await AsyncStorage.getItem("@user");
        if (!user) {
        if (response?.type === "success") {
            // 인증 요청에 대한 응답이 성공이면, 토큰을 이용하여 유저 정보를 가져옴.
            await getUserInfo(response.authentication?.accessToken);
        }
        } else {
        // 유저 정보가 이미 있으면, 유저 정보를 가져옴.
        setUserInfo(JSON.parse(user));
        console.log(userInfo)
        }
    };

    // 토큰을 이용하여 유저 정보를 가져오는 함수
    const getUserInfo = async (token) => {
        if (!token) return;
        try {
        const response = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {   
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const userInfoResponse = await response.json();
        // 유저 정보를 AsyncStorage에 저장, 상태업뎃
        await AsyncStorage.setItem("@user", JSON.stringify(userInfoResponse));
        setUserInfo(userInfoResponse);
        } catch (e) {
        console.log(e);
        }
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem("@user");
        setUserInfo(null);
    };

    useEffect(() => {
        handleSignInWithGoogle();
    }, [response]);

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Let's</Text>
        <Text style={styles.lets}>레츠</Text>
        <Image source={icons} style={styles.image}/>
        <View style={styles.buttoncontainer}>
            <Button icon={()=><Icon name="google" size={24} color={"white"}></Icon>} mode="contained" onPress={() => promptAsync()} style={styles.button}>
            <Text style={styles.text1}>Google 로그인</Text>
            </Button>
            <Button icon={()=><Icon name="instagram" size={24} color={"white"}></Icon>} mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
            <Text style={styles.text1}>인스타그램 로그인</Text>
            </Button>
            <Button icon={()=><Icon name="apple" size={24} color={"white"}></Icon>} mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
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
