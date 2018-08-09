const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/api/form', function (req, res) {
// 	res.json('');
// })

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<h3>Contact Details</h3>
		<ul>
			<li>Name : ${req.body.name}</li>
			<li>Email : ${req.body.email}</li>
			<li>Subject: ${req.body.subject}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.zoho.com',
			port: 587,
			secure: false,
			auth: {
				user: "flukic@cybeletechnologies.com",
				pass: '20filip18'
			}
		})

		let mailOptions = {
			from: `${req.body.email} <flukic@cybeletechnologies.com>`,
			to: ' Recipient <flukic@zoho.com>',
			subject: req.body.subject,
			text: req.body.message,
			html: htmlEmail
		}
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return console.log('error');
			}

			res.json('Email sent successfully!');

			console.log('Message sent:', info.messageId);
		})
	})
})
app.post('/api/techForm', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<h3>Contact Details</h3>
		<ul>
			<li>Name : ${req.body.name}</li>
			<li>Email : ${req.body.email}</li>
			<li>Subject: ${req.body.subject}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.zoho.com',
			port: 587,
			secure: false,
			auth: {
				user: "flukic@cybeletechnologies.com",
				pass: '20filip18'
			}
		})

		let mailOptions = {
			from: `${req.body.email} <flukic@cybeletechnologies.com>`,
			to: ' Recipient <flukic@zoho.com>',
			subject: req.body.subject,
			text: req.body.message,
			html: htmlEmail
		}
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return console.log('error');
			}

			res.json('Email sent successfully!');

			console.log('Message sent:', info.messageId);
		})
	})
})

app.post('/api/groupForm', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<h3>Contact Details</h3>
		<ul>
			<li>Name : ${req.body.name}</li>
			<li>Email : ${req.body.email}</li>
			<li>Subject: ${req.body.subject}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.zoho.com',
			port: 587,
			secure: false,
			auth: {
				user: "flukic@cybeletechnologies.com",
				pass: '20filip18'
			}
		})

		let mailOptions = {
			from: `${req.body.email} <flukic@cybeletechnologies.com>`,
			to: ' Recipient <flukic@zoho.com>',
			subject: req.body.subject,
			text: req.body.message,
			html: htmlEmail
		}
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return console.log('error');
			}

			res.json('Email sent successfully!');

			console.log('Message sent:', info.messageId);
		})
	})
})

app.post('/api/afrForm', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<h3>Contact Details</h3>
		<ul>
			<li>Name : ${req.body.name}</li>
			<li>Email : ${req.body.email}</li>
			<li>Subject: ${req.body.subject}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.zoho.com',
			port: 587,
			secure: false,
			auth: {
				user: "flukic@cybeletechnologies.com",
				pass: '20filip18'
			}
		})

		let mailOptions = {
			from: `${req.body.email} <flukic@cybeletechnologies.com>`,
			to: ' Recipient <flukic@zoho.com>',
			subject: req.body.subject,
			text: req.body.message,
			html: htmlEmail
		}
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return console.log('error');
			}

			res.json('Email sent successfully!');

			console.log('Message sent:', info.messageId);
		})
	})
})


const PORT = process.env.PORT || 3012

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
})