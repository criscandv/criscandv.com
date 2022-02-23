import Head from "../components/layout/Head";
import styled from "@emotion/styled";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Cube from "../components/Cube";
import { useTranslation, Trans } from '../i18n';

function About({className}){
	const { t } = useTranslation(['about-page', 'common'])

	return (
		<div className={className}>
			<Head/>

			<Row className="container-about">
				<Col xs="12" sm="6" className="d-flex justify-content-center flex-column container-info-row">
					<h1>{t('title')}</h1>
					<p>
						{t('subtitle')}
					</p>

					<p>
						{t('firstParagraph')}
					</p>

					<p>
						{t('secondParagraph')}
					</p>

					<p>
						{t('thirdParagraph.first')} <Link href="/contact"><a>{t('common:button.contact')}.</a></Link> {t('thirdParagraph.second')}
					</p>

					<div className="container-timeline">
						<img src="/img/timeline.svg" alt="timeline-criscan"/>
					</div>
				</Col>

				<Col xs="12" sm="6" className="d-flex justify-content-center align-items-center flex-column container-info-row container-cube">
					<Cube/>
				</Col>
			</Row>
		</div>
	)
}

export default styled(About)`
	color: #fff;
	
	.container-about {
		height: 100vh;
		padding: 0 90px;
		
		@media(max-width: ${props => props.theme.breakpoints.sm}px){
			padding: 0 80px;
			text-align: justify;
		}
		
		@media(max-width: ${props => props.theme.breakpoints.xs}px){
			padding: 0 30px;
		}
		
		.container-info-row {
			@media(max-width: ${props => props.theme.breakpoints.lg}px){
				flex: 0 0 100%;
				max-width: 100%;
				align-items: center;
				padding: 0;
				
				&:last-child {
					height: 60vh;
				}
			}
			
			@media(max-width: ${props => props.theme.breakpoints.sm}px){
				&:last-child {
					display: none!important;
				}
			}
			
			@media(max-width: ${props => props.theme.breakpoints.xs}px){
				margin-top: 50px;
				justify-content: flex-start!important;
			}
		}
		
		h1 {
			font-family: ${props => props.theme.fontFamily.primary};
			font-size: 3.8em;
			line-height: 70px;
			color: ${props => props.theme.colors.secondary};
			
			@media(max-width: 1330px){
				font-size: 3.2em;
			}
			
			@media(max-width: ${props => props.theme.breakpoints.sm}px){
				font-size: 2.6em;
				line-height: 50px;
				text-align: center;
			}
		}
		
		p {
			margin-top: 14px;
			font-size: 1.3em;
			color: ${props => props.theme.colors.lightColor};
			
			@media(max-width: 1330px){
				font-size: 1em;
			}
			
			@media(max-width: ${props => props.theme.breakpoints.sm}px){
				font-size: 1em;
			}
			
			@media(max-width: ${props => props.theme.breakpoints.xs}px){
				font-size: .8em;
			}
			
			a {
				color: ${props => props.theme.colors.secondary};
			}
		}
		
		.container-timeline {
			margin-top: 40px;
			width: 90%;
			
			img {
				width: 100%;
			}
		}
	}
`;