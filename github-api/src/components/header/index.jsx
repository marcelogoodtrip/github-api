import React, { useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import githubLogo from "../../imgs/github-logo.png";


const Header = () => {

  const { getUser } = useGithub();

  const [usernameForSearch, setUsernameForSearch] = useState(undefined);

  const submitGetUser = () => {
    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  }

  return (
    <header>
        <S.Wrapper>
            <img src={githubLogo}></img>
            <input type="text" placeholder='Digite o username para pesquisar...' onChange={(event) => setUsernameForSearch(event.target.value)}/>
            <button type="submit" onClick={submitGetUser}>
                <span>Buscar</span>
            </button>
        </S.Wrapper>
    </header>
  )
}

export default Header;
