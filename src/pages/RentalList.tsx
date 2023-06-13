import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menubar from '../components/Menubar'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const RentalList = () => {
    let navigate = useNavigate();
    let [apply, setapply] = useState(null);
    const [rentaldata, setrentaldata] = useState([]);

    // useEffect(()=>{
    //     axios.get("/rental_list.json").then((data)=>{
    //         setrentaldata(data.data);
    //     })
    // },[])
    // console.log(rentaldata);

    // useEffect(() => {
    //         axios.post("http://www.zena.co.kr/api/EquipmentRental/RentalInquiry")
    //         .then(res => {
    //             if (res.status === 200) {
    //                 const responseData = res.data;
    //             if (responseData.type === '1') {
    //                 console.log('현재 요청이 없어요.');
    //             } else if (responseData.type === '2') {
    //                 const resData = responseData.data;
    //                 console.log('data:', resData);
    //             }
    //             } else if (res.status == 202) {
    //                 alert(res.data.message)
    //             } else {
    //                 alert(res.data.message)
    //             }
    //         })
    //         .catch(()=>{
    //             alert("요청 실패")
    //         });
    // }, []);

    useEffect(() => {
        axios.post("http://www.zena.co.kr/api/EquipmentRental/RentalInquiry")
            .then(res => {
                setrentaldata(res.data.data)
                console.log(res.data);
            })
            .catch(() => {
                alert("Request Failed")
            });
    }, []);
    console.log(rentaldata)

    return (
    <>
        <Menubar/>
        <Bar>신청내역</Bar>
        <_Graybar>
            <div>학번</div>
            <div>이름</div>
            <div>일시</div>
        </_Graybar>
        {
            rentaldata.map((item: any) => (
            <_Link to={`/listdetail/${item.index}`}>
                <Listwrap>
                <_List>{item.studentID}</_List>
                <_List>{item.firstname+item.lastname}</_List>
                <_List>{item.created_at}</_List>
                </Listwrap>
            </_Link>
            ))
        }

        
    </>
    );
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