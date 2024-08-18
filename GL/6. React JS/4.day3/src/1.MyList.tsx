import React from "react";
import AnimalComponent from "./2.Animals";



function MyList(){
    // const Animals = ["Lion","Wolf","Tiger","Elephant"];

    const Animals=[
        {
            "image":"https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg",
            "name":"Lion",
            "age":20,
            "gender":"Female"
        },
        {
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnthZsUqzt0hnoRskzXKAv19R4nn43gIL4wtqV49lCBwuSGaBnTJaI3im9dpS7tDvFizg&usqp=CAU",
            "name":"Wolf",
            "age":7,
            "gender":"male"
        },
        {
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfLPlcsWDBTU4LH4R3ZdT3UR8KIqPUACcF6yNpKVfwKqHAL_Ls3nKGwvZKjHLvMIUMR8&usqp=CAU",
            "name":"Tiger",
            "age":10,
            "gender":"Female"
        },
        {
            "image":"https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png",
            "name":"Elephant",
            "age":40,
            "gender":"male"
        }
    ]

    return(
        <div>
            <h4>MyList</h4>
            <ul>
                { //for writing javascript code
                    [
                        Animals.map((temp , index)=> (
                            <div>
                                {/* <li>{temp}</li> */}
                                {/* <li key={index}>{temp}</li> */}
                                {/* <li>{index}</li> */}
                                
                                {/* <ul> tag is not required for below code */}
                                <AnimalComponent name={temp.name} age={temp.age} gender={temp.gender} image={temp.image}></AnimalComponent>
                            </div>
                            
                        ))
                        
                        
                    ]
                }
            </ul>
        </div>
    )
}

export default MyList;