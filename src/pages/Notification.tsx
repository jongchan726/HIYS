import React, { useEffect } from 'react';
import styled from 'styled-components';
import Menubar from '../components/Menubar'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Notification = () => {
    let navigate = useNavigate();
    useEffect(() => {
        const userget = (response: any) =>{
            axios
            .get("http://www.zena.co.kr/api/register")
            .then(() => (response))
            .catch();
            console.log(response);
        }
    });
    return (
    <>
        <Menubar/>
        <Bar>신청내역</Bar>
        <_Graybar>
            <div>학번</div>
            <div>이름</div>
            <div>일시</div>
        </_Graybar>
        <Listwrap>
            <_List>1</_List>
            <_List>정채윤</_List>
            <_List>2023-03-16</_List>
        </Listwrap>
        <Listwrap>
            <_List>1</_List>
            <_List>정채윤</_List>
            <_List>2023-03-16</_List>
        </Listwrap>
        <Listwrap>
            <_List>1</_List>
            <_List>정채윤</_List>
            <_List>2023-03-16</_List>
        </Listwrap>
        <Listwrap>
            <_List>1</_List>
            <_List>정채윤</_List>
            <_List>2023-03-16</_List>
        </Listwrap>
        <Listwrap>
            <_List>1</_List>
            <_List>정채윤</_List>
            <_List>2023-03-16</_List>
        </Listwrap>
        <Listwrap>
            <_List>1</_List>
            <_List>정채윤</_List>
            <_List>2023-03-16</_List>
        </Listwrap>
    </>
    );
};

export default Notification;

const Bar = styled.div`
    width: 100vw;
    height: 50px;
    margin-top: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 0.8px solid #999999;
`
const _Graybar = styled.div`
    background: #b5b5b5;
    width: 100vw;
    height: 30px;
    border-top: 1.5px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div{
        font-weight: 600;
        width: 130px;
        text-align: center;
    }
`

const Listwrap = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 0.8px solid #999999;
`

const _List = styled.li`
    font-weight: 400;
    width: 130px;
    text-align: center;
`
