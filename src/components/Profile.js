import React, { useContext } from 'react';

import avatarImg from '../assets/avatar.jpeg';
import { AuthContext } from '../Context/UserContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <section className="bg-gray-100 text-gray-900 min-h-screen">
            
                <div className="flex justify-center mt-20">
                    <div className="max-w-lg p-8 sm:flex sm:space-x-6 bg-gray-100 text-gray-900">
                        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex flex-wrap gap-x-2 gap-y-2">
                                    <div className="relative flex-shrink-0">
                                        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-600 border rounded-full text-gray-100 border-gray-900"></span>
                                        <img
                                            src={
                                                user?.photoURL
                                                    ? user.photoURL
                                                    : avatarImg
                                            }
                                            referrerPolicy="no-referrer"
                                            alt=""
                                            className=" border w-32 h-32 rounded-full bg-gray-500 border-gray-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold">
                                    {user?.displayName
                                        ? user.displayName
                                        : 'Name Not Available'}
                                </h2>
                            </div>
                            <div className="space-y-1">
                                <span className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        aria-label="Email address"
                                        className="w-4 h-4">
                                        <path
                                            fill="currentColor"
                                            d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                    </svg>
                                    <span className="text-gray-700">
                                        {user?.email
                                            ? user.email
                                            : 'Email not available'}
                                    </span>
                                </span>
                                <span className="flex items-center space-x-2 w-full">
                                    <span className="text-gray-400 text-small">
                                        {' '}
                                        Email Status:{' '}
                                        <span className="text-green-400">
                                            {user?.emailVerified ? (
                                                <>
                                                    <span className="text-green-400">
                                                        Verified
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="text-red-400">
                                                        Not Verified
                                                    </span>
                                                </>
                                            )}
                                        </span>
                                    </span>
                                </span>
                                <span className="flex items-center space-x-2 w-full">
                                    <span className="text-gray-400 text-small w-full">
                                        {' '}
                                        ID:{' '}
                                        {user?.uid
                                            ? user.uid
                                            : 'UID not available'}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Profile;
