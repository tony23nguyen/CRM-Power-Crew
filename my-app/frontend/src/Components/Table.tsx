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
        email: false,
        companyname: true,
        phone: false
    }

    function createTableRows( ): any{
        return(
            customers.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.fname}</td>
                        <td>{val.lname}</td>
                        <td>{val.email}</td>
                        <td>{val.companyname}</td>
                        <td>{val.phone}</td>
                    </tr>
                )
            }
        )
    )
}
    //Table component - returnn
    return (
        <table>
            <thead>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Company</td>
                <td>Phone</td>
            </thead>
            <tbody>
                {createTableRows()}
            </tbody>
        </table>
    );

}