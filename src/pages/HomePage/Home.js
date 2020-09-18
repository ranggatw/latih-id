import React from "react";
import { homeObjOne } from './Data'
import InfoSection from "../../components/InfoSection/InfoSection";
import Adventage from "../../components/Keuntungan/Adventage";


const Home = () => {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<Adventage />
		</>
	);
};

export default Home;
