// import "./index.css";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Komal Kumawat",
    role: "Front-end Developer",
    image: "https://i.pravatar.cc/300?img=47",
    bio: "Komal is a front-end developer with a passion for creating beautiful and functional user interfaces. She has experience working with React, JavaScript, and CSS.",
    online: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=44",
    bio: "Sarah creates clean and intuitive user experiences with a strong focus on modern design and usability.",
    online: true,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "React Developer",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Michael builds responsive React applications and enjoys working with modern frontend technologies.",
    online: false,
  },
  {
    id: 4,
    name: "Himanshu",
    role: "Front-end Developer",
    image: "https://i.pravatar.cc/300?img=13",
    bio: "Himanshu is a front-end developer with a passion for creating beautiful and functional user interfaces. He has experience working with React, JavaScript, and CSS.",
    online: true,
  },
  {
    id: 5,
    name: "Mansi",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=45",
    bio: "Mansi creates clean and intuitive user experiences with a strong focus on modern design and usability.",
    online: true,
  },
  {
    id: 6,
    name: "Nisha",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/300?img=48",
    bio: "Nisha builds responsive backend applications and enjoys working with modern backend technologies.",
    online: false,
  },
];

function UserCard({ user }) {
  const [following, setFollowing] = useState(false);
  const handleFollow = () => {
    setFollowing(!following);
  };


  return (
    <div
      className="
        group
        flex
        h-full
        min-h-[400px]
        flex-col
        items-center
        justify-start
        gap-4
        rounded-2xl
        border
        border-gray-200
        bg-gray-100
        p-6
        text-center
        shadow-sm
        transition-all
        duration-300
        ease-in-out
        hover:-translate-y-5
        hover:scale-[1.02]
        hover:shadow-xl
      "
    >
      <div className="relative">
        <img
          src={user.image}
          alt={`${user.name} profile`}
          className={`
            h-28
            w-28
            rounded-full
            object-cover
            border-4
            border-white
            shadow-md
            transition-all
            duration-300
            ease-in-out
            group-hover:scale-110
            group-hover:rotate-2
            group-hover:shadow-lg
          `}
        />

        <span
          className={`
            absolute
            bottom-1
            right-1
            h-5
            w-5
            rounded-full
            border-4
            border-gray-100
            ${user.online ? "bg-green-500 animate-pulse" : "bg-gray-400"}
          `}
        />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
        {user.name}
      </h3>

      <span className="text-base md:text-lg font-medium text-blue-600">
        {user.role}
      </span>


      <p className="text-sm md:text-base leading-6 text-gray-600">
        {user.bio}
      </p>


      <button
        onClick={handleFollow}
        className={`
          mt-auto
          w-full
          rounded-lg
          px-5
          py-2.5
          font-semibold
          transition-all
          duration-300
          ease-in-out
          hover:scale-105
          active:scale-95
          ${following
            ? "border border-gray-400 bg-transparent text-gray-800 hover:bg-gray-200"
            : "bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg"
          }
        `}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white px-5 py-10">

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          User Profiles
        </h1>

        <p className="mt-2 text-gray-500">
          Connect with people and explore their profiles
        </p>
      </div>

      <div
        className="
          mx-auto
          grid
          max-w-6xl
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;