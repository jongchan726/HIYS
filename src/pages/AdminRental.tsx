import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Menubar from '../components/Menubar'

const AdminRental = () => {
    const [Accept, setAccept] = useState(true)
    const [dumy, setdumy] = useState([
        {
            "name" : "정채윤",
            "number" : "2218",
            "person" : "5",
            "period" : "3/14 ~ 3/20",
            "meet" : "7:00pm ~ 10:00am",
            "phonenum" : "01050610163",
            "purpose" : "응애"
        }
    ])
    return (
        <>
    <_Wrap>
    <Menubar/>
    <_Header>제목</_Header>
    <_List>기자재 목록</_List>
    <_Write>신청서</_Write>
    <Btnwrap>
        <_SubmitBtn bg="#0cde25" color="#ffffff" 
            onClick={()=>{
                setAccept(true)
                alert("수락되었습니다.")
                console.log(Accept)
                axios.post('https://jsonplaceholder.typicode.com/posts', {Accept})
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            }}>수락</_SubmitBtn>
        <_SubmitBtn bg="#ff0000" color="#ffffff"
            onClick={()=>{
                setAccept(false)
                alert("거절되었습니다.")
                console.log(Accept)
                axios.post('https://jsonplaceholder.typicode.com/posts', {Accept})
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            }}>거절</_SubmitBtn>
    </Btnwrap>
    </_Wrap>
    </>
    );
};

export default AdminRental;

const _Wrap = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
        "header header header"
        ". list ."
        ". write ."
        ". btn .";
`

const _Header = styled.header`
    width: 100%;
    margin-top: 30px;
    font-size: 28px;
    font-weight: 750;
    color: #000000;
    text-align: center;
    grid-area: header;
`

const _List = styled.div`
    width: 700px;
    font-size: 23px;
    font-weight: 700;
    color: #000000;
    box-shadow: inset 0 -2px 0 #1E00D3;
    padding-bottom: 10px;
    grid-area: list;
`

const _Write = styled.div`
    width: 700px;
    font-size: 23px;
    font-weight: 700;
    color: #000000;
    box-shadow: inset 0 -2px 0 #1E00D3;
    padding-bottom: 10px;
    grid-area: write;
`

//제출버튼부모
const Btnwrap = styled.div`
    display: flex;
    justify-content: center;
    grid-area: btn;
`

//제출버튼
interface Container{
    bg: any;
    color: any;
}
const _SubmitBtn = styled.button<Container>`
    width: 25vw;
    height: 60px;
    background: ${props => props.bg};
    color : ${props => props.color};
    border-radius: 15px;
    border: none;
    margin: 5px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    @media (max-width: 600px) {
    font-size: 13px;
    }
`