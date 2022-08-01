import { GithubContext } from '../providers/github-provider';
import { useContext } from 'react';

const useGithub = () => {
  
    const {githubState} = useContext( GithubContext );
  
    return {githubState};
};

export default useGithub;
