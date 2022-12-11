import React from 'react';
import './Toolbar.css';

function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <div className='toolbar'>
      {filters.map((o) => (<button onClick={onSelectFilter} key={o} className={o === selected ? 'active' : ''}>{o}</button>
      ))}
    </div>
  );
}

export default Toolbar;