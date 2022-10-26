import React from "react";

//colorChanger
const HOC = (Propspect) => {
    console.log(Propspect);//a component
    const color = ['pink', 'blue', 'orange', 'green'];
    const randomColor = color[Math.floor(Math.random() * 4)];

    return () => {
        return (
            <div style={{ color: randomColor }}>
                <Propspect />
            </div>
        )
    }

}

export default HOC;


// add= () => {

// }

// add(56);