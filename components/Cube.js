import React from "react";
import styled from "@emotion/styled";
import { cubeAbout } from "../utils/data";

function Cube({className}){
	return (
		<div className={className}>
			<div className="cube animated">
				{cubeAbout.map((el, idx) => (
					<div key={idx} className={el.className} title={el.title}>
						<img src={el.img} alt={`img-${el.title}`}/>
					</div>
				))}
			</div>
		</div>
	)
}

export default styled(Cube)`
	color: #fff;
	
	.cube {
		backface-visibility: visible;
		transform-style: preserve-3d;
		transform-origin: 75px 75px;
		position: relative;
		top: -75px;
		left: -75px;
		transform: rotateY(60deg) rotateX(50deg);
		
		
		&.animated {
			animation: goround 11s linear infinite;
		}
		
		&>*{
			width: 300px;
			height: 300px;
			position: absolute;
			background: rgba(50,50,50,.9);
			border: 1px solid ${props => props.theme.colors.secondary};
			display: flex;
			
			@media(max-width: 1330px){
				width: 250px;
				height: 250px;
			}
		}
		
		.left {
			transform: rotateY(90deg);
			transform-origin: 0 0;
		}
		
		.bottom {
			transform: rotateX(90deg);
			transform-origin: 0 300px;
			
			@media(max-width: 1330px){
				transform-origin: 0 250px;
			}
		}
		
		.top {
			transform: rotateX(270deg);
			transform-origin: 300px 0;
			
			@media(max-width: 1330px){
				transform-origin: 250px 0;
			}
		}
		
		.right {
			transform: rotateY(270deg);
			transform-origin: 300px 0;
			
			@media(max-width: 1330px){
				transform-origin: 250px 0;
			}
		}
		
		.back {
			transform: translateZ(-300px);
			
			@media(max-width: 1330px){
				transform: translateZ(-250px);
			}
		}
		
		@keyframes goround {
			0% {
				transform: rotateY(0deg) rotateX(0deg) translateZ(75px);
			}
			100% {
				transform: rotateY(360deg) rotateX(360deg) translateZ(75px);
			}
		}
		
		img {
			width: 90%;
			height: auto;
			margin: auto;
			transform: scaleX(-1);
		}
	}
`;