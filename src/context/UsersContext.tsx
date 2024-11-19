// src/context/UsersContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import initialUsers from "@test/data/users.json";
import { User } from "@test/types/user";
import { v4 as uuidv4 } from "uuid";

interface UsersContextType {
    users: User[];
    addUser: (user: Omit<User, "id">) => void;
    editUser: (updatedUser: User) => void;
    deleteUser: (id: string) => void; // If implementing deletion
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load users from localStorage or use initialUsers
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            setUsers(initialUsers);
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users, isLoaded]);

    const addUser = (user: Omit<User, "id">) => {
        const newUser: User = { ...user, id: uuidv4() };
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    const editUser = (updatedUser: User) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
    };

    const deleteUser = (id: string) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };

    if (!isLoaded) {
        // Optionally, return a loading indicator
        return <div className="p-4">Loading...</div>;
    }

    return (
        <UsersContext.Provider value={{ users, addUser, editUser, deleteUser }}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = (): UsersContextType => {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("useUsers must be used within a UsersProvider");
    }
    return context;
};
