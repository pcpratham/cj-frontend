import './App.css';
import dentist from "./images/dentist.jpg"
import orthology from "./images/orthology.jpg"
import cardiology from "./images/cardiology.jpg"
import dermatology from "./images/Dermatology.webp"
import Doctors from "./pages/Doctors"
import { useState, useEffect } from "react"
import { PiThumbsUp } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import man from "./images/man.jpg";
// import man1 from "./images/man1.jpg"
function App() {
  const [doctorsData, setDoctorsData] = useState([]);

  const [data, setData] = useState([]);

  // async function getDoctors(){

  // }

  const getDoctors = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/doctors`);
      const list = await response.json();
      console.log(list);
      const finalList = list.data;
      console.log("data :- ", finalList);
      setData(finalList);

    }
    catch (err) {
      console.log("error in fetching data", err)
    }
  }
  useEffect(() => {



    getDoctors();
  }, []);

  const handleCategoryFilter = (selectedCategory) => {
    const filteredDoctors = data?.filter(doctor => doctor.category === selectedCategory);
    // Update the state with the filtered doctors
    setDoctorsData(filteredDoctors);
    console.log("category : ", selectedCategory);
    console.log(filteredDoctors);
  };

  return (
    <div>

      <div className='flex flex-col items-center my-8'>
        <h1 className='text-5xl font-[800] '>CareJar Technical Assignment </h1>
        <br />
        <p className='text-3xl font-[500] text-blue-700'>By:- Pratham Choudhary</p>
      </div>

      <div className='ml-10 gap-2 flex flex-col '>
        <h1 className='text-3xl font-[600] text-gray-800'>Book an appointment for an in-clinic consultation</h1>
        <p className='text-xl font-[400] text-gray-600'>Find experienced doctors across all specialties</p>
      </div>
      <div className='flex gap-2 justify-evenly flex-wrap ml-8'>

        <div className='flex flex-col my-4 justify-start items-start '>
          <div><img className='w-[350px] h-[350px] ' src={dentist}></img></div>
          <div className='hover:text-blue-700' onClick={() => handleCategoryFilter('Dentist')}>
            <h2 className='font-[700] text-gray-900 hover:text-blue-700 '>Dentist</h2>
            <p>Teething troubles? Schedule a dental checkup</p>
          </div>
        </div>

        <div className='flex flex-col my-4 justify-start items-start '>
          <div><img className='w-[350px] h-[350px] ' src={cardiology}></img></div>
          <div className='hover:text-blue-700' onClick={() => handleCategoryFilter('Cardiologist')}>
            <h2 className='font-[700] text-gray-900 hover:text-blue-700 '>Cardiologist</h2>
            <p>Feeling pain in heart? visit us to get cured</p>
          </div>
        </div>

        <div className='flex flex-col my-4 justify-start items-start '>
          <div><img className='w-[350px] h-[350px] ' src={dermatology}></img></div>
          <div className='hover:text-blue-700' onClick={() => handleCategoryFilter('Dermatologist')}>
            <h2 className='font-[700] text-gray-900 hover:text-blue-700 '>Dermatologist</h2>
            <p>Get your skin to be lived to the fullest</p>
          </div>
        </div>

        {/* <div className='flex flex-col my-4 justify-start items-start '>
          <div><img className='w-[350px] h-[350px] ' src={orthology}></img></div>
          <div className='hover:text-blue-700' onClick={() => handleCategoryFilter('Orthopedic')}>
            <h2 className='font-[700] text-gray-900 hover:text-blue-700 '>orthologist</h2>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          </div>
        </div> */}


      </div>

      {
        doctorsData.length > 0 ? (
          <div>
            <h1 className='text-3xl ml-8 font-[300] '>List of all doctors is as below :- </h1>
            <div>
              {
                doctorsData.map((doctor) => (
                  <div key={doctor._id} className='flex  border-b py-2 mx-auto w-[70%] items-center justify-evenly  '>

                    <div>
                      {/* image */}
                      <img className='w-[200px] h-[200px] rounded-full' src={man}></img>
                    </div>

                    <div className='flex flex-col gap-2 w-[40%] '>
                      <div className='text-3xl text-blue-500'>Dr. {doctor.name}</div>
                      <div className='text-xl text-gray-400'>{doctor.category}</div>
                      <div className='text-[1.05rem] text-gray-400 '>{doctor.experience} years experience overall</div>
                      <div className='font-bold leading-[0.75rem] '>{doctor.location}</div>
                      <div className='text-xl text-gray-900 font-[200] '>₹ {doctor.price} consultation fee at clinic </div>
                      <div className='w-[100%] h-[1px] bg-gray-500 '></div>
                      <div className='flex items-center gap-3'>
                        <div className='flex gap-1 px-4 py-1 bg-green-500 text-white font-bold justify-center items-center rounded-md  '>
                          <div className='text-[1.25rem]'>
                            <PiThumbsUp />
                          </div>
                          <div>{doctor.rating}%</div>
                        </div>
                        <div className='text-[0.95rem] font-[600]  underline '>{doctor.patients} Patient Stories</div>
                      </div>
                    </div>

                    <div className='flex flex-col items-center justify-center '>
                      <div className='flex items-center justify-center gap-2 font-[500] text-green-600  '>
                        <div>
                          <CiCalendar />
                        </div>
                        <div>
                          Available Today
                        </div>
                      </div>
                      <div className='flex flex-col justify-center items-center px-8 rounded-md text-white bg-blue-400 font-semibold py-1'>
                       <div> Book Appointment</div>
                        <div>No Booking fee</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>) : (
          <div>
            <h1 className='text-3xl ml-8 font-[300] '>Choose Doctor category</h1>
          </div>)
      }

    </div>
  );
}

export default App;
