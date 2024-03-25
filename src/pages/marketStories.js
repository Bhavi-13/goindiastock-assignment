// pages/marketStories.js
import BaseLayout from "../components/BaseLayout";
import { useEffect, useState } from "react";
import UserData from '../data/UserData.json'

const MarketStories = ({ user }) => {
  const [data, setData] = useState([]);

  return (
    <BaseLayout>
      <h1 className='text-red-400 font-bold text-2xl my-6'>MARKET STORIES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {UserData.map(user => (
              <div key={user.id} className="bg-white shadow-md p-4 rounded-lg w-60">
                <img src={user.marketImage} alt={user.storyName} className="w-56 h-40 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2">{user.storyName}</h2>
                <p className="text-gray-600">{user.storyDesc}</p>
              </div>
            ))}
          
        
      </div>
    </BaseLayout>
  );
};

export default MarketStories;
