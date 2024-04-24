import './App.css';
import SocialKakao from './components/KakaoLoginBtn';
function App() {
  // 토큰이 있다면 토큰이 리턴되어 True, 없다면 null이 리턴되어 False 
  return (
    <div className="App">
      <SocialKakao />
    </div >
  );
}

export default App;