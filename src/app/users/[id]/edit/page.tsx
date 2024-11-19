"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUsers } from "@test/context/UsersContext";
import { useParams } from "next/navigation";
import Link from "next/link";

// EditUserPage component definition
const EditUserPage = () => {
    const router = useRouter();
    const params = useParams(); // To get the dynamic [id] parameter
    const { users, editUser } = useUsers();
    const userId = params?.id;

    const userToEdit = users.find((user) => user.id === userId);

    // If user is not found, you can handle it (redirect or show an error)
    useEffect(() => {
        if (!userToEdit) {
            // Redirect to users list if user not found
            router.push("/users");
        }
    }, [userToEdit, router]);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        age: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        if (userToEdit) {
            setFormData({
                name: userToEdit.name,
                surname: userToEdit.surname,
                age: userToEdit.age.toString(),
                email: userToEdit.email,
                phone: userToEdit.phone,
            });
        }
    }, [userToEdit]);

    /**
     * Handler for input field changes.
     * Updates the corresponding field in the formData state based on the input's name attribute.
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
     * Creates an updated user object, updates it in the UsersContext, and redirects to the Users List page.
     *
     * @param e - The form submission event
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!userToEdit) return;

        // Create an updated user object
        const updatedUser = {
            id: userToEdit.id, // Preserve the original id
            name: formData.name.trim(),
            surname: formData.surname.trim(),
            age: parseInt(formData.age, 10),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
        };

        // Update the user in the context
        editUser(updatedUser);

        // Redirect to the users list page
        router.push("/users");
    };

    if (!userToEdit) {
        // Optionally, show a loading indicator or a message
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className="p-4 max-w-lg mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-6">Edit User</h1>

            {/* Edit User Form */}
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
                    className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                    Save Changes
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

export default EditUserPage;
