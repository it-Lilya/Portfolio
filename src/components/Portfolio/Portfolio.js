import React, { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';
import'./Portfolio.css';

function Portfolio({projectList}) {
  const List = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [FilterList, setFilterList] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (evt) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));
    evt.target.classList.add('active');

    const select = evt.target.textContent;
    
    if(select === 'All') {
      setFilterList(projectList);
    } else {
      setFilterList(projectList.filter(item => item.category === select));
    }
    setSelected(select);
  }

  return (
    <div className='contain'>
      <Toolbar
        filters={List}
        selected={selected}
        onSelectFilter={filter} />

      <div className='date'>
        <ProjectList projects={FilterList} /> 
      </div>
    </div>
    );
}

export default Portfolio;
