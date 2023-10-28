import React, { useEffect, useState } from 'react';
import { Divider } from '@chakra-ui/react'

const REPO_URL = 'conjure-cp/nurse-rostering-demo'

interface Contributor {
    login: string;
  }
  
const Banner: React.FC = () => {
    const [contributors, setContributors] = useState<string[]>([]);
    const [lastUpdated , setLastUpdated ] = useState<string>('');
  
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

    return (
      <div className="h-full p-4 m-4 bg-banner rounded-xl">
        {/* 
          1. Banner Container
            Height      : 'h-full' makes the div take up the full height of its parent.
            Text Colour : 'text-white' sets the text colour to white.
            Padding     : 'p-4' sets padding of 4 units on all sides.
        */}
        
          {/* 
            Flex Container
              Container   : 'container' sets the max-width to the designed container width.
              Margin Auto : 'm-auto' centers the container horizontally.
              Grid Layout: The 'grid grid-cols-5 grid-flow-col-dense gap-2' classes are used to set up a grid layout. This replaces the previous flex layout ('flex flex-row').
              Grid Columns: 'grid-cols-5' specifies that the grid should have 5 columns.
              Column Flow: 'grid-flow-col-dense' tries to fill in earlier columns before adding more columns to the layout.
              Grid Gap: 'gap-2' sets the grid gap between columns to 2 units.
              Responsive  : md:grid-cols-4 TODO
          */}
        <div className=" container m-auto grid grid-cols-5 grid-flow-col-dense gap-2"> 

           {/* 
            1 Logo
              Flex-Col: 'flex flex-col' enables flex layout and arranges children in a column.
              Column Span: 'col-span-2' spans the div across 2 columns of the grid.
              Row Span: 'row-span-5' spans the div across 5 rows of the grid.
              Alignment: 'items-start' aligns the flex items to the start of the container.
              Padding: 'p-4' sets padding of 4 units on all sides.
              Text Style: 
                - 'text-lg' sets the text size to large,
                - 'font-semibold' makes the text semi-bold,
                - 'mb-2' adds a margin-bottom of 2 units to the span elements inside.
          */}
          <div className="col-span-2 row-span-5 flex flex-col items-start p-4">
              {/* Logo */}
              <div className="flex items-center m-1">
                <img src="/static/images/conjure-cp-logo.png" alt="conjure-cp" className="w-16 h-16 " />
                  <div className="text-xl font-semibold ml-4">
                    <a href="https://github.com/conjure-cp" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      conjure-cp
                    </a>
                  </div>
              </div>
              <div className="text-2xl font-bold tracking-wide mb-4 m-1">Nurse Rostering</div>
             
              <div className="mb-2 m-1">This project is created as a dissertation project at the University of St Andrews to simplify and optimise nurse scheduling in healthcare facilities.</div>
              <div className="mb-2 m-1">License: Mozilla Public License 2.0</div>
              {/* Last Updated */}
              <div className="text-sm mb-2 m-1"> Last Updated: {lastUpdated} </div>
            </div>

          {/* Horizontal line */}
          <Divider className='col-span-2'/>

          {/* 1.1 Project Author */}
          <div className="row-start-2 col-span-1 flex flex-col items-stretch">
            <span className="text-lg font-semibold mb-2">Project Author</span>
            <div className="grid grid-cols-2 grid-flow-col gap-2 overflow-auto"> 
              <a href={`https://github.com/Aldiyazov`} className="mb-1 hover:underline" >Aldiyar Ablyazov</a>
            </div>
          </div>

           {/* 1.2 Project Contributors */}
          <div className="row-start-2 col-span-2 flex flex-col items-stretch">
            <span className="text-lg font-semibold mb-2">Project Contributors</span>
            <div className="grid grid-cols-2 grid-flow-col gap-2 overflow-auto"> 
            {chunkedContributors.map((chunk, chunkIndex) => (
              <div key={`chunk-${chunkIndex}`} className="row-span-1 col-span-1 flex flex-col items-start">
                {chunk.map((contributor, index) => (
                  <a key={index} href={`https://github.com/${contributor}`} className="mb-1 hover:underline">{contributor}</a>
                ))}
              </div>
            ))}
            </div>
          </div>
          
          {/* Horizontal line */}
          <Divider className='col-span-2' />
          
          {/* 2.1 Additional Links*/}
           <div className="row-start-4 col-span-1 flex flex-col items-stretch">
            <span className="text-lg font-semibold mb-2">Additional Links</span>
            <a href={`https://github.com/${REPO_URL}`} className="mb-1 hover:underline">GitHub</a>
            <a href={`https://github.com/${REPO_URL}#readme`} className="mb-1 hover:underline">Documentation</a>
            <a href={`https://github.com/${REPO_URL}#application-preview`} className="mb-1 hover:underline">Demo</a>
          </div>

            
          {/* 2.2 Source Code Info Section */}
           <div className="row-start-4 col-span-1 flex flex-col items-stretch">
              <span className="text-lg font-semibold mb-2">Demo</span>
              <a href={`https://github.com/${REPO_URL}/blob/main/screenshots/create-staff.gif`} className="mb-1 hover:underline">Create staff</a>
              <a href={`https://github.com/${REPO_URL}/blob/main/screenshots/set-qualification.gif`} className="mb-1 hover:underline">Set qualification</a>
              <a href={`https://github.com/${REPO_URL}/blob/main/screenshots/schedule.gif`} className="mb-1 hover:underline">Schedule</a>
          </div>

          {/* Horizontal line */}
          <Divider className='col-span-2'/>
       
        </div>

      </div>
    );
  }
  
  export default Banner;
  