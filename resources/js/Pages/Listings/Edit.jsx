import React from "react";
import { Head, Link, usePage, useForm } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const { listing } = usePage().props;

    const {
        data,
        setData,
        put,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        company: listing.company || "",
        title: listing.title || "",
        location: listing.location || "",
        email: listing.email || "",
        website: listing.website || "",
        tags: listing.tags || "",
        description: listing.description || "",
        remember: false,
    });

    // console.log(listing);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/listings/${listing.id}`);
    };

    const onDelete = () => {
        if (confirm("Are you sure you want to delete this contact?")) {
            destroy(`/listings/${listing.id}`);
            //console.log("deleted");
        }
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Listing
                </h2>
            }
        >
            <Head title="Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="pb-4">
                                <Link
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    href="/"
                                >
                                    Back To All LIstings
                                </Link>
                            </div>
                            <form
                                onSubmit={handleSubmit}
                                className="max-w-md mx-auto mt-8"
                            >
                                <div className="mb-6">
                                    <label
                                        htmlFor="company"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        value={data.company}
                                        onChange={(e) =>
                                            setData("company", e.target.value)
                                        }
                                        className="border border-gray-400 p-2 w-full"
                                        name="company"
                                    />
                                    {errors.company && (
                                        <div className="text-red-600">
                                            {errors.company}
                                        </div>
                                    )}
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        className="border border-gray-400 p-2 w-full"
                                        name="title"
                                    />
                                    {errors.title && (
                                        <div className="text-red-600">
                                            {errors.title}
                                        </div>
                                    )}
                                    <label
                                        htmlFor="location"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        Job Location
                                    </label>
                                    <input
                                        type="text"
                                        value={data.location}
                                        onChange={(e) =>
                                            setData("location", e.target.value)
                                        }
                                        className="border border-gray-400 p-2 w-full"
                                        name="location"
                                    />
                                    {errors.location && (
                                        <div className="text-red-600">
                                            {errors.location}
                                        </div>
                                    )}
                                    <label
                                        htmlFor="website"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        Application URL
                                    </label>
                                    <input
                                        type="text"
                                        value={data.website}
                                        onChange={(e) =>
                                            setData("website", e.target.value)
                                        }
                                        className="border border-gray-400 p-2 w-full"
                                        name="website"
                                    />
                                    {errors.website && (
                                        <div className="text-red-600">
                                            {errors.website}
                                        </div>
                                    )}
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        email
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="border border-gray-400 p-2 w-full"
                                        name="email"
                                    />
                                    {errors.email && (
                                        <div className="text-red-600">
                                            {errors.email}
                                        </div>
                                    )}
                                    <label
                                        htmlFor="tags"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        Tags (comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.tags}
                                        onChange={(e) =>
                                            setData("tags", e.target.value)
                                        }
                                        className="border border-gray-400 p-2 w-full"
                                        name="tags"
                                    />
                                    {errors.tags && (
                                        <div className="text-red-600">
                                            {errors.tags}
                                        </div>
                                    )}
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        Job Description
                                    </label>
                                    <textarea
                                        className="border border-gray-400 p-2 w-full"
                                        name="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                    {errors.description && (
                                        <div className="text-red-600">
                                            {errors.description}
                                        </div>
                                    )}
                                    <div className="mb-6 mt-6 flex justify-between">
                                        <button
                                            className="text-red-600 focus:outline-none hover:underline"
                                            tabIndex="-1"
                                            type="button"
                                            onClick={onDelete}
                                        >
                                            Delete Listing
                                        </button>
                                        <button
                                            className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
                                            disabled={processing}
                                        >
                                            Update Listing
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
