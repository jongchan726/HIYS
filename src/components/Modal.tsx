import React, { useState } from "react";
import styled from "styled-components";

interface Ismodalprops{
    children: any;
}

const Modal = ({ children }:Ismodalprops) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <button onClick={() => setIsModalVisible(!isModalVisible)}>
                Open modal
            </button>
            {isModalVisible && (
                <ModalWrapper>
                    <ModalContent>
                        {children}
                    </ModalContent>
                </ModalWrapper>
            )}
        </>
    );
};

export default Modal;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;