import { useState } from "react"

export default function ShowcityName()
{
    let[city,setcity] = useState("Not Selected")

    function handler(event)
    {
    
        console.log(event.target)
        let selectedcity = event.target.value 
        switch(selectedcity)
        {
            case "pune" : setcity("enup");break;
            case "mumbai" :setcity("iabmum");break;
            case "goa" : setcity("aog");break;
            case "juhu" : setcity("adanac");break;
            default : break;
        }
    }
    return(
        <div>
            <select onChange={handler}  >
                <option>Select Month</option>
                <option>pune</option>
                <option>mumbai</option>
                <option>goa</option>
                <option>juhu</option>
                <option>canada</option>
                
            </select>

        <p>The reverse city Name is : {city}</p>

        </div>
    )
}