import Head from "../components/layout/Head";
import styled from "@emotion/styled";
import { Row, Col } from "react-bootstrap";
import MasonryBriefcase from "../components/GalleryBriefcase";
import { useTranslation } from '../i18n'

function Briefcase({className}){
	const { t } = useTranslation('briefcase-page')
	return (
		<div className={className}>
			<Head/>

			<div className="container-masonry-briefcase">
				<Row>
					<Col xs="12">
						<h1>{t('title')}</h1>
					</Col>
				</Row>

				<MasonryBriefcase/>
			</div>
		</div>
	)
}

export default styled(Briefcase)`
	color: #fff;
	
	.container-masonry-briefcase {
		padding: 30px 60px;
		
		@media(max-width: ${props => props.theme.breakpoints.md}px){
			padding: 0px 70px;
		}
		
		@media(max-width: ${props => props.theme.breakpoints.sm}px){
			padding: 50px 50px;
		}
		
		@media(max-width: ${props => props.theme.breakpoints.xs}px){
			padding: 50px 30px;
		}
		
		h1 {
			font-family: ${props => props.theme.fontFamily.primary};
			font-size: 3em;
			line-height: 70px;
			color: ${props => props.theme.colors.secondary};
			
			@media(max-width: ${props => props.theme.breakpoints.md}px){
				text-align: center;
				line-height: 50px;
			}
		}
	}
`;