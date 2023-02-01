import { filter } from '@chakra-ui/react';
import React, { createElement } from 'react'

export default function Table(props: any): any{
    

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
        email: "bob@EEFire.com",
        companyname: "Adios",
        phone: 5047773333,
        category: "rentals",
        categorystatus: "in process",
        priority: "New"
    }
    let John: tabledata = {
        fname: "John",
        lname: "smith",
        email: "John@EEFire.com",
        companyname: "Adios",
        phone: 5047773333,
        category: "rentals",
        categorystatus: "in process",
        priority: "High"
    }
    let Stacey: tabledata = {
        fname: "Stacey",
        lname: "smith",
        email: "Stacey@EEFire.com",
        companyname: "Adios",
        phone: 5047773333,
        category: "rentals",
        categorystatus: "in process",
        priority: "High"
    }
    let Lilia: tabledata = {
        fname: "Lilia",
        lname: "smith",
        email: "Lilia@EEFire.com",
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
                {props.filter.fname && <th>First Name</th>}
                {props.filter.lname && <th>Last Name</th>}
                {props.filter.email && <th>Email</th>}
                {props.filter.companyname && <th>Company</th>}
                {props.filter.phone && <th>Phone</th>}
                {props.filter.category && <th>Category</th>}
                {props.filter.categorystatus && <th>Status</th>}
                {props.filter.priority && <th>Priority</th>}
            </tr>
        )
    }

//https://clips.twitch.tv/ProductiveDaintyMushroomSoBayed-9PlzN8ug857sw5VW
    function createTableRows( ): any{
        return(
            customers.map((val, key) => {
                return (
                    <tr key={key}>
                        {props.filter.fname && <td>{val.fname}</td>}
                        {props.filter.lname && <td>{val.lname}</td>}
                        {props.filter.email && <td>{val.email}</td>}
                        {props.filter.companyname && <td>{val.companyname}</td>}
                        {props.filter.phone && <td>{val.phone}</td>}
                        {props.filter.category && <td>{val.category}</td>}
                        {props.filter.categorystatus && <td>{val.categorystatus}</td>}
                        {props.filter.priority && <td>{val.priority}</td>}
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