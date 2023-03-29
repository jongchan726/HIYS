import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TeamName from '../components/TeamName';
import Input from '../components/Input'
import Button from '../components/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [Loding, setLoding] = useState(false)

	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputPw(e.target.value)
    }

	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        navigate('/home')
    }
    const llogin = () => {
        axios.post('http://www.zena.co.kr/api/login', {
                loginId : inputId,
                loginPw : inputPw
            })
            .then(
                res => console.log(res)
            )
            .catch()
    }
    // useEffect(() => {
    //     const LoginFunc = (e: { preventDefault: () => void; }) => {
    //         e.preventDefault();
    //         if (!inputId) {
    //         return alert("ID를 입력하세요.");
    //         }
    //         else if (!inputPw) {
    //         return alert("Password를 입력하세요.");
    //         }else {
    //             let body = {
    //             loginid : inputId,
    //             loginpw : inputPw
    //             };
    //             axios.post("/api/user/", body)
    //             .then((res) => {
    //             console.log(res.data);
    //             if(res.data.code === 200) {
    //                 console.log("로그인");
    //                 // dispatch(loginUser(res.data.userInfo));
    //             }
    //             if(res.data.code === 400) {
    //                 alert("ID, Password가 비어있습니다.");
    //             }
    //             if(res.data.code === 401) {
    //                 alert("존재하지 않는 ID입니다.");
    //             }
    //             if(res.data.code === 402) {
    //                 alert("Password가 틀립니다.");
    //             }
    //             })
    //             .catch((error)=>{
    //                 alert(error);
    //             })
    //     }}}, []);

	// 페이지 렌더링 후 가장 처음 호출되는 함수
    
        
    
    
    let navigate = useNavigate();
    const [color1, setColor1] = useState('#1E00D3');
    const [color2, setColor2] = useState('#B7B7B7');

    const handleClick1 = () => {
        setColor1(color1 === '#B7B7B7' ? '#1E00D3' : '#1E00D3');
        setColor2(color2 === '#1E00D3' ? '#B7B7B7' : '#B7B7B7');
    };
    
    const handleClick2 = () => {
        setColor2(color2 === '#B7B7B7' ? '#1E00D3' : '#1E00D3');
        setColor1(color1 === '#1E00D3' ? '#B7B7B7' : '#B7B7B7');
    };
        
    return (
        <div>
            <_Wrapper>
            <_Form>
            <_Logo src='YSIT22.png'></_Logo>
                <_Subtitle>환영합니다!</_Subtitle>
            <TeamName/>
                <_BtnWrap>
                    <_Jobbtn type = 'button' style={{ color: color1 }} onClick={handleClick1}>학생</_Jobbtn>
                    <_Line/>
                    <_Jobbtn type = 'button' style={{ color: color2 }} onClick={handleClick2}>교사</_Jobbtn>
                </_BtnWrap>
            <Input
                value={inputId}
                onChange={handleInputId}
                placeholder="아이디를 입력해 주세요."
                type='text'
            />
            <Input
                value={inputPw}
                onChange={handleInputPw}
                type = "password"
                placeholder="비밀번호를 입력해 주세요."
            />
            <Button onClick={llogin} backgroundColor={'#1E00D3'}>
                로그인 하기
            </Button>
            <_FindWrap>
                <_Find onClick={()=>navigate('/find-id')}>아이디 찾기</_Find>
                <_Line/>
                <_Find onClick={()=>navigate('/find-pw')}>비밀번호 찾기</_Find>
            </_FindWrap>
            </_Form>
            </_Wrapper>
        </div>
    );
};

export default UserLogin;

const _Logo = styled.img`
    width: 150px;
    height: 71px;
    margin: 0 auto;
    margin-bottom: 20px;
`;

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
`;

const _Jobbtn = styled.button`
    width: 180px;
    height: 47px;
    background: #FFFFFF;
    border: none;
    cursor: pointer;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
`;

const _Line = styled.div`
    width: 13px;
    height: 0px;

    border: 1px solid #B7B7B7;
    transform: rotate(90deg);
    margin-top: 21px;
`;

const _Subtitle = styled.div`
    font-family: 'Noto Sans KR';
    font-size: 25px;
    text-align: center;
    margin: 0;
`

const _FindWrap = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`;

const _Find = styled.button`
    width: 160px;
    height: 47px;
    background: #FFFFFF;
    color: #666666;
    border: none;
    cursor: pointer;
    font-family: 'Noto Sans';
    font-style: normal;
    /* font-weight: 600; */
    font-size: 15px;
`;