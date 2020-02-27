require('dotenv').config();

const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const getEmailData = ({ email, name, message }) => {
	const output = `
		<p>You have a new contact request</p>
		<h3>Contact Details</h3>
		<ul>  
		<li>Name: ${name}</li>
		<li>Company: ${name}</li>
		<li>Email: ${email}</li>
		<li>Phone: ${name}</li>
		</ul>
		<h3>Message</h3>
		<p>${message}</p>
  `;

	const from = name && email ? `${name} <${email}>` : `${name || email}`;

	const form = {
		from,
		to: 'dimaakononenko@gmail.com',
		subject: `New message from ${from}`,
		message,
		replyTo: from,
		html: output
	};
	
	const oauth2Client = new OAuth2(
		`${process.env.ClientID}`,
		`${process.env.ClientSecret}`,
		'https://developers.google.com/oauthplayground'
	);

	oauth2Client.setCredentials({
		refresh_token: `${process.env.RefreshToken}`
	});

	const accessToken = oauth2Client.getAccessToken();

	const scopes = ['https://www.googleapis.com/auth/gmail'];

	const url = oauth2Client.generateAuthUrl({
		// 'online' (default) or 'offline' (gets refresh_token)
		access_type: 'offline',

		// If you only need one scope you can pass it as a string
		scope: scopes
	});

	console.log(url);

	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: 'kkdimaa@gmail.com',
			clientId: `${process.env.ClientID}`,
			clientSecret: `${process.env.ClientSecret}`,
			refreshToken: `${process.env.RefreshToken}`,
			accessToken: accessToken
		},
		tls: {
			rejectUnauthorized: false
		}
	});
};

module.exports = { sendEmail };

// const getEmailData = (email, name, message) => {
// 	let mailOptions = {
// 		from: ` ${email}`,
// 		to: 'dimaakononenko@gmail.com',
// 		subject: `${name}`,
// 		text: `${message}`,
// 		replyTo: `${email}`,
// 		html: output
// 	};

// 	smtpTransport.sendMail(mailOptions, (error, response) => {
// 		error ? console.log(error) : console.log(response);
// 		smtpTransport.close();
// 	});
// };

// const sendEmail = (name, email, message) => {
// 	const output = `
//         <p>You have a new contact request</p>
//         <h3>Contact Details</h3>
//         <ul>
//             <li>Name: ${name}</li>
//             <li>Email: ${email}</li>
//         </ul>
//         <h3>Message</h3>
//         <p>${message}</p>
//     `;

// 	const mail = getEmailData(email, name, message);

// 	transporter.sendEmail(mail, (error, response) => {
// 		if (error) {
// 			console.log(error);
// 		} else {
// 			console.log('email sent successfully');
// 		}
// 		transporter.close();
// 	});
// };

// module.exports = { sendEmail };
