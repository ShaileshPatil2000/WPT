import React from "react";
export default class Data extends React.Component{
render(){
    
    let arr=[
        {name:"Adi",marks:90},{name:"ad",marks:76},{name:"aaaa",marks:99}
    ]
    function handle(){
        arr.forEach(element => {
                document.getElementById("n").innerHTML=arr[0].name;
                document.getElementById("m").innerHTML=arr[0].marks
            
                document.getElementById("o").innerHTML=arr[1].name;
                document.getElementById("p").innerHTML=arr[1].marks
        });
      
    }

    return(
        <>
        <h1>Data</h1>
        <button onClick={handle}>Table</button>
        <table border={"2px solid black"}>
        <tr>
            <td>Name</td>
            <td>Marks</td>
            </tr>
            <tr>
            <td id="n"></td>
            <td id="m"></td>
            </tr>
            <tr>
            <td id="o"></td>
            <td id="p"></td>
            </tr>
        </table>

    
        </>
    )
}
}















