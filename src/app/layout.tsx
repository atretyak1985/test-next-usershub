import type { Metadata } from "next";
import { UsersProvider } from "@test/context/UsersContext";
import "./globals.css";
import Link from "next/link";

export const metadata:Metadata = {
  title: "My Next.js App",
  description: "App Router with Next.js, TailwindCSS, and TypeScript",
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-gray-100 text-gray-900">
        <UsersProvider>
            {/* Header */}
            <header className="p-4 bg-blue-600 text-white">
                <nav className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        My App
                    </Link>
                    <div className="space-x-4">
                        <Link
                            href="/"
                            className="px-3 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg"
                        >
                            Home
                        </Link>
                        <Link
                            href="/users"
                            className="px-3 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg"
                        >
                            Users List
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="p-4 container mx-auto">{children}</main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; {new Date().getFullYear()} UserHub. All rights reserved.</p>
                    <div className="mt-4 space-x-4">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <Link href="/users" className="hover:underline">
                            Users List
                        </Link>
                        <Link href="/users/new" className="hover:underline">
                            Add User
                        </Link>
                    </div>
                </div>
            </footer>
        </UsersProvider>
        </body>
        </html>
    );
}
