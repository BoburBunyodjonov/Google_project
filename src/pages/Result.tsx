// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Result: React.FC = () => {
//   const [searchResults, setSearchResults] = useState<string[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const location = useLocation();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const query = searchParams.get('q');
//     setSearchQuery(query || '');

//     const fetchSearchResults = async (query: string) => {
//       try {
//         const myHeaders = new Headers();
//         myHeaders.append("X-API-KEY", "f90ee28137933da7a3ddf5c3079e8cf69675bc04");
//         myHeaders.append("Content-Type", "application/json");

//         const raw = JSON.stringify({ "q": query });

//         const requestOptions = {
//           method: 'POST',
//           headers: myHeaders,
//           body: raw,
//           redirect: 'follow'
//         };

//         const response = await fetch("https://google.serper.dev/search", requestOptions);
//         const data = await response.json();

//         console.log("API Response:", data); // Log the API response

//         if (data && data.results && Array.isArray(data.results)) {
//           setSearchResults(data.results);
//         } else {
//           console.error("Invalid search results format:", data);
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     };

//     fetchSearchResults(query || '');
//   }, [location.search]);

//   console.log("Search Results:", searchResults);

//   return (
//     <div>
//       <h2>Search Results</h2>
//       <p>Displaying results for: {searchQuery}</p>
//       {searchResults.length > 0 ? (
//         searchResults.map((result, index) => (
//           <p key={index}>{result}</p>
//         ))
//       ) : (
//         <p>No search results found</p>
//       )}
//     </div>
//   );
// };

// export default Result;
