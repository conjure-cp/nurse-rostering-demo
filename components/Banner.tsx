import React, { useEffect, useState } from 'react';
import { Divider } from '@chakra-ui/react'
import bannerConfig from '../common/config/banner';

const REPO_URL = 'conjure-cp/nurse-rostering-demo'

interface Contributor {
    login: string;
}

  
const Banner: React.FC = () => {
    const [contributors, setContributors] = useState<string[]>([]);
    const [lastUpdated , setLastUpdated ] = useState<string>('');

    const {
      logo,
      title,
      author,
      description,
      author_github,
      repo_url,
      github,
      license
    } = bannerConfig;
  
    useEffect(() => {
      fetch(`https://api.github.com/repos/${REPO_URL}/contributors`)
        .then(response => response.json())
        .then((data: Contributor[]) => {
          const filteredData = data.filter(contributor => contributor.login !== 'Aldiyazov' && !contributor.login.endsWith('[bot]')&& !contributor.login.endsWith('-user'));
          setContributors(filteredData.map(contributor => contributor.login));
        })
        .catch(error => console.error('Error:', error));
  
      fetch(`https://api.github.com/repos/${REPO_URL}`)
        .then(response => response.json())
        .then(data => {
          const updatedDate = new Date(data.updated_at);
          const formattedDate = `${updatedDate.getFullYear()}-${String(updatedDate.getMonth() + 1).padStart(2, '0')}-${String(updatedDate.getDate()).padStart(2, '0')}`;
          setLastUpdated(formattedDate);
        })
        .catch(error => console.error('Error:', error));
    }, []);

    const chunkSize = 3;
    const chunkedContributors = [];
  
    // Chunk the array into sizes of 3
    for (let i = 0; i < contributors.length; i += chunkSize) {
      chunkedContributors.push(contributors.slice(i, i + chunkSize));
    }

    console.log(process.env.ASSET_PREFIX)

    return (
      <div className="h-full p-4 m-4 bg-banner rounded-xl">
        {/* 
          1. Banner Container
            Height      : 'h-full' makes the div take up the full height of its parent.
            Text Colour : 'text-white' sets the text colour to white.
            Padding     : 'p-4' sets padding of 4 units on all sides.
        */}
        
        <div className=" container m-auto grid grid-cols-5 grid-flow-col-dense gap-2"> 

           {/* 1. Logo */}
          <div className="col-span-2 row-span-5 flex flex-col items-start p-4">
              <div className="flex items-center m-1">
                  <img src={`${process.env.ASSET_PREFIX ?? ''}/static/images/conjure-cp-logo.png`} alt="conjure-cp" className="w-16 h-16 " />
        
                  <div className="text-xl font-semibold ml-4">
                    <a href="https://github.com/conjure-cp" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      conjure-cp
                    </a>
                  </div>
              </div>
              <div className="text-2xl font-bold tracking-wide mb-4 m-1">{title}</div>
             
              <div className="mb-2 m-1">{description}</div>
              <div className="mb-2 m-1">License: {license}</div>
            </div>

          {/* Horizontal line */}
          <Divider className='col-span-2'/>

          {/* 1.1 Project Author */}
          <div className="row-start-2 col-span-1 flex flex-col items-stretch">
            <span className="text-lg font-semibold mb-2">Project Author</span>
            <div className="grid grid-cols-2 grid-flow-col gap-2 overflow-auto"> 
              <a href={author_github} className="mb-1 hover:underline" >{author}</a>
            </div>
          </div>

           {/* 1.2 Project Contributors */}
          <div className="row-start-2 col-span-2 flex flex-col items-stretch">
            <span className="text-lg font-semibold mb-2">Project Contributors</span>
              <p className="text-sm">
                {contributors.map((contributor, index) => (
                  <a key={index} 
                    href={`https://github.com/${contributor}`} 
                    className="mb-1 hover:underline pr-4">
                    {contributor}
                  </a>
                ))}
              </p>
          </div>
          
          {/* Horizontal line */}
          <Divider className='col-span-2' />
          
          {/* 2.1 Links*/}
          <div className="row-start-4 col-span-1 flex flex-col items-stretch">
            <span className="text-lg font-semibold mb-2">Links</span>
            <a href={`${github}`} className="mb-1 hover:underline">Source code</a>
            <a href={`${github}#readme`} className="mb-1 hover:underline">Documentation</a>
            <a href={`${github}#user-interface`} className="mb-1 hover:underline">User Interface</a>
          </div>

            
          {/* 2.2 Source Code Info Section */}
           <div className="row-start-4 col-span-1 flex flex-col items-stretch">
              <span className="text-lg font-semibold mb-2">Contact us</span>
                {/* <p className="text-sm">If you find any issues, please submit them through the following link:</p> */}
                <a href={`${github}/issues/new`} className="hover:underline">Report an Issue</a>
          </div>

          {/* Horizontal line */}
          <Divider className='col-span-2'/>
       
        </div>

      </div>
    );
  }
  
  export default Banner;
  
