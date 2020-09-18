import React from "react";
import { Button } from "../../GlobalStyles";
// import { AiFillThunderbolt } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsMicFill } from "react-icons/bs";
import { BsChatSquareDots } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import {
	AdventageSection,
	AdventageWrapper,
	AdventageHeading,
	AdventageContainer,
	AdventageCard,
	AdventageCardInfo,
	AdventageCardIcon,
	AdventageCardPlan,
	AdventageCardFeatures,
	AdventageCardFeature,
} from "./Adventege.element";

function Adventage() {
	return (
		<IconContext.Provider value={{ color: "#FC8047", size: 64 }}>
			<AdventageSection>
				<AdventageWrapper>
					<AdventageHeading>Jenis - Jenis Kemitraan</AdventageHeading>
					<AdventageContainer>
						<AdventageCard to="/sign-up">
							<AdventageCardInfo>
								<AdventageCardIcon>
									<BsChatSquareDots />
								</AdventageCardIcon>
								<AdventageCardPlan>Pemateri Modul </AdventageCardPlan>
								<AdventageCardFeatures>
									<AdventageCardFeature>
										Individu/Lembaga bermitra sebagai instruktur atau pemateri
										di latihID Modul, dengan menyediakan beberapa courses di
										dalam satu modul pembelajaran.
									</AdventageCardFeature>
								</AdventageCardFeatures>
							</AdventageCardInfo>
						</AdventageCard>
						<AdventageCard to="/sign-up">
							<AdventageCardInfo>
								<AdventageCardIcon>
                  <BsMicFill />
								</AdventageCardIcon>
								<AdventageCardPlan>Pembicara Talks</AdventageCardPlan>
								<AdventageCardFeatures>
									<AdventageCardFeature>Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID Talks, yang membahas topik seputar UMKM melalui webinar live atau tatap muka yang interaktif.</AdventageCardFeature>
								</AdventageCardFeatures>
							</AdventageCardInfo>
						</AdventageCard>
						<AdventageCard to="/sign-up">
							<AdventageCardInfo>
								<AdventageCardIcon>
                  <HiOutlineDesktopComputer />
								</AdventageCardIcon>
								<AdventageCardPlan>Pembicara PETA</AdventageCardPlan>
								<AdventageCardFeatures>
									<AdventageCardFeature>Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID PETA, yang menceritakan pengalaman tentang UMKM dalam video singkat.</AdventageCardFeature>
								</AdventageCardFeatures>
							</AdventageCardInfo>
						</AdventageCard>
					</AdventageContainer>
				</AdventageWrapper>
			</AdventageSection>
		</IconContext.Provider>
	);
}
export default Adventage;
