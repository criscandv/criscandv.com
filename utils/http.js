export const getDataFromIp = async () => {
	const response = await fetch("https://geoip-db.com/json/" ).then(res => res.json());
	return response;
}

export const sendEmailToApi = async (data) => {
	const response = await fetch('/send-email/', {
		method: 'POST',
		credentials: 'same-origin',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json()).catch(err => err)

	return response;
}