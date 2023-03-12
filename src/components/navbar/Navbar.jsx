import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const [open, setOpen] = useState(false);

	const { pathname } = useLocation();

	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", isActive);
		return () => {
			window.removeEventListener("scroll", isActive);
		};
	}, []);

	const currentUser = {
		id: 1,
		username: "Sagar Keshvala",
		isSeller: true,
	};

	return (
		<div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
			<div className="container">
				<div className="logo">
					<Link to="/" className="link">
						<span className="text">fiverr</span>
						<span className="dot">.</span>
					</Link>
				</div>
				<div className="links">
					<span>Fiverr Business</span>
					<span>Explore</span>
					<span>English</span>
					{!currentUser && <span>Sign in</span>}
					{!currentUser?.isSeller && <span>Become a Seller</span>}
					{!currentUser && <button>Join</button>}
					{currentUser && (
						<div className="user" onClick={() => setOpen(!open)}>
							<img
								src="https://picsum.photos/id/91/200/200.jpg"
								alt="username"
							/>
							<span>{currentUser.username}</span>
							{open && (
								<div className="options">
									{currentUser?.isSeller && (
										<>
											<Link to="/mygigs" className="link">
												Gigs
											</Link>
											<Link to="/add" className="link">
												Add New Gig
											</Link>
										</>
									)}
									<Link to="/orders" className="link">
										Orders
									</Link>
									<Link to="/messages" className="link">
										Messages
									</Link>
									<Link to="/" className="link">
										Logout
									</Link>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{active || pathname !== "/" ? (
				<>
					<hr />
					<div className="menu">
						<Link className="link menuLink" to="/">
							Graphics & Design
						</Link>
						<Link className="link menuLink" to="/">
							Video & Animation
						</Link>
						<Link className="link menuLink" to="/">
							Writing & Translation
						</Link>
						<Link className="link menuLink" to="/">
							AI Services
						</Link>
						<Link className="link menuLink" to="/">
							Digital Marketing
						</Link>
						<Link className="link menuLink" to="/">
							Music & Audio
						</Link>
						<Link className="link menuLink" to="/">
							Programming & Tech
						</Link>
						<Link className="link menuLink" to="/">
							Business
						</Link>
						<Link className="link menuLink" to="/">
							Lifestyle
						</Link>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default Navbar;