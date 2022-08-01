import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

export const Repositories = () => {
  return (
    <S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
    >
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
            <RepositoryItem 
                name="Best-Dex-Go-" 
                linkToRepository="https://github.com/marcelogoodtrip/Best-Dex-Go-"
                fullName="marcelogoodtrip/Best-Dex-Go-"
            />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
        <RepositoryItem 
                name="biscoito-da-sorte-client" 
                linkToRepository="https://github.com/marcelogoodtrip/marcelogoodtrip"
                fullName="marcelogoodtrip/biscoito-da-sorte-client"
            />
        </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}
