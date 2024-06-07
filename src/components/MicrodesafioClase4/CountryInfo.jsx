// import { Box } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const CountryInfo = ({ name }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = (countryName) => {
//       const url = `https://restcountries.com/v3.1/name/${countryName}`;
//       axios
//         .get(url)
//         .then((res) => setData(res.data[0].name.common))
//         .catch((error) => console.log(error));
//     };
//     fetchData("Argentina");
//   }, []);
//   console.log(data);
//   return <Box></Box>;
// };

// export default CountryInfo;
