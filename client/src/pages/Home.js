import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/gpt">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
          <div className="bg-cover bg-center h-40 w-full" style={{ backgroundImage: "url('https://media.giphy.com/media/Nc2slkPLPdpmWeCUZc/giphy.gif?cid=ecf05e47gccno2mgfcgc4lan6tz0okvxsealwy4s3ub9y8m2&ep=v1_gifs_search&rid=giphy.gif&ct=g')" }}>
          </div>
          <h2 className="text-white text-xl mb-4">Chat to solve </h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </Link>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
        <div className="bg-cover bg-center h-40 w-full" style={{ backgroundImage: "url('https://media.giphy.com/media/2Y7tZMmIpwV6Lnc5QC/giphy.gif?cid=ecf05e470x4sewudaswvwexd73dpg8jlmnqoafq1yr1qpe1e&ep=v1_gifs_search&rid=giphy.gif&ct=g')" }}>
          </div>
          <h2 className="text-white text-xl mb-4">Notes</h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
          <h2 className="text-white text-xl mb-4">Card 3</h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
          <h2 className="text-white text-xl mb-4">Card 4</h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
          <h2 className="text-white text-xl mb-4">Card 5</h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
          <h2 className="text-white text-xl mb-4">Card 6</h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;