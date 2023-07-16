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
          <p className="text-gray-300">"Here is Your all-knowing sidekick for problem-solving adventures!!Solving everything, one question at a time.".</p>
        </div>
        </Link>
        <Link to="/notion">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
        <div className="bg-cover bg-center h-40 w-full" style={{ backgroundImage: "url('https://media.giphy.com/media/2Y7tZMmIpwV6Lnc5QC/giphy.gif?cid=ecf05e470x4sewudaswvwexd73dpg8jlmnqoafq1yr1qpe1e&ep=v1_gifs_search&rid=giphy.gif&ct=g')" }}>
          </div>
          <h2 className="text-white text-xl mb-4">Notes</h2>
          <p className="text-gray-300">"Transforming thoughts into organized brilliance, note by note.".</p>
        </div>
        </Link>
     
        <Link to="/videos"> 
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
        <div className="bg-cover bg-center h-40 w-full" style={{ backgroundImage: "url('https://media.giphy.com/media/RguB9vdKYABsR43G36/giphy.gif?cid=ecf05e47enclm2xaffux49id7pufgl9ym09v62adsymk474i&ep=v1_gifs_search&rid=giphy.gif&ct=g')" }}>
          </div>
          <h2 className="text-white text-xl mb-4">Learn</h2>
          <p className="text-gray-300">Unlocking Knowledge, One Click at a Time: Your Online Teaching Video Oasis!.</p>
        </div>
        </Link>
        <Link to="/sumz"> 
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
        <div className="bg-cover bg-center h-40 w-full" style={{ backgroundImage: "url('http://panoviewimaging.com/tumblr/icos_regrow_1024.gif')" }}>
        </div>
          <h2 className="text-white text-xl mb-4">Summarizer</h2>
          <p className="text-gray-300">Say More with Less: Elevate Your Ideas with our Summarizer!</p>
        </div>
       
        </Link>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
        <div className="bg-cover bg-center h-40 w-full" style={{ backgroundImage: "url('https://64.media.tumblr.com/3685a1fda250bab2ff455e1bceba5e39/tumblr_n9ut0w83a01txe8seo1_500.gifv')" }}>
        </div>
          <h2 className="text-white text-xl mb-4">Exam Generator</h2>
          <p className="text-gray-300">Master Your Exams with Ease: Unleash the Power of our Exam Generator!</p>
        </div>
        <Link to="/content">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mx-4 my-2">
        <div className="bg-cover bg-center h-40 w-full" style={{ backgroundImage: "url('https://media4.giphy.com/media/3oriNYvVkCgIhSIKic/giphy.gif?cid=ecf05e471vwnzwi7g17whw9nvtwwvsmeqa6750zpv5r8xunk&ep=v1_gifs_search&rid=giphy.gif&ct=g')" }}>
        </div>
          <h2 className="text-white text-xl mb-4">Content Writing</h2>
          <p className="text-gray-300">Crafting Words that Captivate: Your Content Writing Destination!</p>
        </div>
        </Link>

        
      </div>
    </div>
  );
}

export default Home;