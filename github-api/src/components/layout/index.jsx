import React from "react";
import Header from "../header";
import * as S from "./styled";
import githubImg from "../../imgs/github.png";

const Layout = ({ children }) => {

    return (
        <div>
            <S.WrapperLayout>
                <Header />
            </S.WrapperLayout>
            {children}
            <S.WrapperDiv>
                <S.WrapperGithubImg src={githubImg}></S.WrapperGithubImg>
            </S.WrapperDiv>
        </div>
    );
}

export default Layout