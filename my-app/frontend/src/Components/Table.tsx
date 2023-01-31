import { filter } from '@chakra-ui/react';
import React, { createElement } from 'react'

export default function Table(): any{
    
    interface filterColumns { 
        fname: boolean;
        lname: boolean;
        email: boolean;
        companyname: boolean;
        phone: boolean
    }

    interface persondata {
        fname: string;
        lname: string;
        email: string;
        companyname: string;
        phone: number
    }
    let bob: persondata = {
        fname: "bob",
        lname: "smith",
        email: "poop@poopers.com",
        companyname: "Adios",
        phone: 5047773333
    }
    let John: persondata = {
        fname: "John",
        lname: "smith",
        email: "poop@poopers.com",
        companyname: "Adios",
        phone: 5047773333
    }
    let Stacey: persondata = {
        fname: "Stacey",
        lname: "smith",
        email: "poop@poopers.com",
        companyname: "Adios",
        phone: 5047773333
    }
    let Lilia: persondata = {
        fname: "Lilia",
        lname: "smith",
        email: "poop@poopers.com",
        companyname: "Adios",
        phone: 5047773333
    }
    const customers = [Lilia, bob, John, Stacey]
    
    let userFilter: filterColumns = {
        fname: true,
        lname: true,
        email: true,
        companyname: true,
        phone: false
    }

    function createTableHeaders(): any{
        return(           
                <tr>
                    {userFilter.fname && <th>First Name</th>}
                    {userFilter.lname && <th>Last Name</th>}
                    {userFilter.email && <th>Email</th>}
                    {userFilter.companyname && <th>Company</th>}
                    {userFilter.phone && <th>Phone</th>}
                </tr>
        )
    }


    function createTableRows( ): any{
        return(
            customers.map((val, key) => {
                return (
                    <tr key={key}>
                        {userFilter.fname && <td>{val.fname}</td>}
                        {userFilter.lname && <td>{val.lname}</td>}
                        {userFilter.email && <td>{val.email}</td>}
                        {userFilter.companyname && <td>{val.companyname}</td>}
                        {userFilter.phone && <td>{val.phone}</td>}
                    </tr>

                )
            })
        )
    }
    //Table component - returnn
    return (
        <table>
            <thead>
                {createTableHeaders()}
            </thead>
            <tbody>
                {createTableRows()}
            </tbody>
        </table>
    );

}