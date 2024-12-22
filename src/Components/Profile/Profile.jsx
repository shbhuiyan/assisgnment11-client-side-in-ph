/* eslint-disable react/prop-types */

const Profile = ({user}) => {


    const { displayName, email, photoURL } = user;

    return (
        <div className="text-center space-y-4 mb-4 flex flex-col justify-center items-center">
        <img
          className="max-w-20 h-20 ring-4 ring-blue-500 rounded-xl"
          src={photoURL}
          alt=""
        />
        <h1 className="text-xl font-semibold text-blue-600">{displayName}</h1>
        <p className="text-base font-medium text-gray-600">{email}</p>
        </div>
    );
};

export default Profile;