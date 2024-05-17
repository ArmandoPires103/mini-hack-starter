import {useState, useEffect} from "react";



 const SchoolSearch = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const [results, setResults] = useState([]);
 const [filteredData, setFilteredData] = useState([])


 useEffect(() => {
   fetch("https://data.cityofnewyork.us/resource/ffnc-f3aa.json?$limit=1500")
     .then(res => res.json())
     .then(data => {
      setResults(data)
      setFilteredData(data)
     })
     .catch(err => console.error("Error on fetch", err))
 }, [])



  const handleSearchChange = async (e) => {
    const query = await e.target.value.toLowerCase()
     setSearchTerm(query)
      const filtered = await results.filter(item => item.school?.toLowerCase().includes(query.toLowerCase()) 
        )
        setFilteredData(filtered)
    }

  
 
  return(
    <div className="search-container p-4">
    <h1 className="text-center ">Find a Individual School</h1>
       <input 
         type="text"
         value={searchTerm}
         onChange={handleSearchChange}
         placeholder="Search for a School..."
         className="border border-gray-300 p-2 w-full mb-4"
       />
       <div>
        <ul>
          {filteredData.map((school, id) => ( 
            <li key={id}>
              <h2>{school.school}</h2>
              <p>Principal:{school.principal}</p>
              <p>Grade: {school._overall_grade}</p>
            </li>
          ))}
        </ul>
       </div>
    </div>
  )
}


export default SchoolSearch;