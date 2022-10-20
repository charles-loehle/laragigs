import React from "react";
import { Link, Head, useForm, usePage } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ props }) => {
    // console.log(props);
    return (
        <nav className="px-6 py-4 sm:block">
            {props.auth.user ? (
                // Authenticated user navigation
                <div className="flex justify-between items-center mb-4">
                    <div className="logo flex justify-center sm:justify-start">
                        <a href="/">
                            <img
                                className="w-24"
                                src={`${props.ziggy.url}/storage/images/logo.png`}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="pl-4 sm:flex justify-between items=center">
                        <p className="mr-5">Welcome {props.auth.user.name}</p>

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
                                src={`${props.ziggy.url}/storage/images/logo.png`}
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
        </nav>
    );
};

export default Navbar;
