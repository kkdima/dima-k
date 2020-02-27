require('dotenv').config();

export default (req, res) => {
	const { google } = require('googleapis');
	const OAuth2 = google.auth.OAuth2;
	const nodemailer = require('nodemailer');
	const { name, email, message, company, phone } = req.body;

	const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${name}</li>
        <li>Company: ${company}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
    `;

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

	// setup email data with unicode symbols
	const from = name && email ? `${name} <${email}>` : `${name || email}`;

	const mailOptions = {
		from,
		to: 'dimaakononenko@gmail.com',
		subject: `New message from ${from}`,
		message,
		replyTo: from,
		html: output
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, response) => {
		error ? console.log(error) : console.log(response);
		smtpTransport.close();
	});
};
