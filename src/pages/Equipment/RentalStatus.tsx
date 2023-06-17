import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menubar from '../../components/Menubar';
import axiosInstance from '../../api/API_Server';
import { useNavigate, Link} from "react-router-dom";

const RentalStatus = () => {
    const [rentaldata, setrentaldata] = useState([]);

    // useEffect(() => {
    //     axiosInstance.post("/EquipmentRental/RentalInquiry")
    //         .then(res => {
    //         setrentaldata(res.data.data);
    //         console.log(res.data);
    //         })
    //         .catch(() => {
    //         alert("요청 실패");
    //         });
    //     }, []);

    return (
    <>
    <Menubar/>
        <Bar>신청내역</Bar>
        <_Graybar>
            <div>날짜</div>
            <div>내용</div>
            <div>상태</div>
        </_Graybar>
        {/* {rentaldata.map((item: any) => ( */}
            {/* <_Link key={item.id} to={`/listdetail/${item.index}`}> */}
            <Listwrap>
                <_List>{"6/18 18:30"}</_List>
                <_List>{"기자재대여신청"}</_List>
                <_List>{"수락됨"}</_List>
            </Listwrap>
            {/* </_Link> */}
        {/* ))} */}
    </>
    );
};

export default RentalStatus;

const Bar = styled.div`
    width: 100vw;
    height: 50px;
    margin-top: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    /* border-bottom: 0.8px solid #999999; */
`
const _Graybar = styled.div`
    background: #5038ff;
    color: #fff;
    width: 100vw;
    height: 30px;
    /* border-top: 1.5px solid gray; */
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
    cursor: pointer;
`

const _List = styled.li`
    font-weight: 400;
    width: 130px;
    text-align: center;
`

const _Link = styled(Link)`
    text-decoration: none;
    color: inherit;
`