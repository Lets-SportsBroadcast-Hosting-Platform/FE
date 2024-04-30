import axios from 'axios';
import React from 'react';

class NaverLoginButton extends React.Component {
    handleNaverLogin = () => {
        const clientId = '_TtV85H8bgOAobDZA1pY';
        const redirectUri = "http://localhost:3000/login";
        const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&state=LETS&redirect_uri=${redirectUri}`

        window.location.href = naverAuthUrl;
    }

    componentDidMount = () => {
        // URL에서 인증 코드 파싱
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log('code', code)
    }


    render() {
        return (
            <button onClick={this.handleNaverLogin}>네이버 로그인</button>
        );
    }
}

export default NaverLoginButton;
