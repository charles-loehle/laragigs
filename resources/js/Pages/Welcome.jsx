import { React, useEffect, useState, useRef } from "react";
import { Link, Head, useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faUserPlus,
    faCheck,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Listings/Components/Card";
import Navbar from "./Listings/Components/Navbar";

export default function Welcome(props) {
    const { listings } = props;
    // const [listingName, setListingName] = useState("");
    const { data, setData } = useForm({ listingName: "" });
    const [tagName, setTagName] = useState("");
    const myRef = useRef(data.listingName);
    const { flash } = usePage().props;
    const { location } = usePage().props.ziggy;
    const [visible, setVisible] = useState(true);

    const handleChange = (e) => {
        setData("listingName", e.target.value);
    };

    useEffect(() => {
        setVisible(true);
    }, [flash]);

    // Reset search params
    const resetSearch = () => {
        Inertia.get("/");
    };

    // Tag search
    useEffect(() => {
        if (tagName.length > 0) {
            Inertia.get(
                "/",
                { tag: tagName },
                { preserveState: true, replace: true }
            );
        }
    }, [tagName]);

    // Search bar
    useEffect(() => {
        if (data.listingName !== myRef.current) {
            // console.log("Search triggered!");
            Inertia.get(
                "/",
                { search: data.listingName },
                {
                    preserveState: true,
                    replace: true,
                }
            );
            // console.log("listingName changed!");
        }
        // // clear search params
        // if (data.listingName.length === 0) {
        //     // console.log("its empty!");
        //     // get url
        //     resetSearch();
        // }
    }, [data.listingName, myRef]);

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen sm:items-center sm:pt-0">
                {/* <nav className="px-6 py-4 sm:block">
                    {props.auth.user ? (
                        // Authenticated user navigation
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
                            <div className="pl-4 sm:flex justify-between items=center">
                                <p className="mr-5">
                                    Welcome {props.auth.user.name}
                                </p>

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
                </nav> */}
                <Navbar props={props} />

                <section className="hero p-4 relative sm:h-72 bg-red-400 flex flex-col justify-center align-center text-center space-y-4 mb-4">
                    <div
                        className="absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url(${props.ziggy.url}/storage/images/laravel-logo.png)`,
                        }}
                    ></div>
                    <div className="z-10">
                        <h1 className="text-4xl sm:text-6xl font-bold uppercase text-white">
                            LARA<span className="text-black">GIGS</span>
                        </h1>
                        <p className="text-2xl text-gray-200 font-bold my-4">
                            Find or post Laravel jobs & projects
                        </p>
                        <div>
                            <Link
                                href="/register"
                                className="text-xs sm:text-base inline-block border-2 border-white text-white py-2 px-4 rounded-xl uppercase my-2 hover:text-black hover:border-black"
                            >
                                Sign Up to List a Gig
                            </Link>
                        </div>
                    </div>
                </section>

                <main className="main-content max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="search p-4">
                        <input
                            className="h-10 border px-2 mr-2 rounded-lg"
                            placeholder="Search..."
                            value={data.listingName}
                            onChange={handleChange}
                        />
                        <button
                            className="mt-4 sm:mt-0 h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
                            onClick={resetSearch}
                        >
                            Reset
                        </button>
                    </div>
                    {flash.message && visible && (
                        <div className="my-8 flex items-center justify-between bg-green-500 rounded max-w-xs">
                            <div className="flex items-center">
                                <div className="py-4 text-white text-sm font-medium">
                                    <FontAwesomeIcon
                                        className="mx-2"
                                        icon={faCheck}
                                    />
                                    {flash.message}
                                </div>
                            </div>
                            <button
                                onClick={() => setVisible(false)}
                                className="focus:outline-none group mr-2 p-2"
                            >
                                <FontAwesomeIcon
                                    className="text-green-700 mx-2"
                                    icon={faXmark}
                                />
                            </button>
                        </div>
                    )}

                    <div className="Cards lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0 mx-4">
                        {listings.data.map((listing) => (
                            <Card
                                key={listing.id}
                                listing={listing}
                                setTagName={setTagName}
                            />
                            // <div
                            //     key={listing.id}
                            //     className="Card bg-gray-50 border border-gray-200 rounded p-6"
                            // >
                            //     <div className="sm:flex">
                            //         <Link href={`/listings/${listing.id}`}>
                            //             {listing.logo ? (
                            //                 <img
                            //                     className="hidden w-48 mr-6 md:block"
                            //                     src={
                            //                         listing.logo !== null
                            //                             ? `${location}/storage/${listing.logo}`
                            //                             : ""
                            //                     }
                            //                     alt=""
                            //                 />
                            //             ) : (
                            //                 <img
                            //                     className="hidden w-48 mr-6 md:block"
                            //                     src={`${location}/storage/images/no-img-available.jpg`}
                            //                     alt=""
                            //                 />
                            //             )}
                            //         </Link>
                            //         <div>
                            //             <h3 className="text-2xl">
                            //                 <Link
                            //                     href={`/listings/${listing.id}`}
                            //                 >
                            //                     {listing.title}
                            //                 </Link>
                            //             </h3>
                            //             <div className="text-xl font-bold mb-4">
                            //                 {listing.company}
                            //             </div>
                            //             <ul className="sm:flex">
                            //                 {listing.tags
                            //                     .split(",")
                            //                     .map((tag, index) => (
                            //                         <li
                            //                             key={index}
                            //                             className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 my-2 mr-1 text-xs"
                            //                         >
                            //                             <button
                            //                                 onClick={() =>
                            //                                     setTagName(
                            //                                         `${tag.trim()}`
                            //                                     )
                            //                                 }
                            //                             >
                            //                                 {tag}
                            //                             </button>
                            //                         </li>
                            //                     ))}
                            //             </ul>
                            //             <div className="text-lg mt-4">
                            //                 <FontAwesomeIcon
                            //                     className="mr-2"
                            //                     icon={faLocationDot}
                            //                 />
                            //                 {listing.location}
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="mt-6">
                        {listings.links.map((link, key) => (
                            <Link key={key} href={link.url}>
                                {link.label === "&laquo; Previous"
                                    ? "<< Previous"
                                    : link.label === "Next &raquo;"
                                    ? "Next >>"
                                    : link.label}
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
