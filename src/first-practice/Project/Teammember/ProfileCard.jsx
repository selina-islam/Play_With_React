import React from 'react'

function ProfileCard({name, role, img}) {
  return (
    <div>
      <div className="border border-gray-300 shadow-lg p-6 hover:-translate-y-2 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-green-600 rounded-xl cursor-pointer">
        <img
                                  src={ img}
          alt="Photo"
          className="w-32 h-32 rounded-full mx-auto"
        />
                          <p className="text-gray-500 text-center pt-4">{ name}</p>
                          <p className="text-center font-semibold mb-4">{ role}</p>
      </div>
    </div>
  );
}

export default ProfileCard