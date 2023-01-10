import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h1>홈</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/">
        <button>홈으로</button>
      </Link>
      <Link to="/user-login">
        <button>로그인하기</button>
      </Link>
    </div>
    );
  };
  
  export default Home;