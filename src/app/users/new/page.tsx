"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUsers } from "@test/context/UsersContext";
import Link from "next/link";

// NewUserPage component definition
const NewUserPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        age: "",
        email: "",
        phone: "",
    });

    const router = useRouter();
    const { addUser } = useUsers();

    /**
     * Handler for input field changes.
     * Updates the corresponding field in the formData state.
     *
     * @param e - The change event from the input field
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /**
     * Handler for form submission.
     * Creates a new user object, adds it to the UsersContext, and redirects to the users list page.
     *
     * @param e - The form submission event
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a new user object
        const newUser = {
            name: formData.name.trim(),
            surname: formData.surname.trim(),
            age: parseInt(formData.age, 10),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
        };

        // Add the new user to the context
        addUser(newUser);

        // Redirect to the users list page
        router.push("/users");
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-6">Create a New User</h1>

            {/* User Creation Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                {/* Surname Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Surname</label>
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                {/* Age Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="0"
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        pattern="^[0-9-+\s()]*$" // Basic phone number pattern
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    Create User
                </button>
            </form>

            {/* Back to Users List Link */}
            <Link
                href="/users"
                className="mt-4 inline-block text-blue-600 hover:underline"
            >
                Back to Users List
            </Link>
        </div>
    );
};

export default NewUserPage;
