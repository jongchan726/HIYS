import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TeamName from '../components/TeamName';
import Input from '../components/Input'
import Button from '../components/Button';
import {useNavigate, Link} from 'react-router-dom';
// import axios from 'axios';

const UserLogin = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        navigate('/')
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //     axios.get('/user_inform/login')
    //     .then(res => console.log(res))
    //     .catch()
    // },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    // [])

    let navigate = useNavigate();

    return (
        <div>
            <_Wrapper>
            <_Form>
                <_Subtitle>환영합니다!</_Subtitle>
            <TeamName/>
                <_BtnWrap>
                    <_Jobbtn onClick={()=>{ navigate('/user-login') }}><_Jobtx color= '#555555' >학생</_Jobtx></_Jobbtn>
                    <_Line/>
                    <_Jobbtn><_Jobtx color= '#005DE8'>교사</_Jobtx></_Jobbtn>
                </_BtnWrap>
            <Input
                value={inputId}
                onChange={handleInputId}
                placeholder="아이디를 입력해 주세요."
                name="email"
            />
            <Input
                value={inputPw}
                onChange={handleInputPw}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                name="password"
            />
            <Button onClick={onClickLogin} backgroundColor={'#1E00D3'}>
                로그인 하기
            </Button>
            <_Newteacher>신규 사용자이신가요? <Link to='/sign-up'>회원가입하기</Link></_Newteacher>
            </_Form>
            </_Wrapper>
        </div>
    );
};

export default UserLogin;

const _Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const _BtnWrap = styled.div`
    display: flex;
    justify-content: space-around;
`;

const _Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
  > label {
    :first-of-type {
        margin-top: 20px;
    }
        margin-top: 20px;
    }
    > button {
        margin-top: 26px;
    }
    > span {
        margin-top: 20px;
    }
`;

const _Jobbtn = styled.button`
    width: 180px;
    height: 47px;
    background: #FFFFFF;
    /* border: 1px solid #005DE8; */
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const _Jobtx = styled.div`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.color};
`;

const _Line = styled.div`
    width: 23px;
    height: 0px;

    border: 1px solid #B7B7B7;
    transform: rotate(90deg);
    margin-top: 20px;
`;

const _Subtitle = styled.div`
    font-family: 'Noto Sans KR';
    font-size: 25px;
    text-align: center;
    margin: 0;
`

const _Newteacher = styled.span`
    text-align: center;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-size: 14px;
`