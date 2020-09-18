import React from "react";
import { Container } from "../../GlobalStyles";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Paging,
	Description,
	Heading,
	ImgWrapper,
	Img,
	// NavLinks,
} from "./InfoSection.element";

const InfoSection = ({
	colorBg,
	imgStart,
	blackText,
	description,
	heading,
	paging,
	defaultPage,
	onPage,
	img,
	start,
	alt,
}) => {
	return (
		<>
			<InfoSec colorBg={colorBg}>
				<Container>
					<Paging defaultPage={defaultPage}>
						{paging}
						<RiArrowRightSLine />
						{onPage}
					</Paging>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<Heading blackText={blackText}>{heading}</Heading>
								<Description>
									{description}
									<Link to="/">Mitra ID</Link>
								</Description>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper>
								<Img src={img} alt={alt}/>
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSection;
