import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menubar from '../../components/Menubar'
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";
import axiosInstance from '../../api/API_Server';

interface ClockProps {}

const RentalList: React.FC<ClockProps> = () => {
    let navigate = useNavigate();
    let [apply, setapply] = useState(null);
    const [rentaldata, setrentaldata] = useState([]);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [job, setjob] = useState(sessionStorage.getItem('job'));

    useEffect(() => {
    setCurrentDate(new Date());
    }, []);

    useEffect(() => {
    axiosInstance.post("/EquipmentRental/RentalInquiry")
        .then(res => {
        setrentaldata(res.data.data);
        console.log(res.data);
        })
        .catch(() => {
        alert("요청 실패");
        });
    }, []);

    useEffect(() => {
    if (job !== "teacher") {
        setTimeout(() => {
            alert("관리자 로그인이 필요합니다.");
            navigate("/home");
        }, 0);
    }
    }, []);

    console.log(rentaldata);

    if (job === "teacher") {
    // JSX 반환
    return (
        <>
        <Menubar />
        <Bar>신청내역</Bar>
        <_Graybar>
            <div>학번</div>
            <div>이름</div>
            <div>일시</div>
        </_Graybar>
        {rentaldata.map((item: any) => (
            <_Link key={item.id} to={`/listdetail/${item.index}`}>
            <Listwrap>
                <_List>{item.studentID}</_List>
                <_List>{item.firstName + item.lastName}</_List>
                <_List>{item.created_at.substring(5, 16).replace(/-/g, '/').replace(/T/g, ' ')}</_List>
            </Listwrap>
            </_Link>
        ))}
        </>
    );
    } else {
    // 빈 JSX 반환
    return <></>;
    }
};

export default RentalList;


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