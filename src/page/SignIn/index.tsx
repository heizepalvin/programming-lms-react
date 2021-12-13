import React from "react";
import LogoButton from "../../components/LogoButton/index";
import styled from "styled-components";
import "../SignIn/index.css";
const StyledLoginContainer = styled.div`
    width: 20rem;
    margin: 5rem auto 0;
    padding: 3.2rem 4rem;
    border-radius: 0.6rem;
    background-color: #ffffff;
`;

const StyledInputContainer = styled.form`
    margin-top: 30px;
`;

const SignIn = () => {
    return (
        <div>
            <LogoButton />
            <StyledLoginContainer id="loginContainer">
                <div id="titleContainer">
                    <span className="smallTitle">언더독 연구소</span>
                    <span className="bigTitle">학습 관리 시스템</span>
                </div>
                <StyledInputContainer id="inputContainer">
                    <label className="idLabel" htmlFor="userId">아이디</label>
                    <input className="idInput" id="userId" placeholder="아이디를 입력해주세요."/>
                    <label className="pwdLabel" htmlFor="userPwd">비밀번호</label>
                    <input className="pwdInput" id="userPwd" placeholder="비밀번호를 입력해주세요." type="password"/>
                </StyledInputContainer>
                <button className="loginButton">로그인</button>
            </StyledLoginContainer>
        </div>
    );
};

export default SignIn;