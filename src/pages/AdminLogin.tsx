import React, { useState, useEffect } from 'react';
import styled,{keyframes} from 'styled-components';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    const [inputCode, setInputCode] = useState('')
    const [passwordType,setPasswordType] = useState({
        type:'password',
        visible:false
    })
    const handleCodeType = (e:any) => {
        setPasswordType(()=>{
            if(!passwordType.visible) {
                return {type: 'text', visible:true};
            }
            return {type:'password',visible:false};
        })
    }

    const handleInputCode = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputCode(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const llogin = () => {
        axios.post("http://www.zena.co.kr/api/login", {
                code : inputCode
            })
            .then(() => navigate("/"))
            .catch()
    }
    
    let navigate = useNavigate();
        
    return (
        <div>
            <_Wrapper>
            <_Form>
            {/* <_Logo src='YSIT22.png'></_Logo> */}
                <Title>
                <_Subtitle>안녕하세요!</_Subtitle>
                <_TeamName>
                    I Can Do <_TeamNameColor>IT콘텐츠과</_TeamNameColor><_TeamNameColor1>입니다!</_TeamNameColor1>
                </_TeamName>
                </Title>
        <_InputWrap>
            <_Label>인증코드</_Label>
            <br />
            <_Input
            value={inputCode}
            onChange={handleInputCode}
            type={passwordType.type}
            placeholder="인증코드를 입력해주세요"
            />
            <_Logowrap onClick={handleCodeType}>
                {passwordType.visible ? <_Logo src='eye1.svg'></_Logo> : <_Logo src='eye2.svg'></_Logo>}
            </_Logowrap>
        </_InputWrap>
            <_LoginButton onClick={llogin}>
                로그인 하기
            </_LoginButton>
            </_Form>
            </_Wrapper>
        </div>
    );
};

export default UserLogin;

const _Logo = styled.img`
    width: 20px;
    height: 20px;
`;

const _Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(to right bottom, #9786ff, #2805fc);
`;

const _TeamName = styled.div`
font-size: 32px;
text-align: center;
margin-left: 35px;
margin-top: 10px;

font-weight: bold;
`;

const _TeamNameColor = styled.span`
color: #1e00d3;
`;

const _TeamNameColor1 = styled.span`
    font-size: 12px;
`;

const Title = styled.div`
    margin-bottom: 30px;
`

const _Form = styled.form`
    background-color: #ffffff;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    width: 500px;
    height: 350px;
    margin: 0 auto;

    box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.25);

    > button {
        margin-top: 7vh;
    }

    @media (max-width: 600px) {
        width: 400px;
        height: 350px;
    }
`;

const _Subtitle = styled.div`
    font-family: 'Noto Sans KR';
    font-size: 25px;
    text-align: center;
    margin: 0;
    margin-top: 20px;
    font-weight: bold;
`

const _Label = styled.label`
font-size: 13px;

margin-left: 5px;
font-weight: bold;
`;

const _Input = styled.input`
width: 365px;
height: 50px;
margin-top: 3px;
font-weight: bold;
border: 1px solid #e5e5e5;
:focus {
    border: 1.8px solid blue;
}
border-radius: 12px;
padding-left: 10px;

border-color: gray;
outline: none;
@media (max-width: 600px) {
        width: 340px;
    }
`;

const _InputWrap = styled.div`
margin: 0 auto;

`;

const _Logowrap = styled.div`
    display: flex;
    justify-content: end;
    position: relative;
    z-index: 1;
    bottom: 35px;
    margin-right: 10px;
    width: 10px;
    margin-left: 95%;
`;

const _LoginButton = styled.button`
    width: 380px;
    height: 56px;
    background-color: #1E00D3;
    border-radius: 12px;
    color: #ffffff;
    font-size: 20px;
    margin: 0 auto;
    font-weight: bold;
    border: none;
    cursor: pointer;
    @media (max-width: 600px) {
        width: 360px;
    }
`