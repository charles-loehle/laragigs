import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRightToBracket,
    faUserPlus,
    faEnvelope,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";

// const Show = ({ auth, listing, ziggy: { url } }) => {
const Show = (props) => {
    const {
        auth,
        listing,
        ziggy: { url },
    } = props;
    return (
        <>
            <Head title="Single Listing" />
            {/* <nav className="px-6 py-4 sm:block">
                {auth.user ? (
                    // Authenticated user navigation
                    <div className="flex justify-between items-center mb-4">
                        <div className="logo flex justify-center sm:justify-start">
                            <Link href="/">
                                <img
                                    className="w-24"
                                    // src="https://picsum.photos/200/200"
                                    src={`${url}/storage/images/logo.png`}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="pl-4 sm:flex justify-between items=center">
                            <p className="mr-5">Welcome {auth.user.name}</p>

                            <Link
                                href={route("dashboard")}
                                className="block sm:inline  text-black underline"
                            >
                                Dashboard
                            </Link>
                        </div>
                    </div>
                ) : (
                    // Non-authenticated user nav
                    <div className="flex justify-between items-center mb-4">
                        <div className="logo flex justify-center sm:justify-start">
                            <a href="/">
                                <img
                                    className="w-24"
                                    // src="https://picsum.photos/200/200"
                                    src={`${url}/storage/images/logo.png`}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="pl-4">
                            <Link
                                href={route("login")}
                                className="block sm:inline font-semibold text-black underline"
                            >
                                <FontAwesomeIcon
                                    className="mr-1"
                                    icon={faArrowRightToBracket}
                                />
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="block sm:inline sm:ml-4 font-semibold text-black underline"
                            >
                                <FontAwesomeIcon
                                    className="mr-1"
                                    icon={faUserPlus}
                                />
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </nav> */}
            <Navbar props={props} />
            <div className="Show flex justify-center mx-4">
                <div className="p-6">
                    <Card listing={listing} />
                    <div className="Show-links pb-6 md:flex justify-between md:space-x-4">
                        <a
                            href={`mailto:${listing.email}`}
                            className="block md:w-1/2 text-center bg-laravelRed text-white mt-3 py-2 px-5 rounded-xl hover:opacity-80"
                        >
                            <FontAwesomeIcon
                                className="text-white mr-2"
                                icon={faEnvelope}
                            />
                            Contact Employer
                        </a>
                        <a
                            href={listing.website}
                            className="block md:w-1/2 text-center bg-black text-white mt-3 py-2 px-5  rounded-xl hover:opacity-80"
                        >
                            <FontAwesomeIcon
                                className="text-white mr-2"
                                icon={faGlobe}
                            />
                            Visit Website
                        </a>
                    </div>
                </div>
            </div>

            {/* <footer className="w-full flex items-center justify-start font-bold bg-red-500 text-white h-24 mt-24 opacity-90 md:justify-center">
                <p className="text-black ml-2">
                    Copyright &copy; 2022, All Rights reserved
                </p>
            </footer> */}
        </>
    );
};

export default Show;
