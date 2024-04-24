import KakaoLogin from "react-kakao-login";
import axios from 'axios'
import { getToken } from "../utils/Authenticate";
const SocialKakao = () => {
    const kakaoClientId = '392c535271efcb03ee63d4a1b0e18b14'
    const kakaoOnSuccess = async (data) => {
        const idToken = data.response.access_token;  // 엑세스 토큰 백엔드로 전달
        axios.post("http://localhost:8000/login/kakao", { access_token: idToken },
        ).then(response => {
            const myToken = {
                jwt_token: response.data.access_token
            }
            localStorage.setItem('token', JSON.stringify(myToken));
            console.log(response.data);
        }).catch(response => {
            console.log(response)
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