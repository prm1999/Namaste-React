import React from "react";
import ReactDOM from "react-dom/client";




// React Element

const Haeding=()=>(
    <h1 id="title" key="h1"> Hello</h1>
)

// React Component
// functional Comment is nothing just a javascript function
//functional component should write in to Start with the Capital Letter

const HeadComponent1=()=>{
    return (
        
        <div>
            {Haeding()}
        <h1> Namaste React By Pradeep</h1>
        </div>
       
    );
}



const HeadComponent2=()=>
 (
        <div>

            <HeadComponent1/>
        <h1> Namaste React By Comment2</h1>
        </div>
       
    );

// HeadComponent1 and HaedComponent2 is same



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent2/>);
// console.log(heading)