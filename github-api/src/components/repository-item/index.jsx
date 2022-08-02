import React from 'react';
import * as S from './styled';

const RepositoryItem = ({name, linkToRepository, fullName}) => {
  return (
    <S.Wrapper>
        <S.WrapperTitle>{ name }</S.WrapperTitle>
        <S.WrapperFullName>full name:</S.WrapperFullName>
        <S.WrapperLink href={linkToRepository} target="blank" rel="norefer">
            {fullName}
        </S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem;