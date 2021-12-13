import React from "react";
import LogoImg from "../../img/logo.png";
import styled from "styled-components";

const StyledLogo = styled.img`
    width : 150px;
    heigth : 50px;
    margin: 30px;
`;

const handleClick = () => {
    console.log("로고 클릭");
};

const LogoButton = () => {
    return (
        <div> 
            <StyledLogo src={LogoImg} onClick={handleClick}/>
        </div>
    );
};

export default LogoButton;