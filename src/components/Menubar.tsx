import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


const ResponsiveNavbar = () => {
    let navigate = useNavigate();

    return (
    <Navbar>
    <Logo src="/YSIT-logo.png" alt="logo" onClick={()=>navigate('/')}/>
    <Menu>
        <MenuItemWrapper>
        <MenuItem onClick={()=>navigate('/')}><_Link>대여/반납</_Link></MenuItem>
        <MenuItem onClick={()=>navigate('/rentallist')}><_Link>신청내역</_Link></MenuItem>
        <MenuItem onClick={()=>navigate('/add-camera')}><_Link>기자재 추가하기</_Link></MenuItem>
        </MenuItemWrapper>
        <LoginButton onClick={()=>navigate('/login')}>관리자로그인</LoginButton>
    </Menu>
    </Navbar>
);
};

export default ResponsiveNavbar;

    const Navbar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    `;
    
    const Logo = styled.img`
        width: 45px;
        height: 45px;
        cursor: pointer;
    `;
    
    const Menu = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
    `;
    
    const MenuItemWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    `;
    
    const MenuItem = styled.li`
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #333;
    @media (max-width: 600px) {
        font-size: 0.7rem;
        margin-right: 0;
    }
    `;

    const _Link = styled.span`
    color: #555555;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #1E00D3;
        padding-bottom: 18px;
        box-shadow: inset 0 -2px 0 #1E00D3;
    }
`;
    
    const LoginButton = styled.button`
    /* background-color: #0077cc; */
    background-color: #1E00D3;
    color: #fff;
    padding: 0.5rem 0.7rem;
    border-radius: 0.3rem;
    margin-right : 2rem;
    font-size: 0.9rem;
    font-weight: bold;
    border-style: none;
    cursor: pointer;
    `;