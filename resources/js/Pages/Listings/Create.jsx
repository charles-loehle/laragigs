import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, useForm, usePage } from "@inertiajs/inertia-react";

const Create = (props) => {
    const { data, setData, post, processing, errors, progress } = useForm({
        company: "",
        title: "",
        location: "",
        email: "",
        website: "",
        tags: "",
        description: "",
        logo: null,
    });
    const { url: ziggyUrl } = usePage().props.ziggy;

    //console.log(data);

    function handleSubmit(e) {
        e.preventDefault();
        post("/listings/create", data);
    }
    return (
        <AuthenticatedLayout
            ziggyUrl={ziggyUrl}
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Listing
                </h2>
            }
        >
            <Head title="Create" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {/* <h1 className="mb-8 text-3xl font-bold">
                                Create Listing
                            </h1> */}
                            {/* <div className="pb-4">
                                <Link
                                    className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    href="/dashboard"
                                >
                                    Manage Listings
                                </Link>
                            </div> */}
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
                                        className="border border-gray-400 p-2 w-full
                                        focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm"
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
                                        className="border border-gray-400 p-2 w-full
                                        focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm"
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
                                        className="border border-gray-400 p-2 w-full
                                        focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm"
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
                                        className="border border-gray-400 p-2 w-full
                                        focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm"
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
                                        className="border border-gray-400 p-2 w-full
                                        focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm"
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
                                        className="border border-gray-400 p-2 w-full
                                        focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        name="tags"
                                    />
                                    {errors.tags && (
                                        <div className="text-red-600">
                                            {errors.tags}
                                        </div>
                                    )}
                                    <label
                                        htmlFor="logo"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        Logo Upload
                                    </label>
                                    <input
                                        type="file"
                                        // value={data.logo}
                                        onChange={(e) =>
                                            setData("logo", e.target.files[0])
                                        }
                                        className="border border-gray-400 p-2 w-full
                                        focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        name="logo"
                                    />
                                    {progress && (
                                        <progress
                                            value={progress.percentage}
                                            max="100"
                                        >
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                    {errors.file && (
                                        <div className="text-red-600">
                                            {errors.file}
                                        </div>
                                    )}
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 uppercase font-bold text-xs text-gray-700 mt-6"
                                    >
                                        Job Description
                                    </label>
                                    <textarea
                                        className="border border-gray-400 p-2 w-full
                                        focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm"
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
                                    <div className="mb-6 mt-6">
                                        <button
                                            className="inline-flex items-center rounded-md border border-transparent bg-laravelRed px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                            disabled={processing}
                                        >
                                            Submit
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

export default Create;
