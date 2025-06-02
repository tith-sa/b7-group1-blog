import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type User = {
  username: string;
  email: string;
  bio?: string;
  profilePicture?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const apiUrl = `http://localhost:1337/api/users/${id}?populate=*`; // Replace with your actual API URL

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(response.data as User);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  const profileImage =
    user?.profilePicture?.data?.attributes?.url ||
    "https://via.placeholder.com/64";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="flex items-center mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          {user && (
            <div>
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
