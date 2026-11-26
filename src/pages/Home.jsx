import { Seo } from "../components/Seo";
import { About } from "../sections/About";
import { Activities } from "../sections/Activities";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import { FinalCta } from "../sections/FinalCta";
import { Hero } from "../sections/Hero";
import { Process } from "../sections/Process";
import { Skills } from "../sections/Skills";
import { Work } from "../sections/Work";

export function Home() {
	return (
		<>
			<Seo
				title="Programmer Priyank | Priyank Raiyani | portfolio | Web Developer"
				description="Hi, I am Priyank, I am a Full Stack Developer, If you need a Website, then email me may be. - programmerpriyank"/>
			<Hero />
			<About />
			<Skills />
			<Work />
			<Process />
			{/* <Activities /> */}
			<Experience />
			<Contact />
			<FinalCta />
		</>
	);
}

export default Home;
