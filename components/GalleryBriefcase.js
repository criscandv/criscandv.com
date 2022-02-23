import React, { useCallback } from "react";
import styled from "@emotion/styled";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import GalleryImageRenderer from "./ui/GalleryImageRenderer";
import { briefcase } from "../utils/data";

function GalleryBriefcase({className}){
	const imageRenderer = useCallback(({ index, left, top, key, photo }) => (
		<GalleryImageRenderer
			key={key}
			margin="2px"
			index={index}
			photo={photo}
			left={left}
			top={top}
			direction="column"
		/>
	))


	return (
		<div className={className}>
			<Gallery photos={briefcase} direction="column" renderImage={imageRenderer}/>
		</div>
	)
}

export default styled(GalleryBriefcase)``;