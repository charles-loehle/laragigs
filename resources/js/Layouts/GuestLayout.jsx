import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children, url }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link
                    className="underline text-sm text-red-500 hover:text-red-600"
                    href="/"
                >
                    <img
                        className="w-24 mb-2"
                        src={`${url}/storage/images/logo.png`}
                        alt="logo"
                    />
                    Back to Listings
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
