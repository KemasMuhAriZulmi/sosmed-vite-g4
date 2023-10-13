// Profile.js
import React from 'react';

const Profile = () => {
  const userProfile = {
    username: 'johndoe',
    fullName: 'John Doe',
    profileImage: 'profile_image.jpg',
  };

  const postHistory = [
    {
      id: 1,
      title: 'Post Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'post_image1.jpg',
    },
    {
      id: 2,
      title: 'Post Title 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'post_image2.jpg',
    },
    // Add more post history items
    {
      id: 3,
      title: 'Post Title 3',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'post_image3.jpg',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Profile section */}
      <div className="flex mb-8">
        <div className="flex-shrink-0">
          <img className="h-32 w-32 rounded-full" src={userProfile.profileImage} alt="Profile" />
        </div>
        <div className="ml-6">
          <h1 className="text-2xl font-bold">{userProfile.fullName}</h1>
          <p className="text-gray-700">@{userProfile.username}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Post History</h2>
        <ul className="space-y-4">
          {postHistory.map((post) => (
            <li key={post.id}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={post.imageUrl} alt={`Post ${post.id}`} />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">{post.title}</p>
                  <p className="text-gray-700">{post.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
