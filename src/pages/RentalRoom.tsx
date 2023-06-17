import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menubar from '../components/Menubar';
import axiosInstance from '../api/API_Server';
import { useNavigate, Link} from "react-router-dom";
import axios from 'axios';



const RentalRoom = () => {

  const [roomStateType, setRoomStateType] = useState(0)
  const [roomStateMessage, setRoomStateMessage] = useState("")
  const [roomNumber, setRoomNumber] = useState(null)
  const [roomAcceptor, setRoomAcceptor] = useState(null)
  const [roomStartTime, setRoomStartTime] = useState(null)
  const [roomEndTime, setRoomEndTime] = useState(null)


  
  axiosInstance.post('/RoomRental/CheckUserStatus', { id: "a7315506-ded3-42e9-aab6-0c92a70aca2a" })
    .then(res => {
      if (res.status === 200) { // 'status'가 '200'이면
              if (res.data.type === 3) { // 'Type'이 '3'이면 데이터를 순차적으로 저장
                setRoomStateType(res.data.type) // 'Type'을 '3'으로 설정
                setRoomNumber(res.data.room_number)
                setRoomStartTime(res.data.start_time)
                setRoomEndTime(res.data.end_time)
                setRoomAcceptor(res.data.acceptor)
              } else if (res.data.type === 4 || res.data.type === 2 || res.data.type === 1) { // 'Type'이 '1' 또는 '2'이면
                setRoomStateType(res.data.type) // 'Type'을 'data.type'에서 받아온 값으로 설정
                setRoomStateMessage(res.data.message) // 'Message'를 'data.message'에서 받아온 값으로 설정
                console.log(res.data.type)
                console.log(res.data.message)
              }
            } else { // 예외가 발생하면
              setRoomStateType(0) // 'Type'을 '0'으로 설정
              setRoomStateMessage("예외가 발생했습니다.")
            }
    })
    .catch(() => {
      console.log("요청 실패")
    })

  return (<div>dhdn</div>)

}

export default RentalRoom;