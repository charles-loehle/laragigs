import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard(props) {
    const { url: ziggyUrl } = usePage().props.ziggy;
    const { listings } = props;
    return (
        <AuthenticatedLayout
            ziggyUrl={ziggyUrl}
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 px-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="mb-8 text-3xl font-bold">Listings</h1>
                    <div className="mb-6">
                        <Link
                            href="/listings/create"
                            className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Create Listing
                        </Link>
                    </div>
                    <div className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-x-auto p-6 bg-white border-b border-gray-200">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr className="font-bold text-left">
                                        <th className="px-6 pt-5 pb-4">
                                            Title
                                        </th>
                                        <th className="px-6 pt-5 pb-4">
                                            Location
                                        </th>
                                        <th className="px-6 pt-5 pb-4">
                                            Email
                                        </th>
                                        <th className="px-6 pt-5 pb-4">
                                            Website
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listings.map(
                                        ({
                                            id,
                                            company,
                                            title,
                                            location,
                                            logo,
                                            tags,
                                            website,
                                            email,
                                            description,
                                        }) => (
                                            <tr
                                                key={id}
                                                className="hover:bg-gray-100 focus-within:bg-gray-100"
                                            >
                                                {/* <td className="border-t">
                                                    <Link
                                                        href={`/listings/${id}/edit`}
                                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                    >
                                                        {company}
                                                    </Link>
                                                </td> */}
                                                <td className="border-t">
                                                    <Link
                                                        tabIndex="1"
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                        href={`/listings/${id}/edit`}
                                                    >
                                                        {title}
                                                    </Link>
                                                </td>
                                                <td className="border-t">
                                                    <Link
                                                        tabIndex="-1"
                                                        href={`/listings/${id}/edit`}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        {location}
                                                    </Link>
                                                </td>
                                                <td className="border-t">
                                                    <Link
                                                        tabIndex="-1"
                                                        href={`/listings/${id}/edit`}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        {email}
                                                    </Link>
                                                </td>
                                                <td className="border-t">
                                                    <Link
                                                        tabIndex="-1"
                                                        href={`/listings/${id}/edit`}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        {website}
                                                    </Link>
                                                </td>
                                                {/* <td className="border-t">
                                                    <Link
                                                        tabIndex="-1"
                                                        href={`/listings/${id}/edit`}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        {tags}
                                                    </Link>
                                                </td> */}
                                                {/* <td className="border-t">
                                                    <Link
                                                        tabIndex="-1"
                                                        href={`/listings/${id}/edit`}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        <img
                                                            className="w-1/4"
                                                            src={`${ziggyUrl}/storage/${logo}`}
                                                            alt=""
                                                        />
                                                        
                                                    </Link>
                                                </td> */}
                                                {/* <td className="border-t">
                                                    <Link
                                                        tabIndex="-1"
                                                        href={`/listings/${id}/edit`}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        {description}
                                                    </Link>
                                                </td> */}

                                                <td className="w-px border-t">
                                                    <Link
                                                        tabIndex="-1"
                                                        href={`/listings/${id}/edit`}
                                                        className="flex items-center px-4 focus:outline-none"
                                                    >
                                                        <FontAwesomeIcon
                                                            className="text-gray-700 mx-2"
                                                            icon={
                                                                faChevronRight
                                                            }
                                                        />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                    {listings.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
