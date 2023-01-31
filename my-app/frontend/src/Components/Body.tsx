import React from 'react'
import Table from './Table'
import FilterModal from './FilterModal';

export default function Body(): any{
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            
            {<button onClick={() => setIsOpen(true)}>Open filter thingy</button>}
            {isOpen && <FilterModal setIsOpen={setIsOpen} />} 
            <Table />
        </div>
    )
}