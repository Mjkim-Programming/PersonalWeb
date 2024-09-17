import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CustomHeader from './header/header-cus';
import MainPage from './mainpage/mainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomHeader/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/test" element={<h1>테스트</h1>}/>

          {/*//^ 예외처리(존재하지 않는 페이지) */}
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
