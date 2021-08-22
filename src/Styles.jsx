import styled from "styled-components";
import {Input} from 'antd';

export const Head = styled.h1`
    color: #390179;
    margin-left: 20%;
`;
export const Title = styled.h2`
    color: #251A43;    
`;
export const Main = styled.div`
    margin-top: 15%;
    margin-left: 20%;
`;
export const CustomInput = styled(Input)`
    background-color: #F5F2F8;
    border-radius: 5px;
    border:none;
    &:hover{
        border: 1px solid rgb(215, 204, 228);
    }
    margin-bottom: 25px;
`;
export const Sizer = styled.div`
    font-size: 0.6rem;
`;
export const Wrapper = styled.div`
    display: flex;
`;
export const Photofixer = styled.div`
    width: 60%;
    height: 50%;
    // float: right;
    flex: 60%;
`;
export const WrapperOne = styled.div`
    flex: 40%;
`;