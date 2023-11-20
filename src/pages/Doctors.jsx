import React, { useState,useEffect } from 'react'

const Doctors = (props) => {

    const category = "Dermatologist";
    const [data, setData] = useState([]);
    const [filteredDoctors,setFileteredDoctors] = useState([]);
    // useEffect(() => {

    //     const getDoctors = async () => {
    //         try {
    //             const response = await fetch(`${process.env.REACT_APP_API_URL}/doctors`);
    //             const list = await response.json();
    //             console.log(list);
    //             const finalList = list.data;
    //             console.log("data :- ",finalList);
    //             setData(finalList);

    //         }
    //         catch (err) {
    //             console.log("error in fetching data", err)
    //         }
    //     }

    //     getDoctors();
    // },[]);
    // let filteredDoctors;
    // const doctorData = data.filter((doctor) => doctor.category === category);
    // setFileteredDoctors(doctorData);
    return (
        <div>
            <div>
                {
                    
                    
                }
            </div>

            {/* <div>
                {
                    filteredDoctors.map((dr) => (
                        <div>
                            {dr.name}
                            <br/>
                            {dr.category}
                        </div>
                    ))
                }
            </div> */}
        </div>

    )
}

export default Doctors