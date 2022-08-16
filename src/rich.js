import React from "react";

function Drink(){
    return <h1>beer</h1>
}

function Nodrink(){
    return <h1>water</h1>
}

function Totake(props){
    const party= props.party;
    if(party){
        return <Drink />
    }
    return <Nodrink />
}

function Niceone(){
    return <Totake party={false} />
};
export default Niceone;
