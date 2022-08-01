import React from 'react'
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
        <S.WrapperImage 
            src="https://avatars.githubusercontent.com/u/55366815?v=4" 
            alt="User Avatar"
        />
        <S.WrapperInfoUser>
            <div>
                <h1>Marcelo Moura</h1>
                <S.WrapperUsername>
                    <h3>Username: </h3>
                    <span>marcelogoodtrip</span>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starreds</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile