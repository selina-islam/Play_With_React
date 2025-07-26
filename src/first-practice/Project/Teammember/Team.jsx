import React from 'react'
import ProfileCard from './ProfileCard';

const members = [
  {
    id: 1,
    name: "Selina Islam",
    img: "https://randomuser.me/api/portraits/women/76.jpg",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Israt Jahan",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    role: "Biologist",
  },
  {
    id: 3,
    name: "Liyana Manir",
    img: "https://randomuser.me/api/portraits/women/19.jpg",
    role: "Accountant",
  },
  {
    id: 4,
    name: "Sanjida Lobna",

    img: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "Architect",
  },
  {
    id: 5,
    name: "Taposhi",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
    role: "Software Designer",
  },
  {
    id: 6,
    name: "Nayeem Ahmed",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    role: "Teacher",
  },
  {
    id: 7,
    name: "Tanveer Ahmed",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
    role: "Bloger",
  },
  {
    id: 8,
    name: "Siyam Ahmed",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    role: "Photographer",
  },
];

function Team() {
  return (
    <div className="p-6 min-h-screen max-w-screen-xl mx-auto">
      <h1 className="text-3xl  text-blue-600 font-black text-center m-7">
        Team Member{" "}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
        {/* profile card */}
        {members.map((member) => (
                <ProfileCard key={member.id} name={member.name } role={ member.role} img={ member.img} />
        ))}
      </div>
    </div>
  );
}

export default Team