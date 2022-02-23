const express = require('express');
const bodyParser = require('body-parser');

const next = require('next');

const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./i18n');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler()

const sgMail = require('@sendgrid/mail');
const KEY_EMAIL_ACCESS = process.env.KEY_EMAIL_ACCESS;
sgMail.setApiKey(KEY_EMAIL_ACCESS);

(async () => {
	await app.prepare();
	const server = express();
	server.use(bodyParser.json())

	await nextI18next.initPromise;
	server.use(nextI18NextMiddleware(nextI18next));

	server.post('/send-email/', (req, res) => {
		try {
			let { name, email, phone, message, city, country } = req.body;

			let html = `
			<table>
				<tr>
					<td>Nombre</td>
					<td>${name || ""}</td>
				</tr>
				<tr>
					<td>Email</td>
					<td>${email}</td>
				</tr>
				<tr>
					<td>Teléfono</td>
					<td>${phone || ""}</td>
				</tr>
				<tr>
					<td>Ciudad</td>
					<td>${city}</td>
				</tr>
				<tr>
					<td>País</td>
					<td>${country}</td>
				</tr>
				<tr>
					<td>Mensaje</td>
					<td>${message}</td>
				</tr>
			</table>
		`

			const msgEmail = {
				to: 'cristiancano0215@gmail.com',
				from: 'Criscan DV <contact@criscandv.com>',
				subject: 'Email from criscandv.com',
				html
			};

			sgMail.send(msgEmail);

			res.status(200).send({
				message: "Email enviado correctamente"
			})
		} catch (e) {
			res.status(400).send({
				message: "Error al enviar el email"
			})
		}
	})

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	await server.listen(port, err => {
		if(err) throw err;
		// console.clear()
		console.log('> Ready on http://localhost:3000');
	})
})()