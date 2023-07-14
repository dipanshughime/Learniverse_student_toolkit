import React from 'react';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/home';
import Login from '../Pages/Login';

function Navbar() {
  return (

    <BrowserRouter>
    <Link to = "/" >
        <span>
            Lea
        </span>
    </Link>

    
    </BrowserRouter>

//   <BrowserRouter>
//     <div className="min-h-screen bg-rgb(7,12,34)">
//     <header className="w-full h-20 rounded flex justify-between items-center sm:px-8 px-4 py-4 bg-rgb(7,12,34)">
//       <Link to="/" className="flex items-center relative">
//         <span className="absolute left-0 mt-5 text-3xl font-bold text-indigo-400 z-10">
//           Learniverse
//         </span>
//         <img
//           src="https://i.gifer.com/yy3.gif"
//           alt="logo"
//           className="w-60 ml-6 z-0"
//         />
//       </Link>

//       <Link to="/login" className="font-medium bg-indigo-500 hover:bg-indigo-600 text-white mt-4 px-4 py-2 rounded-md">
//         Login
//       </Link>
//     </header>

//     <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/login" element={<Login/>} />
//       </Routes>
//     </main>
// </div>
//   </BrowserRouter>

  );
}

export default Navbar;
