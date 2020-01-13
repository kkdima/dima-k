const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

const getEmailData = ({ email, name, message }) => {
	const from = name && email ? `${name} <${email}>` : `${name || email}`;
	const form = {
		from,
		to: 'dimaakononenko@gmail.com',
		subject: `New message from ${from}`,
		message,
		replyTo: from
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(form, (error, info) =>
			error ? reject(error) : resolve(info)
		);
	});
};

// Setting up OAuth from gmail
const oauth2Client = new OAuth2(
	`${process.env.ClientID}`,
	`${process.env.ClientSecret}`,
	'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
	refresh_token: `${process.env.RefreshToken}`
});

const accessToken = oauth2Client.getAccessToken();

const sendEmail = (email, name, message) => {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
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

	const mail = getEmailData(email, name, message);

	transporter.sendMail(mail, function(error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log('email sent successfully');
		}
		transporter.close();
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
