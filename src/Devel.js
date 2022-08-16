import React from "react";

function Dev(){
    const person={
        name:"ola",job:"dev", role:"backend"
    };
    return(
        <div>
            <h2>my name is Tunji</h2>
            <Tunji job={person} />
        </div>
    );
}

function Tunji(props){
    return(
        <h1>Welcome to my page. I am a {props.job.role} developer</h1>
    );
}
export default Dev;