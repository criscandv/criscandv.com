import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "../utils/theme";
import Sidebar from "../components/layout/Sidebar";
import ButtonLang from "../components/ButtonLang";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../public/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { appWithTranslation } from '../i18n';
// import { I18nextProvider } from 'next-i18next'

function CriscanApp({ Component, pageProps }){
	return (
		<ThemeProvider theme={theme}>
			<Sidebar/>
			<Component {...pageProps}/>
			<ButtonLang/>
		</ThemeProvider>
	)
}

export default appWithTranslation(CriscanApp);