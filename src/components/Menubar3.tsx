import React from "react";
import { useState } from "react";
import styled, {keyframes} from 'styled-components';

const MenuBar3 = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <Navbar>
            <_Logo src='YSIT-logo.png'></_Logo>
        <NavLinks open={isNavOpen}>
            <NavLink>
            <Link href="#">게시판</Link>
            </NavLink>
            <NavLink>
            <Link href="#">방과후</Link>
            </NavLink>
            <NavLink>
            <Link href="#">대여/반납</Link>
            </NavLink>
            <NavLink>
            <Link href="#">상담신청</Link>
            </NavLink>
            <NavLink>
            <Link href="#">학생관리</Link>
            </NavLink>
            {/* <NavLink>
            <_Teacher href="#">장두영</_Teacher>
            </NavLink> */}
        </NavLinks>
        <Hamburger onClick={() => setIsNavOpen(!isNavOpen)}>
            &#9776;
            </Hamburger>
        </Navbar>
    );
}

export default MenuBar3;

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 0.5rem 1rem;
    color: #555555;
    background-color: rgba( 255, 255, 255, 0.8 );
    border-bottom: 0.8px solid #999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const _Logo = styled.img`
    width: 50px;
    height: 50px;
`;

const Link = styled.a`
    color: #555555;
    text-decoration: none;
    &:hover {
        color: #1E00D3;
        padding-bottom: 18px;
        box-shadow: inset 0 -2px 0 #1E00D3;
    }
`;

const Hamburger = styled.div`
    display: none;
    @media (max-width: 600px) {
    display: block;
    cursor: pointer;
    }
`;

interface StyledNavLinksProps {
    open: boolean;
}
const NavLinks = styled.ul<StyledNavLinksProps>`
    list-style: none;
    display: flex;
    margin-left: 25px;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        margin-left: -4vw;
        width: 100%;
        height: 0;
        overflow: hidden;
        transition: height 0.2s ease;
        ${props => (props.open ? "height: auto;" : "")}
    }
    li {
        padding: 1rem;
        animation: ${props =>
        props.open ? "slideDown 0.8s ease forwards" : "none"};
    }
    @keyframes slideDown {
        0% {
        transform: translateY(-1rem);
        opacity: 0;
        }
        100% {
        transform: translateY(0);
        opacity: 1;
        }
    }
`;


const NavLink = styled.li`
    @media (max-width: 600px) {
        width: 100%;
        text-align: center;
    }
`;

const slideDown = keyframes`
    0% {
        transform: translateY(-1rem);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

// const _Teacher = styled.a`
//     color: #1E00D3;
//     text-decoration: none;
//     font-weight: bold;
//     &:hover {
//         cursor: pointer;
//     }
// `;