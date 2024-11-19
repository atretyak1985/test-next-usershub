"use client";

import Link from "next/link";
import { useUsers } from "@test/context/UsersContext";
import { FaUsers, FaUserPlus, FaEdit, FaCheckCircle } from "react-icons/fa";

// HomePage component definition
const HomePage = () => {
    const { users } = useUsers();

    // Calculating statistics based on the users data
    const totalUsers = users.length;
    const averageAge =
        totalUsers > 0
            ? Math.round(users.reduce((sum, user) => sum + user.age, 0) / totalUsers) // Average age calculation
            : 0;// Default to 0 if there are no users

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to UserHub
                    </h1>
                    <p className="text-lg md:text-2xl mb-8">
                        Manage your users efficiently and effortlessly.
                    </p>
                    <Link
                        href="/users/new"
                        className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Statistics Overview */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Our Impact
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                        <div className="flex flex-col items-center">
                            <FaUsers className="text-blue-600 text-4xl mb-2" />
                            <h3 className="text-2xl font-bold">{totalUsers}</h3>
                            <p className="text-gray-700">Total Users</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaUserPlus className="text-green-600 text-4xl mb-2" />
                            <h3 className="text-2xl font-bold">{averageAge}</h3>
                            <p className="text-gray-700">Average Age</p>
                        </div>
                        {/* Add more statistics as needed */}
                    </div>
                </div>
            </section>

            {/* Features Highlight */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                            <FaEdit className="text-blue-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Edit Users</h3>
                            <p className="text-gray-700">
                                Easily update user information with our intuitive interface.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                            <FaCheckCircle className="text-green-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">User Validation</h3>
                            <p className="text-gray-700">
                                Ensure data integrity with built-in validation mechanisms.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                            <FaUsers className="text-purple-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Comprehensive Lists</h3>
                            <p className="text-gray-700">
                                View and manage all your users in one organized place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        What Our Users Say
                    </h2>
                    <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-4">
                                &#34;UserHub has transformed the way I manage my team. It&#39;s intuitive and efficient!&#34;
                            </p>
                            <h4 className="text-lg font-semibold">- Alex Johnson</h4>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-4">
                                &#34;The editing features are fantastic. It saves me so much time!&#34;
                            </p>
                            <h4 className="text-lg font-semibold">- Maria Lee</h4>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-4">
                                &#34;Reliable and easy to use. Highly recommended for any user management needs.&#34;
                            </p>
                            <h4 className="text-lg font-semibold">- David Kim</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
