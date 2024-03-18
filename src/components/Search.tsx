import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";


const Search: React.FC = () => {
  // const navigate = useNavigate();

  // const [searchQuery, setSearchQuery] = useState<string>('');

  // const handleSearch = () => {
  //   const requestOptions: RequestInit = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-API-KEY': 'f90ee28137933da7a3ddf5c3079e8cf69675bc04'
  //     },
  //     body: JSON.stringify({ q: searchQuery })
  //   };

  //   fetch("https://google.serper.dev/search", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.error('Error:', error));
  //     navigate("/result");

  //     navigate(`/result?q=${encodeURIComponent(searchQuery)}`);

  // };


  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.location.href = searchUrl;
  };

  

  return (
    <div>
      

      <form onSubmit={handleSearch}  className="w-full flex justify-between items-center relative mt-3">
            <SearchIcon className="h-5 w-5 mr-2 text-gray-600 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="py-3 px-12 w-full rounded-2xl outline-none shadow-lg text-gray-600 placeholder-gray-600"
                type="text"
                placeholder="Search Google or type a URL"
            />
            <div className="absolute right-4 top-3 flex items-center space-x-4">
              <MicIcon className="h-5 w-5 text-gray-600 cursor-pointer" />
              <AddAPhotoIcon className="h-5 w-5 mr-2 text-gray-600 cursor-pointer" />
            </div>

            <button type="submit" className="hidden">Search</button>
            
          </form>
    </div>
  );
};

export default Search;
