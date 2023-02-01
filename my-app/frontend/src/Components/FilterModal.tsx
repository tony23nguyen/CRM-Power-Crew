import React from "react";

export default function FilterModal(props: any){

    let styleSelected={
        backgroundColor:"#333333"
    }


    return (
        <div className="modalFilter">
            <div className="modalcontent">
                <div className="modalHeader">
                    <h2>Which columns do you want to display?</h2>
                </div>
                
                <div className="modalBody">
                    <div className="filterSelectors">
                        <span>Name</span>
                        <span>Company</span>
                        <span>Last Name</span>
                        <span>Phone</span>
                        <span>Email</span>
                        <span>Phone</span>
                    </div>  
                <button onClick={()=> props.setIsOpen(false)}>Close</button>
                </div>                  
            </div>
        </div>
    )

}