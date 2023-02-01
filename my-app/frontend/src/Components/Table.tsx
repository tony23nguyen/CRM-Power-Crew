import { filter } from '@chakra-ui/react';
import React, { createElement } from 'react'

export default function Table(): any{
    
    interface filterColumns { 
        fname: boolean;
        lname: boolean;
        email: boolean;
        companyname: boolean;
        phone: boolean;
        category: boolean;
        categorystatus: boolean;
        priority: boolean;
    }

    interface tabledata {
        fname: string;
        lname: string;
        email: string;
        companyname: string;
        phone: number
        category: string;
        categorystatus: string;
        priority: string; //maybe enum?
    }

    let bob: tabledata = {
        fname: "bob",
        lname: "smith",
        email: "poop@poopers.com",
        companyname: "Adios",
        phone: 5047773333,
        category: "rentals",
        categorystatus: "in process",
        priority: "New"
    }
    let John: tabledata = {
        fname: "John",
        lname: "smith",
        email: "poop@poopers.com",
        companyname: "Adios",
        phone: 5047773333,
        category: "rentals",
        categorystatus: "in process",
        priority: "High"
    }
    let Stacey: tabledata = {
        fname: "Stacey",
        lname: "smith",
        email: "poop@poopers.com",
        companyname: "Adios",
        phone: 5047773333,
        category: "rentals",
        categorystatus: "in process",
        priority: "High"
    }
    let Lilia: tabledata = {
        fname: "Lilia",
        lname: "smith",
        email: "poop@poopers.com",
        companyname: "Adios",
        phone: 5047773333,
        category: "Vendor",
        categorystatus: "Followup",
        priority: "Urgent"
    }
    const customers = [Lilia, bob, John, Stacey]
    
    let userFilter: filterColumns = {
        fname: true,
        lname: true,
        email: true,
        companyname: true,
        phone: true,
        category: true,
        categorystatus: true,
        priority: true
    }

    function createTableHeaders(): any{
        return(           
            <tr>
                {userFilter.fname && <th>First Name</th>}
                {userFilter.lname && <th>Last Name</th>}
                {userFilter.email && <th>Email</th>}
                {userFilter.companyname && <th>Company</th>}
                {userFilter.phone && <th>Phone</th>}
                {userFilter.category && <th>Category</th>}
                {userFilter.categorystatus && <th>Status</th>}
                {userFilter.priority && <th>Priority</th>}
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
                        {userFilter.category && <td>{val.category}</td>}
                        {userFilter.categorystatus && <td>{val.categorystatus}</td>}
                        {userFilter.priority && <td>{val.priority}</td>}
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