import React from 'react'
import Table from './Table'
import FilterModal from './FilterModal';
import { Key } from 'readline';

export default function Body(): any{
    const [isOpen, setIsOpen] = React.useState(false);

    interface iFilter{
        [key: string] : boolean,
    }
    interface defaultfilter extends iFilter{
        fname: boolean,
        lname: boolean,
        email: boolean,
        companyname: boolean,
        phone: boolean,
        category: boolean,
        categorystatus: boolean,
        priority: boolean
    }

    let tempFilter: defaultfilter = {
        fname: true,
        lname: true,
        email: true,
        companyname: true,
        phone: true,
        category: true,
        categorystatus: true,
        priority: true
    }

    const [filter, setFilter] = React.useState(tempFilter)

    function handleOnClickFilters(event: any){
        let keyName = event.target.name
        setFilter((prevFilter => ({...prevFilter, 
            [keyName]: !prevFilter[keyName] })
           
            
            
            // prevFilter[keyName] = !prevFilter[keyName].value
            ))
    }



    return (
        <div>
            
            {<button onClick={() => setIsOpen(true)}>Open filter thingy</button>}
            {isOpen && <FilterModal filterHandler={handleOnClickFilters} setIsOpen={setIsOpen} />} 
            <Table filter={filter} />
        </div>
    )
}