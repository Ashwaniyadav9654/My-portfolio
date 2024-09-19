import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Education = dynamic(() => import("../containers/Education"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Ashwani Kumar",
					description:
						"A passionate Front-End Web Developer",
					image: "",
					url: "https://vercel.com/ashwani-kumars-projects-9c7fa6ee/",
					keywords: [
						"Ashwani",
						"Ashwani Kumar",
						"Portfolio",
						"Ashwani Portfolio ",
						"Ashwani kumar Portfolio",
						"web developer",
						"Frontend",
						"frontend web developer",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills/>
			<Education />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
