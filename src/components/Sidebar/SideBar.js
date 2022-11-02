import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaSpotify } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { HiNewspaper } from "react-icons/hi";
import { SiDeliveroo } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { BsSignal, BsBookHalf, BsFillChatDotsFill, BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Logo from '../../assets/img/logo.png'

const routes = [
    {
        path: "/",
        name: "Home",
        icon: <FaHome />,
    },
    {
        path: "/clientportal",
        name: "Client's Portal",
        icon: <FaUser />,
    },
    {
        path: "/coursetracker",
        name: "Course Tracker",
        icon: <MdCastForEducation />,
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        icon: <BiWorld />,
    },
    {
        path: "/instagramclone",
        name: "Instagram Clone",
        icon: <AiFillInstagram />,
    },
    {
        path: "/chatapp",
        name: "Chat App",
        icon: <BsFillChatDotsFill />,
    },
    {
        path: "/bookapp",
        name: "Book Keeping App",
        icon: <BsBookHalf />,
    },
    {
        path: "/deliveroo",
        name: "Deliveroo",
        icon: <SiDeliveroo />,
    },
    {
        path: "/instaclone",
        name: "Insta Clone",
        icon: <AiFillInstagram />,
    },
    {
        path: "/inshortclone",
        name: "Inshort Clone",
        icon: <HiNewspaper />,
    },
    {
        path: "/signalclone",
        name: "Signal Clone",
        icon: <BsSignal />,
    },
    {
        path: "/spotifyclone",
        name: "Spotify Clone",
        icon: <FaSpotify />,
    },
    {
        path: "/ecommerce",
        name: "E-commerce",
        icon: <BsFillCartFill />,
        exact: true,
        subRoutes: [
            {
                path: "/ecommerce/admin",
                name: "Flipkart Admin Portal ",
                icon: <RiAdminFill />,
            },
            {
                path: "/ecommerce/client",
                name: "Flipkart Clone",
                icon: <FaUser />,
            },
        ],
    },
];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: !isOpen ? "200px" : "50px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                    onClick={() => setShow(show)}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {!isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    <img src={Logo} style={{ width: "20%" }} />
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={!isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeClassName="active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {!isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
            </div>
        </>
    );
};

export default SideBar;