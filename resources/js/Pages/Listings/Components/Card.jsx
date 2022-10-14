import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faEnvelope,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link, usePage } from "@inertiajs/inertia-react";

const Card = ({ listing }) => {
    const { url, props } = usePage();
    //console.log(props.auth.user);
    // console.log(listing.tags.split(",").map((item) => item.trim()));

    return (
        <div className="Card bg-gray-50 border border-gray-200 rounded p-6">
            <div className="flex">
                <img
                    className="hidden w-48 mr-6 md:block"
                    src={`${props.ziggy.url}/storage/${listing.logo}`}
                    alt=""
                />
                <div>
                    <h3 className="text-2xl">
                        <Link href={`/listings/${listing.id}`}>
                            {listing.title}
                        </Link>
                    </h3>
                    <div className="text-xl font-bold mb-4">
                        {listing.company}
                    </div>
                    <ul className="flex">
                        {listing.tags.split(",").map((tag, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs"
                            >
                                <a href={`/${tag}`}></a>
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
            {url === "/" ? (
                ""
            ) : (
                <div className="Card-description flex flex-col items-center justify-center text-center">
                    <div className="border border-gray-200 w-full mb-6"></div>
                    <h3 className="text-3xl font-bold mb-4">Job Description</h3>
                    <div className="text-lg space-y-6">
                        <p>{listing.description}</p>
                        <a
                            href="mailto:test@test.com"
                            className="block bg-laravel text-white mt-6 py-2 rounded-xl hover:opacity-80"
                        >
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faEnvelope}
                            />
                            Contact Employer
                        </a>

                        <a
                            href="http://test.com"
                            target="_blank"
                            className="block bg-black text-white py-2 rounded-xl hover:opacity-80"
                        >
                            <FontAwesomeIcon className="mr-2" icon={faGlobe} />
                            Visit Website
                        </a>
                        {props.auth.user && (
                            <Link
                                href={`/listings/${listing.id}/edit`}
                                className="block bg-black text-white py-2 rounded-xl hover:opacity-80"
                            >
                                Edit Listing
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
