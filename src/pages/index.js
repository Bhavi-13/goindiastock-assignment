import { useState, useContext } from 'react';
import BaseLayout from '../components/BaseLayout';
import Card from '../components/Card';
import UserData from '../data/UserData.json';
import { SidebarContext } from '../context/SliderContext';

export default function Home() {
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
  const [selectedSection, setSelectedSection] = useState('discussion');

  const handleDiscussionClick = () => {
    setSelectedSection('discussion');
  };

  const handleMarketStoriesClick = () => {
    setSelectedSection('marketStories');
  };

  const discussionVisible = selectedSection === 'discussion';
  const marketStoriesVisible = selectedSection === 'marketStories';

  const leftSectionWidth = isCollapsed ? 'w-4/5' : 'w-full';
  const rightSectionWidth = isCollapsed ? 'w-1/5' : 'w-2/5';

  return (
    <BaseLayout>
      <div className="flex flex-col items-center gap-4">
        {/* Render buttons only for mobile devices */}
        <div className="flex w-full md:hidden">
          <button
            className={`bg-sky-900 w-1/2 m-0 text-white font-semibold py-2 ${discussionVisible ? 'bg-sky-950 border-b-2 border-red-400' : ''}`}
            onClick={handleDiscussionClick}
          >
            Discussion Forum
          </button>
          <button
            className={`bg-sky-900 w-1/2 text-white py-2 font-semibold ${marketStoriesVisible ? 'bg-sky-950 border-b-2 border-red-400' : ''}`}
            onClick={handleMarketStoriesClick}
          >
            Market Stories
          </button>
        </div>

         {/* Render both sections for desktop devices */}
         <div className="hidden md:flex flex-col gap-20 md:flex-row">
          <div className={leftSectionWidth}>
            <div>
              <h1 className="text-red-400 font-bold text-2xl my-4">DISCUSSION FORUM</h1>
              {UserData.map(user => (
                <Card key={user.id} user={user} />
              ))}
            </div>
          </div>
          <div className={rightSectionWidth}>
            <div>
              <h1 className="text-red-400 font-bold text-2xl my-1">MARKET STORIES</h1>
              <div className="flex flex-col gap-1">
                {UserData.map((item) => (
                  <div key={item.id} className="bg-white shadow-md p-4 rounded-lg w-72">
                    <img src={item.marketImage} alt={item.storyName} className="h-28 w-72 mb-2" />
                    <h2 className="text-sm font-semibold">{item.storyName}</h2>
                    <p className="text-gray-600 text-[10px]">{item.storyDesc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Render only one section for mobile devices */}
        <div className="flex flex-col gap-4 w-full md:hidden">
          {discussionVisible && (
            <div className="w-full">
              <h1 className="text-red-400 font-bold text-2xl my-1">DISCUSSION FORUM</h1>
              {UserData.map(user => (
                <Card key={user.id} user={user} />
              ))}
            </div>
          )}
          {marketStoriesVisible && (
            <div className="w-full">
              <h1 className="text-red-400 font-bold text-2xl my-1">MARKET STORIES</h1>
              <div className="flex flex-col gap-5">
                {UserData.map((item) => (
                  <div key={item.id} className="bg-white shadow-md p-4 rounded-lg">
                    <img src={item.marketImage} alt={item.storyName} className="h-36 w-72 object-cover m-auto mb-2" />
                    <h2 className="text-sm font-semibold text-center">{item.storyName}</h2>
                    <p className="text-gray-600 text-[10px]">{item.storyDesc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
}
