import { GithubContext } from '../providers/github-provider';
import { useContext } from 'react';

const useGithub = () => {
  
    const {githubState, getUser, getUserRepos, getUserStarred} = useContext( GithubContext );
  
    return {githubState, getUser, getUserRepos, getUserStarred};
};

export default useGithub;
