// import React, { useEffect, useState } from 'react';
// import './covid.css';


// const Covid = () => {
//     const [data,setdata]=useState([]);

//     const getData = async () => {
//         try {
//             const res = await fetch('https://data.covid19india.org/data.json');
//             const actual = await res.json();
//             setdata(actual.statewise[0]);
//             console.log(actual.statewise[0]);
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }

//     useEffect(() => {
//         // getData();
//     })
//     return (
//         <>
//             <section>    <h1>Live</h1>
//                 <h2>COVID-19 CoronaVirus Tracker</h2>
//                 <ul>
//                     <li className="card">
//                         <div className="main">
//                             <div className="inner">
//                                 <p>Our Country</p>
//                                 <p>{data.recovered}</p>
//                             </div>
//                         </div>

//                     </li>
//                     <li className="card">
//                         <div className="main">
//                             <div className="inner">
//                                 <p>Our Country</p>
//                                 <p>India</p>
//                             </div>
//                         </div>

//                     </li>
//                     <li className="card">
//                         <div className="main">
//                             <div className="inner">
//                                 <p>Our Country</p>
//                                 <p>India</p>
//                             </div>
//                         </div>

//                     </li>
//                 </ul>
//             </section>


//         </>
//     )
// }
// export default Covid;