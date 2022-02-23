import NextHead from "next/head";

function Head({title, description, image}){
	let img = image? image : "/img/ccdv-icon.jpg";
	let t = title? title : "Cristian Cano | Ingeniero de software";
	let desc = description? description : `Desarrollador web con mas de 3 años de experiencia, dispuesto a hacer realidad tu idea.`;

	return (
		<NextHead>
			<title>{t}</title>

			<link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet"/>
			<link rel="icon" type="image/png" href="/favicon.png"/>
			<link rel="canonical" href="https://criscandv.com/"/>

			<meta name="description" content={desc}/>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

			<meta name="robots" content="index, follow"/>
			<meta name="keywords" content=""/>

			<meta property="og:locale" content="es_ES"/>
			<meta property="og:locale:alternate" content="en_US"/>
			<meta property="og:type" content="website"/>
			<meta property="og:title" content={t}/>
			<meta property="og:site_name" content={t}/>
			<meta property="og:url" content="https://criscandv.com/"/>
			<meta property="og:description" content={desc}/>
			<meta property="og:image" content={img}/>
			<meta property="og:image:alt" content="CCDV-Icon"/>
			<meta property="fb:app_id" content="3077862052262163"/>

			<meta name="twitter:creator" content="@criscandv"/>

			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-169785274-1"/>
			<script dangerouslySetInnerHTML={{__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'UA-169785274-1');` }} />
		</NextHead>
	)
}

export default Head;