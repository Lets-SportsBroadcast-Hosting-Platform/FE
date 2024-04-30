import KakaoLogin from "react-kakao-login";
import axios from 'axios'
import { getToken } from "../utils/Authenticate";
import React from 'react';

const SocialKakao = () => {
    const kakaoClientId = '392c535271efcb03ee63d4a1b0e18b14'
    const kakaoOnSuccess = async (data) => {
        const idToken = data.response.access_token;  // 엑세스 토큰 백엔드로 전달
        console.log('access_token', idToken)
        axios.post("http://localhost:8000/login", { access_token: idToken, provider: "kakao" },
        ).then(response => {
            if (response.data.jwt_token) {
                const myToken = {
                    jwt_token: response.data.jwt_token
                }
                localStorage.setItem('token', JSON.stringify(myToken));
            }
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };
    return (
        <>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFail={kakaoOnFailure}
            />
        </>
    )
}

export default SocialKakao;

export const Logintest = () => {
    const v = () => {
        const ACCESS_TOKEN = getToken();

        if (ACCESS_TOKEN) {
            console.log(ACCESS_TOKEN.jwt_token);
            axios.post("http://localhost:8000/login/token", { jwt_token: ACCESS_TOKEN.jwt_token }
            ).then(response => {
                console.log(response);
                console.log("로그인 했어요");
            }).catch(response => {
                console.log("에러난다...");
            });
        }


    }

    return (
        <>
            <button onClick={v}>카카오 다시 로그인</button>
        </>
    )
}

export const NaverLogin = () => {

    const clientId = '_TtV85H8bgOAobDZA1pY';
    // const redirectUri = "http://localhost:8000/login/naver";
    const redirectUri = "http://localhost:3000/login";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${Math.random().toString(36).substring(3, 14)}`;

    const redirect_url = () => {
        window.location.replace(NAVER_AUTH_URL);
    }
    const get_access_code = async () => {
        const params = new URL(document.location).searchParams;
        const url = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=UEU7uHGcHr&code=${params.get("code")}&state=${params.get("state")}`
        await axios.post("http://localhost:8000/login", { access_token: params.get("code"), state: params.get("state"), provider: "naver" }).then(response => {
            if (response.data.login_token) {
                const myToken = {
                    login_token: response.data.login_token
                }
                localStorage.setItem('token', JSON.stringify(myToken));
            }
            console.log(response)
        })
    }
    return (
        <>
            <br />
            <button onClick={redirect_url}>redirect_url</button>
            <br />
            <button onClick={get_access_code}>get_access_code</button>
        </>
    )
};