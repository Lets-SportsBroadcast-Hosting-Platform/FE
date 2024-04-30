import './App.css';
import SocialKakao, { NaverLogin, Logintest } from './components/KakaoLoginBtn';
function App() {

  return (
    <div className="App">
      <SocialKakao />
      <Logintest />
      <NaverLogin />
    </div >
  );
}

export default App;