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
                    <div>
                        <a href="#">Name</a>
                        <a href="#">Company</a>
                        <a href="#">Last Name</a>
                        <a href="#">Phone</a>
                        <a href="#">Email</a>
                        <a href="#">Phone</a>
                    </div>  
                <button onClick={()=> props.setIsOpen(false)}>Close</button>
                </div>                  
            </div>
        </div>
    )

}