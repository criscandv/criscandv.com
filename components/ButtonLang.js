import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from '../i18n';
import { Dropdown } from "react-bootstrap";

function ButtonLang({className}){
  const { t, i18n } = useTranslation('common');

  const changeLang = lang => {
    i18n.changeLanguage(lang);
  }

  const CustomButton = React.forwardRef(({ children, onClick}, ref) => (
		<button
			className="btn custom-btn-dropdown"
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</button>
	))

  return (
		<Dropdown className={className} id="dropdown-lang" alignRight>
			<Dropdown.Toggle as={CustomButton}>
				{t('lang.btn.title')}
				<i className="fas fa-language"></i>
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item onClick={() => changeLang("es")}>{t('lang.btn.langs.es')}</Dropdown.Item>
				<Dropdown.Item onClick={() => changeLang("en")}>{t('lang.btn.langs.en')}</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
  )
}

export default styled(ButtonLang)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  
  .custom-btn-dropdown {
  	background: ${props => props.theme.colors.primary};
  	border-color: ${props => props.theme.colors.primary};
  	color: ${props => props.theme.colors.lightColor};
  	
  	&:after {
  		content: none;
  	}
  	
  	i {
  		margin-left: 10px;
  		font-size: 20px;
  		vertical-align: middle;
  	}
  }
  
  .dropdown-menu {
  	min-width: 8rem;
  	transform: translate3d(5px, -38px, 0px);
  }
`;