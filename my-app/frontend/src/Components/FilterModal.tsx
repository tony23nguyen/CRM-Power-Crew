import React from "react";
import { Button as button } from "@chakra-ui/react";
export default function FilterModal(props: any){

    let styleSelected={
        backgroundColor:"#333333"
    }

    function handleClick(): void{

    }

    return (
        <div className="modalFilter">
            <div className="modalcontent">
                <div className="modalHeader">
                    <h2>Which columns do you want to display?</h2>
                </div>
                
                <div className="modalBody">
                    <div className="filterSelectors">
                        <button onClick={props.filterHandler} name="fname">Name</button>
                        <button onClick={props.filterHandler} name="lname">Last Name</button>
                        <button onClick={props.filterHandler} name="companyname">Company</button>
                        <button onClick={props.filterHandler} name="phone">Phone</button>
                        <button onClick={props.filterHandler} name="email">Email</button>
                        <button onClick={props.filterHandler} name="small">Phone</button>
                        <button onClick={props.filterHandler} name="category">Category</button>
                        <button onClick={props.filterHandler} name="categorystatus">Status</button>
                        <button onClick={props.filterHandler} name="priority">Priority</button>
                    </div>  
                <button onClick={()=> props.setIsOpen(false)}>Close</button>
                </div>                  
            </div>
        </div>
    )

}
