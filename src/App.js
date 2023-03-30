import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title)

  //fetchData() sare courses ka data nikal ke le ata hai
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      console.log("showing output.data");
      console.log(output.data);
      setCourses(output.data);
      console.log("printing output");
      
    } catch (error) {
      toast.error("Network failure");
    }
    setLoading(false);
  }
  //abhi function ko call karna hoga, via useEffect;  jab bhi App.js render hoga ,call hoga

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2 min-h-[100vh]">
        <div>
          <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory} />
        </div>
        <div
          className="w-11/12 max-w-[1200px] 
       mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
        >
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        </div>
      </div>
    </div>
  );
}

export default App;


