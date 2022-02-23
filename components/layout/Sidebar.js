import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { socialNetworks, navLinks } from "../../utils/data";
import { useTranslation } from '../../i18n'

function Sidebar({className}){
	const { t } = useTranslation('common');
	const router = useRouter();
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	return (
		<div className={className}>
			<a href="/" className="ccdv-icon">
				<img src="/img/ccdv-icon.svg" alt="icon" className="ccdv-icon"/>
			</a>

			<nav className={`container-links ${showMobileMenu? 'show-menu' : ''}`}>
				{navLinks.map((el, idx) => (
					<Link href={el.link} key={idx}>
						<a className={router.pathname === el.link? "active" : ""}>
							<i className={el.icon}/>
							<span className="title-link-sidebar">{t(`menubar.${el.title}`)}</span>
						</a>
					</Link>
				))}
			</nav>

			<ul className="container-social-networks">
				{socialNetworks.map((el, idx) => (
					<li key={idx}>
						<a href={el.link} target="_blank" title={el.title}>
							{/*<img src={el.img}/>*/}
							<i className={el.icon}/>
						</a>
					</li>
				))}
			</ul>

			<a className="mobile-icon" onClick={() => setShowMobileMenu(!showMobileMenu)}>
				<i className="fas fa-bars"/>
			</a>
		</div>
	)
}

export default styled(Sidebar)`
	background: ${props => props.theme.colors.primary};
	min-height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	width: 80px;
	box-shadow: 2px 0px 6px -1px rgba(0,0,0,0.75);
	display: flex;
	justify-content: space-between;
	
	@media(max-width: ${props => props.theme.breakpoints.md}px){
		flex-direction: row;
		width: 100%;
		height: 70px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
		min-height: 0;
	}
	
	@media(max-width: ${props => props.theme.breakpoints.sm}px){
		position: fixed;
	}
	
	.ccdv-icon {
		display: block;
		padding: 4px;
		
		@media(max-width: ${props => props.theme.breakpoints.md}px){
			float: left;
			padding: 2px;
			background: #003446;
		}
		
		img {
			width: 100%;
			height: auto;
			margin: 0 auto;
			
			@media(max-width: ${props => props.theme.breakpoints.md}px){
				width: auto;
				height: 100%;
			}
		}
	}
	
	.container-links {
		display: block;
		text-align: center;
		position: absolute;
		height: 210px;
		top: 50%;
		margin-top: -120px;
		width: 100%;
		
		@media(max-width: ${props => props.theme.breakpoints.md}px){
			width: 50%;
			position: absolute;
			left: 50%;
			margin-left: -19%;
			float: left;
			overflow: hidden;
			text-align: center;
			height: 70px;
			top: 0;
			margin-top: 0;
		}
		
		@media(max-width: ${props => props.theme.breakpoints.sm}px){
			width: 100%;
			position: fixed;
			left: 100%;
			opacity: 0;
			margin-left: 0;
			float: left;
			overflow: hidden;
			text-align: center;
			height: 60px;
			top: 69px;
			margin-top: 0;
			background: ${props => props.theme.colors.primary};
			transition: all .3s ease-out;
		}
		
		a {
			color: ${props => props.theme.colors.lightColor};
			display: block;
			font-size: 25px;
			line-height: 51px;
			height: 51px;
			position: relative;
			text-decoration: unset;
			
			@media(max-width: ${props => props.theme.breakpoints.md}px){
				float: left;
				margin-left: 6%;
				line-height: 65px;
				height: 100%;
				
				&:first-of-type {
					margin-left: 0;
				}
			}
			
			@media(max-width: ${props => props.theme.breakpoints.sm}px){
				float: left;
				margin-left: 0!important;
				line-height: 65px;
				height: 100%;
				width: 20%;
			}
			
			&:hover {
				color: ${props => props.theme.colors.secondary};
				
				.title-link-sidebar {
					opacity: 1;
					visibility: visible;
					width: 100%;
				}
				
				i {
					opacity: 0;
					visibility: hidden;
				}
			}
			
			.title-link-sidebar {
				 font-size: 14px;
				 opacity: 0;
				 visibility: hidden;
				 transition: all .4s ease-in;
				 position: absolute;
				 left: 0;
				 right: 0;
				
				@media(max-width: ${props => props.theme.breakpoints.md}px){
					visibility: visible;
					opacity: 1;
					display: block;
					position: unset;
					height: 100%;
				}
			}
			
			i {
				opacity: 1;
				visibility: visible;
				transition: all .6s ease-out;
				
				@media(max-width: ${props => props.theme.breakpoints.md}px){
					display: none;
				}
			}
			
			&.active {
				color: ${props => props.theme.colors.secondary};
			}
		}
	}
	
	.show-menu {
		@media(max-width: ${props => props.theme.breakpoints.sm}px){
			left: 0;
			opacity: 1;			
		}
	}
	
	.container-social-networks {
		position: absolute;
		bottom: 20px;
		width: 100%;
		display: block;
		padding: 0;
		list-style: none;
		text-align: center;
		margin: 0;
		
		@media(max-width: ${props => props.theme.breakpoints.md}px){
			//position: static;
			//bottom: 20px;
			//width: auto;
			//height: 100%;
			//line-height: 65px;
			//display: block;
			//padding: 0;
			//float: right;
			display: none;
		}
		
		@media(max-width: ${props => props.theme.breakpoints.sm}px){
			display: none;
		}
		
		@media(max-height: 640px){
			display: none;
		}
		
		li {
			@media(max-width: ${props => props.theme.breakpoints.md}px){
				float: right;
				height: 100%;
				line-height: 65px;
				margin: 0 10px;
			}
		
			a {
				padding: 7px 0;
				display: block;
				font-size: 17px;
				line-height: 16px;
				color: ${props => props.theme.colors.lightColor};
				
				@media(max-width: ${props => props.theme.breakpoints.md}px){
					height: 100%;
					line-height: 65px;
					padding: 0;
				}
				
				&:hover {
					color: ${props => props.theme.colors.secondary};
				}
				
				img {
					width: 20%;
					height: auto;
					margin: 0 auto;
					
					@media(max-width: ${props => props.theme.breakpoints.md}px){
						height: 25%;
						width: auto;
					}
				}
			}
		}
	}
	
	.mobile-icon {
		display: none;
		
		@media(max-width: ${props => props.theme.breakpoints.sm}px){
			font-size: 30px;
			color: ${props => props.theme.colors.lightColor};
			float: right;
			margin: 10px 20px 10px 10px;
			display: block;
		}
		
		&:hover {
			color: ${props => props.theme.colors.secondary};
		}
	}
`;