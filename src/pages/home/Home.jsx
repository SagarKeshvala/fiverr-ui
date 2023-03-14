import React from "react";
import CatCard from "../../components/catCard/CatCard";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards } from "../../data";
import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			<Featured />
			<TrustedBy />
			<Slide slidesToShow={5} arrowsScroll={1}>
				{cards.map((card) => (
					<CatCard key={card.id} item={card} />
				))}
			</Slide>
			<div className="features">
				<div className="container">
					<div className="item">
						<h1>A whole world of freelance talent at your fingertips.</h1>
						<div className="title">
							<img src="./img/check.png" alt="" />
							The best for every budget
						</div>
						<p>
							Fing high-quality services at every price point. No hourly rates,
							just project-based pricing.
						</p>
						<div className="title">
							<img src="./img/check.png" alt="" />
							The best for every budget
						</div>
						<p>
							Fing high-quality services at every price point. No hourly rates,
							just project-based pricing.
						</p>
						<div className="title">
							<img src="./img/check.png" alt="" />
							The best for every budget
						</div>
						<p>
							Fing high-quality services at every price point. No hourly rates,
							just project-based pricing.
						</p>
						<div className="title">
							<img src="./img/check.png" alt="" />
							The best for every budget
						</div>
						<p>
							Fing high-quality services at every price point. No hourly rates,
							just project-based pricing.
						</p>
					</div>
					<div className="item">
						<iframe
							title="freelancer"
							frameborder="0"
							width="640"
							height="360"
							allow="autoplay; fullscreen"
							src="https://player.vimeo.com/video/142621379?autoplay=true&loop=true&autopause=false&title=false&byline=false&portrait=false&sidedock=false"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
