import React from 'react';

const RepositoryItem = ({name, linkToRepository, fullName}) => {
  return (
    <div>
        <h2>{ name }</h2>
        <h4>full name:</h4>
        <a href={linkToRepository} target="blank" rel="norefer">
            {fullName}
        </a>
    </div>
  )
}

export default RepositoryItem;