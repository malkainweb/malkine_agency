// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [data, setdata] = useState<any>(null);
//   const fecth_now = async () => {
//     axios
//       .get("https://hovnstudios.com", {
//         method: "GET",
//         proxy: {
//           host: "proxy-server.scraperapi.com",
//           port: 8001,
//           auth: {
//             username: "scraperapi",
//             password: "9f43241084443c8a60fb9df6642e01c2",
//           },
//           protocol: "http",
//         },
//       })
//       .then((res) => {
//         setdata(res.data);
//       })
//       .catch(console.error);
//     //   return setdata(response.data);
//   };

//   fecth_now();
//   return (
//     <div>
//       <h1>Content from Malkain</h1>
//       <div dangerouslySetInnerHTML={{ __html: data }} />
//     </div>
//   );
// };

// export default FetchData;
