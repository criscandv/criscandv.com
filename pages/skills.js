import Head from "../components/layout/Head";
import styled from "@emotion/styled";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { useTranslation, Trans } from '../i18n';

function Skills({className}){
	const { t } = useTranslation('skills-page')
	return (
		<div className={className}>
			<Head/>

			<Row className="container-skills">
				<Col xs="12" sm="6" className="d-flex justify-content-center flex-column container-info-row">
					<h1>
						<Trans i18nKey="title" t={t}>
							S <br/>E
						</Trans>
					</h1>

					<p>
						{t('firstParagraph')}
					</p>

					<p>
						{t('secondParagraph.first')} <Link href="/briefcase"><a>{t('secondParagraph.link')}</a></Link>&nbsp;
						<Trans i18nKey="secondParagraph.second" t={t}>
							como <i>freelancer</i> y al servicio de empresas.
						</Trans>
					</p>

					<p>
						<Trans i18nKey="thirdParagraph.first" t={t}>
							profile
							<a href="https://www.linkedin.com/in/criscan215/" target="_blank"> LinkedIn </a>
							details
						</Trans>

						<Link href="/contact"><a> {t('thirdParagraph.link')}</a></Link>.
					</p>
				</Col>

				<Col xs="12" sm="6" className="d-flex justify-content-center align-items-center flex-column container-skills-img container-info-row">
					<img src="/img/ccdv-skills.png" alt="ccdv-skills"/>
				</Col>
			</Row>
		</div>
	)
}

export default styled(Skills)`
	color: #fff;
	
	.container-skills {
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
			@media(max-width: ${props => props.theme.breakpoints.sm}px){
				flex: 0 0 100%;
				max-width: 100%;
				//align-items: center;
				padding: 0;
				
				&:first-of-type {
					margin-top: 50px;
				}
			}
						
			@media(max-width: ${props => props.theme.breakpoints.xs}px){
				justify-content: flex-start!important;
				&:last-child {
					padding: 0;
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
			}
			
			@media(max-width: ${props => props.theme.breakpoints.sm}px){
				font-size: 2.6em;
				line-height: 40px;
				text-align: center;
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
		
		.container-skills-img {
			padding: 0 40px;
			
			img {
				width: 100%;
				@media(max-width: ${props => props.theme.breakpoints.sm}px) {
					width: 65%;
				}
				
				@media(max-width: 518px) {
					width: 80%;
				}
			}
		}
	}
`;