import React from "react";
import minameriter from './minameriter.json'
const CvDisplay = () =>{
    return(
        <div>
            <div>
                <h1>Arbetserfarenhet</h1>
               <ul>
                {
                    minameriter.myCv.map((meriter)=>(
                        <li key ={meriter.id}>                         
                            <h3>{meriter.arbetslivserfarenhet}</h3>
                            <p>{meriter.uppgift}</p>
                            <p>{meriter.tid}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Utbildning</h1>
               <ul>
                {
                    minameriter.utbildning.map((utb)=>(
                        <li key ={utb.id}>                         
                            <h3 className="utbildningsName ">{utb.namn}</h3>
                            <p>{utb.kurs}</p>
                            <p>{utb.syear}</p>
                            <p>{utb.eyear}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default CvDisplay;

