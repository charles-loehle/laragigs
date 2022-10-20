import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faEnvelope,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link, usePage } from "@inertiajs/inertia-react";

const Card = ({ listing, setTagName }) => {
    const { url, props } = usePage();
    const { location } = usePage().props.ziggy;

    return (
        <div className="Card bg-gray-50 border border-gray-200 rounded p-6">
            {url === "/" ? (
                // <div className="flex flex-col items-center justify-center text-center">
                //     <div className="border border-gray-200 w-full mb-6"></div>
                //     <h3 className="text-3xl font-bold mb-4">
                //         Home Page!!! Job Description
                //     </h3>
                //     <div className="text-lg space-y-6">
                //         <p>{listing.description}</p>
                //         <a
                //             href="mailto:test@test.com"
                //             className="block bg-laravel text-white mt-6 py-2 rounded-xl hover:opacity-80"
                //         >
                //             <FontAwesomeIcon
                //                 className="mr-2"
                //                 icon={faEnvelope}
                //             />
                //             Contact Employer
                //         </a>

                //         <a
                //             href="http://test.com"
                //             target="_blank"
                //             className="block bg-black text-white py-2 rounded-xl hover:opacity-80"
                //         >
                //             <FontAwesomeIcon className="mr-2" icon={faGlobe} />
                //             Visit Website
                //         </a>
                //         {props.auth.user && (
                //             <Link
                //                 href={`/listings/${listing.id}/edit`}
                //                 className="block bg-black text-white py-2 rounded-xl hover:opacity-80"
                //             >
                //                 Edit Listing
                //             </Link>
                //         )}
                //     </div>
                // </div>

                <div
                    key={listing.id}
                    className="Card bg-gray-50 border border-gray-200 rounded p-6"
                >
                    <div className="sm:flex">
                        <Link href={`/listings/${listing.id}`}>
                            {listing.logo ? (
                                <img
                                    className="hidden w-48 mr-6 md:block"
                                    src={
                                        listing.logo !== null
                                            ? `${location}/storage/${listing.logo}`
                                            : ""
                                    }
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="hidden w-48 mr-6 md:block"
                                    src={`${location}/storage/images/no-img-available.jpg`}
                                    alt=""
                                />
                            )}
                        </Link>
                        <div>
                            <h3 className="text-2xl">
                                <Link href={`/listings/${listing.id}`}>
                                    {listing.title}
                                </Link>
                            </h3>
                            <div className="text-xl font-bold mb-4">
                                {listing.company}
                            </div>
                            <ul className="sm:flex">
                                {listing.tags.split(",").map((tag, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 my-2 mr-1 text-xs"
                                    >
                                        <button
                                            onClick={() =>
                                                setTagName(`${tag.trim()}`)
                                            }
                                        >
                                            {tag}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-lg mt-4">
                                <FontAwesomeIcon
                                    className="mr-2"
                                    icon={faLocationDot}
                                />
                                {listing.location}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="Card flex">
                    {listing.logo ? (
                        <img
                            className="hidden w-48 mr-6 md:block"
                            src={
                                listing.logo !== null
                                    ? `${props.ziggy.url}/storage/${listing.logo}`
                                    : ""
                            }
                            alt=""
                        />
                    ) : (
                        <img
                            className="hidden w-48 mr-6 md:block"
                            src={`${props.ziggy.url}/storage/images/no-img-available.jpg`}
                            alt=""
                        />
                    )}
                    <div>
                        <h3 className="text-2xl">{listing.title}</h3>
                        <div className="text-xl font-bold mb-4">
                            {listing.company}
                        </div>
                        <ul className="flex">
                            {listing.tags.split(",").map((tag, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <div className="text-lg mt-4">
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faLocationDot}
                            />
                            {listing.location}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
