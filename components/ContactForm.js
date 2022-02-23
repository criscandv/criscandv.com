import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import TextField from "./ui/TextField";
import Button from "./ui/Button";
import { Row, Col, FormCheck, FormGroup, Alert } from "react-bootstrap";
import { getDataFromIp, sendEmailToApi } from "../utils/http";
import { useTranslation } from '../i18n'


function ContactForm({className}){
	const { t } = useTranslation(['contact-page', 'common']);

	const [data, setData] = useState({
		name: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    country: ""
	});
	const [acceptTerms, setAcceptTerms] = useState(false);
	const [infoForm, setInfoForm] = useState( "");

	useEffect(() => {
		getDataFromIp().then(({country_name, city}) => {
			setData({
				...data,
				city,
				country: country_name
			})
		})
	}, []);

	const handleChange = name => event => {
		setData({
			...data,
			[name]: event.target.value
		});
	}
	
	const sendEmail = () => {
		if(!data.email || !data.message) {
			setInfoForm("allInputs");
			return;
		}

		let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email);
		if(!validateEmail) {
			setInfoForm("validEmail");
			return;
		}

		if(!acceptTerms){
			setInfoForm("acceptTerms");
			return;
		}
		
		sendEmailToApi(data).then(({message}) => {
			setInfoForm(message);
			setData({
				name: "",
				email: "",
				phone: "",
				message: "",
				city: "",
				country: ""
			});
			setAcceptTerms(false);
			setTimeout(() => {
				setInfoForm("");
			}, 2500)
		})
	}

	return (
		<form className={className}>
			<Row>
				<Col xs="12" className="container-input-form">
					<TextField placeholder={t('form.pName')} name="name" value={data.name} onChange={handleChange('name')}/>
				</Col>
			</Row>
			<Row>
				<Col xs="12" sm="6" className="container-input-form">
					<TextField type="email" placeholder={t('form.pEmail')} name="email" value={data.email} onChange={handleChange('email')}/>
				</Col>
				<Col xs="12" sm="6" className="container-input-form">
					<TextField type="number" placeholder={t('form.pNumber')} name="phone" value={data.phone} onChange={handleChange('phone')}/>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="container-input-form">
					<TextField as="textarea" placeholder={t('form.pMessage')} name="message" value={data.message} onChange={handleChange('message')}/>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="container-input-form">
					<FormGroup controlId="authorization">
						<FormCheck type="checkbox">
							<FormCheck.Input type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)}/>
							<FormCheck.Label>{t('form.check.first')} <Link href="/contact"><a>{t('form.check.link')}</a></Link>. *</FormCheck.Label>
						</FormCheck>
					</FormGroup>
				</Col>
			</Row>
			{infoForm &&
				<Row>
					<Col xs="12" sm="8" className="container-input-form">
						<Alert variant="primary" className="alert-error-form">
							{t(`form.info.${infoForm}`)}
						</Alert>
					</Col>
				</Row>
			}
			<Row>
				<Col xs="12" className="d-flex align-items-end flex-column container-input-form">
					<Button color="#ffa300" onClick={sendEmail}>
						{t('common:button.contact')}
					</Button>
				</Col>
			</Row>
		</form>
	)
}

export default styled(ContactForm)`
	.container-input-form {
		padding: 0 5px;
		margin: 5px 0;
		
		.form-check {
			label, input {
				cursor: pointer;
				
				a {
					color: ${props => props.theme.colors.secondary};
				}
			}
		}
		
		.alert-error-form {
			background-color: ${props => props.theme.colors.secondary};;
			color: ${props => props.theme.colors.lightColor};
			border-color: #e89706;
		}
	}
`;