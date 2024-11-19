"use client";

import { useUsers } from "@test/context/UsersContext";
import Link from "next/link";

// UsersPage component definition
const UsersPage = () => {
    const { users, deleteUser } = useUsers();

    return (
        <div className="p-4">
            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-4">List of Users</h1>

            {/* Users List */}
            <ul className="space-y-2 mb-4">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="border p-4 rounded-lg shadow-sm bg-white flex justify-between items-center"
                    >
                        {/* User Information Section */}
                        <div>
                            <p className="font-medium">
                                {user.name} {user.surname}
                            </p>
                            <p>Age: {user.age}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </div>

                        {/* Action Buttons Section */}
                        <div className="flex space-x-2">
                            {/* Edit Button */}
                            <Link
                                href={`/users/${user.id}/edit`}
                                className="px-3 py-1 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600"
                            >
                                Edit
                            </Link>

                            {/* Delete Button */}
                            <button
                                onClick={() => deleteUser(user.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Action Links Section */}
            <div className="flex space-x-4">
                {/* Add New User Button */}
                <Link
                    href="/users/new"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
                >
                    Add New User
                </Link>

                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default UsersPage;
