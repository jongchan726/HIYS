import React, {useState} from 'react';
import styled from 'styled-components';
import Menubar from '../components/Menubar'
import Productlist from '../Productlist.json'

const Rental = () => {
    const selectList = ["apple", "banana", "grape", "orange"];
    const [Selected, setSelected] = useState("");
    const [cart, setcart]: any[] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    let [Product, setProduct] = useState(Productlist);
    const [border1, setborder1] = useState('1px solid #B7B7B7');
    
    const handleClick1 = () => {
        setborder1(border1 === '1px solid #B7B7B7' ? '1px solid #1E00D3' : '1px solid #B7B7B7');
    };

    const handleSelect = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelected(e.target.value);
    };

    return (
        <>
        <Menubar/>
        <_Wrap>
            <_Header>신청하기</_Header>
            <_Menulist>
                {/* <_listtitle>장비대여
                    <_listitem>신청목록</_listitem>
                    <_listitem>나의 신청내역</_listitem>
                    <_listitem>문의하기</_listitem>
                </_listtitle> */}
            </_Menulist>
            <_Listwrap>
                <_Subtext>기자재 목록<_Addbtn onClick={() => setIsModalVisible(!isModalVisible)}>추가하기 +</_Addbtn>
                <Cartwrap>
                            {
                                cart.map((a: any, i: string | number)=>{
                                        return (
                                            <Cartproductwrap key={i}>
                                            <CartBorder style={{ border: border1 }}>
                                            <CartImg src={`product/${cart[i].url}`} />
                                            </CartBorder>
                                            <CartName>{cart[i].name}</CartName>
                                            </Cartproductwrap>
                                        )
                                        })
                                }
                            </Cartwrap>
                    {isModalVisible && (
                    <ModalWrapper>
                        <ModalContent>
                            <_Headmodal>
                                기자재 추가하기
                            </_Headmodal>
                            <Cartwrap>
                            {
                                cart.map((a: any, i: string | number)=>{
                                        return (
                                            <Cartproductwrap key={i}>
                                            <CartBorder style={{ border: border1 }}>
                                            <CartImg src={`product/${cart[i].url}`} />
                                            </CartBorder>
                                            <CartName>{cart[i].name}</CartName>
                                            </Cartproductwrap>
                                        )
                                        })
                                }
                            </Cartwrap>
                            <RentalListWrap>
                                <Sortmenu><_Sort>카메라</_Sort><_Sort>삼각대</_Sort><_Sort>조명</_Sort><_Sort>녹음</_Sort><Search/></Sortmenu>
                                {
                                Product.map((a, i)=>{
                                        return (
                                            
                                            <Productwrap onClick={()=>{
                                                const cartItem = {
                                                    id : Product[i].id,
                                                    name : Product[i].name,
                                                    url : Product[i].url,
                                                    sort : Product[i].sort
                                                }
                                                setcart([...cart, cartItem]);
                                            }} key={i}>
                                            <ImgBorder style={{ border: border1 }}>
                                            <ProductImg src={`product/${Product[i].url}`} />
                                            </ImgBorder>
                                            <ProductName>{Product[i].name}</ProductName>
                                            </Productwrap>
                                        )
                                        })
                                }
                            </RentalListWrap>
                            {/* 확인버튼은 저장되게 닫기버튼은 취소로 */}
                            <OKbtn onClick={() => setIsModalVisible(!isModalVisible)}>확인</OKbtn><Closebtn onClick={() => setIsModalVisible(!isModalVisible)}>닫기</Closebtn>
                        </ModalContent>
                    </ModalWrapper>
                )}
            </_Subtext>
            </_Listwrap>
            <_Writewrap>
                <_Subtext>신청서 작성</_Subtext>
                <_Inputtitle>이름<_Input placeholder='이름을 입력해주세요.' width={"150px"}/></_Inputtitle>
                <_Inputtitle>학번<_Input placeholder='학번을 입력해주세요.' width={"150px"}/></_Inputtitle>
                <_Inputtitle>이용인원<_Input placeholder='9' width={"35px"}/>명</_Inputtitle>
                <_Inputtitle>대여기간
                    <_Dropdownwrap>
                    <Dropdown onChange={handleSelect} value={Selected}>
                        {selectList.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                        ))}
                    </Dropdown>
                        <_Line1/>
                    <Dropdown onChange={handleSelect} value={Selected}>
                        {selectList.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                        ))}
                    </Dropdown>
                    </_Dropdownwrap>
                </_Inputtitle>
                <_Inputtitle>불출시점
                <_Dropdownwrap>
                    <Dropdown onChange={handleSelect} value={Selected}>
                        {selectList.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                        ))}
                    </Dropdown>
                        <_Line1/>
                    <Dropdown onChange={handleSelect} value={Selected}>
                        {selectList.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                        ))}
                    </Dropdown>
                    </_Dropdownwrap>
                </_Inputtitle>
                <_Inputtitle>연락처<_Input type="tel" placeholder="00*-000*-0000" maxLength={13}></_Input></_Inputtitle>
                <_Input2title>이용목적 및 이용내역
                    <_Input2wrap>
                        <_Subinputtitle>※사용 용도, 작품 내용 등을 구체적으로 적어주세요.</_Subinputtitle>
                        <_Input2 placeholder='- 이용목적: (예: 영화콘텐츠 제작, 미디어교육, 행사)&#13;&#10;
                            - 촬영일자:  월  일&#13;&#10;
                            - 사용장소:&#13;&#10;
                            - 제작내용:'>
                        </_Input2>
                    </_Input2wrap>
                </_Input2title>
                            <Btnwrap><_SubmitBtn bg="#1E00D3" color="#ffffff">제출하기</_SubmitBtn><_SubmitBtn bg="#ffffff" color="#000000">취소</_SubmitBtn></Btnwrap>
            </_Writewrap>
            
        </_Wrap>
        </>
    );
};

export default Rental;

const _Wrap = styled.div`
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
        "header header header"
        "sbmenu list ."
        ". write ."
        ". btn .";
`

//제목
const _Header = styled.header`
    width: 100%;
    margin-top: 30px;
    font-size: 28px;
    font-weight: 750;
    color: #000000;
    text-align: center;
    grid-area: header;
`

//기자재목록
const _Listwrap = styled.div`
    width: 100%;
    grid-area: list;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

//기자재목록텍스트
const _Subtext = styled.div`
    width: 100%;
    font-size: 23px;
    font-weight: 700;
    color: #000000;
    box-shadow: inset 0 -2px 0 #1E00D3;
    padding-bottom: 10px;
`

//추가하기
const _Addbtn = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #1E00D3;
    color: white;
    float: right;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
`

const _Writewrap = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    grid-area: write;
`

const _Inputtitle = styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
    padding-left: 10px;
    box-shadow: inset 0 -1px 0 #888888;
    display: flex;
`

const _Input = styled.input`
    width:${props => props.width};
    height: 20px;
    margin-left: 20px;
    border: 1px solid #888888;
    border-radius: 3px;
    padding-left: 5px;
`

//드롭다운 부모
const _Dropdownwrap = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
`

//드롭다운
const Dropdown = styled.select`
    width: 80px;
    height: 25px;
`

const _Line1 = styled.div`
    width: 8px;
    height: 1.3px;
    background-color: #000000;
    margin:0 10px 0 10px;
`

//이용목적 및 이용내역 부모
const _Input2wrap = styled.div`
    display: flex;
    flex-direction: column;
`

//텍스트
const _Input2title = styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
    padding-left: 10px;
    box-shadow: inset 0 -1px 0 #888888;
    display: flex;
    @media (max-width: 600px) {
    flex-direction: column;
    }
`

//경고문구
const _Subinputtitle = styled.span`
    font-size: 16px;
    margin-left: 10px;
    margin-top: 3px;
    color: red;
    @media (max-width: 600px) {
    font-size: 15px;
    margin-left: 0;
    }
`

//이용목적 및 이용내역 인풋
const _Input2 = styled.textarea`
    width: 300px;
    height: 200px;
    margin-left: 20px;
    border: 1px solid #888888;
    border-radius: 3px;
    padding-left: 5px;
    white-space: pre-line;
    @media (max-width: 600px) {
    margin-left: 0;
    font-size: 13px;
    }
`

//제출버튼부모
const Btnwrap = styled.div`
    display: flex;
    justify-content: center;
    button:last-child {
        border: 1px solid #888888;
    }
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
    cursor: pointer;
    @media (max-width: 600px) {
    font-size: 13px;
    }
`

//장비대여메뉴
const _Menulist = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: sbmenu;
`

//모달창 스타일
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div` 
    position: absolute;
    top: 50%;
    left: 50%;

    width: 55vw;
    height: 90vh;

    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    transform: translateX(-50%) translateY(-50%);
`;

//모달창 내용
const _Headmodal = styled.h3`
    margin: 25px;
    padding-bottom: 10px;
    box-shadow: inset 0 -1px 0 #888888;
`

////////////////////////////////////////////////////////////////////작업중/////////////////////
const Cartwrap = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 25px 0 25px;
    grid-column-gap: 10px;
`

const Cartproductwrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CartBorder = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`

const CartImg = styled.img`
    width: 60%;
`

const CartName = styled.div`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
`


const RentalListWrap = styled.div`
    padding: 0 25px 0 25px;
    /* margin-top: 150px; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-template-areas: 
        "sort sort sort sort"
        "product product product product"
        "product product product product"
        "btn btn btn btn"
`

const Sortmenu = styled.div`
    grid-area: sort;
    display: flex;
    box-shadow: inset 0 2px 0 #1E00D3;
    margin-top: 10px;
`

const _Sort = styled.div`
    font-size: 16px;
    padding: 15px;
    cursor: pointer;
    :hover{
        box-shadow: inset 0 -1px 0 #1E00D3;
    }
`

const Search = styled.input`
    grid-area: search;
    margin: 15px 5px 0 auto;
    border: 1px solid gray;
    border-radius: 10px;
    width: 130px;
    height: 20px;
`

const Productwrap = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const ImgBorder = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    grid-area: product;
`

const ProductImg = styled.img`
    width: 60%;
    grid-area: product;
`

const ProductName = styled.div`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
    grid-area: product;
`

const OKbtn = styled.button`
    position: fixed;
    bottom : 15px;
    right: 2vw;
    margin: 0 0 0 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
    width: 6.5vw;
    height: 35px;
    border-radius: 8px;
    border: none;
    background-color: #1E00D3;
    grid-area: btn;
`

const Closebtn = styled.button`
    position: fixed;
    bottom : 15px;
    right: 9vw;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
    width: 6.5vw;
    height: 35px;
    border-radius: 8px;
    border: none;
    background-color: #999999;
    grid-area: btn;
`
