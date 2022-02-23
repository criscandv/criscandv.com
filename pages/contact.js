import Head from "../components/layout/Head";
import styled from "@emotion/styled";
import { Row, Col } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import { useTranslation } from '../i18n'

function Contact({className}){
	const { t } = useTranslation('contact-page');

	return (
		<div className={className}>
			<Head/>

			<Row className="container-contact">
				<Col xs="12" sm="6" className="d-flex justify-content-center flex-column container-info-row">
					<h1>{t('title')}</h1>

					<p>
						{t('firstParagraph')}
					</p>

					<p>
						{t('secondParagraph')}
					</p>

					<div className="container-contact-img">
						<img src="/img/ccdv-contact.svg" alt="criscan-contact"/>
					</div>
				</Col>

				<Col xs="12" sm="6" className="d-flex justify-content-center flex-column container-info-row container-form-contact">
					<ContactForm/>
				</Col>
			</Row>
		</div>
	)
}

export default styled(Contact)`
	color: #fff;
	
	.container-contact {
		height: 100vh;
		padding: 0 90px;
		
		
		@media(max-width: ${props => props.theme.breakpoints.md}px){
			padding: 0 70px;
		}
		
		@media(max-width: ${props => props.theme.breakpoints.sm}px){
			padding: 0 50px;
		}
		
		@media(max-width: ${props => props.theme.breakpoints.xs}px){
			padding: 0 30px;
		}
		
		.container-info-row {
			@media(max-width: ${props => props.theme.breakpoints.md}px){
				flex: 0 0 100%;
				max-width: 100%;
				padding: 0;
				
				&:first-of-type {
					margin-top: 10px;
				}
			}
			
			@media(max-width: ${props => props.theme.breakpoints.md}px){
				&:first-of-type {
					margin-top: 40px;
				}
			}
		}
		
		h1 {
			font-family: ${props => props.theme.fontFamily.primary};
			font-size: 3.8em;
			line-height: 70px;
			color: ${props => props.theme.colors.secondary};
			
			@media(max-width: ${props => props.theme.breakpoints.md}px){
				font-size: 2.8em;
				line-height: 50px;
				text-align: center;
			}
			
			@media(max-width: ${props => props.theme.breakpoints.sm}px){
				font-size: 2.6em;
				line-height: 40px;
			}
		}
		
		p {
			margin-top: 14px;
			font-size: 1.3em;
			color: ${props => props.theme.colors.lightColor};
			
			@media(max-width: ${props => props.theme.breakpoints.md}px){
				font-size: 1em;
				text-align: justify;
			}
			
			@media(max-width: ${props => props.theme.breakpoints.xs}px){
				font-size: .8em;
				margin-bottom: 0!important;
			}
			
			a {
				color: ${props => props.theme.colors.secondary};
			}
		}
		
		.container-contact-img {
			margin: 40px auto 0 auto;
			width: 40%;
			
			@media(max-width: ${props => props.theme.breakpoints.md}px) {
				margin: 20px auto;
				height: 250px;
			}
			
			@media(max-width: ${props => props.theme.breakpoints.sm}px) {
				margin: 20px auto;
				height: 180px;
			}
			
			@media(max-width: ${props => props.theme.breakpoints.xxs}px) {
				margin: 0px auto;
				height: 180px;
			}
			
			img {
				width: 100%;
				
				@media(max-width: ${props => props.theme.breakpoints.md}px) {
					height: 100%;
				}
			}
		}
		
		.container-form-contact {
			padding-left: 50px;
			padding-right: 50px;
			
			@media(max-width: ${props => props.theme.breakpoints.sm}px){
				padding-left: 0;
				padding-right: 0;
			}
		}
	}
`;