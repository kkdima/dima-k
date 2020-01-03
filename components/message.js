import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Message = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	// useEffect(() => {
	// 	axios({
	// 		method: 'POST',
	// 		url: 'http://localhost:3002/send',
	// 		data: [name, email, message]
	// 	}).then(response => {
	// 		if (response.data.status === 'success') {
	// 			alert('Message sent');
	// 			resetForm();
	// 		} else if (response.data.status === 'fail') {
	// 			alert('Message failed to send');
	// 		}
	// 	});
	// });

	const handleSubmit = e => {
		e.preventDefault();

		axios({
			method: 'POST',
			url: 'http://localhost:3002/send',
			data: [name, email, message]
		}).then(response => {
			if (response.data.status === 'success') {
				alert('Message sent');
				resetForm();
			} else if (response.data.status === 'fail') {
				alert('Message failed to send');
			}
		});
	};

	const resetForm = () => {
		useState({ name: '', email: '', message: '' });
	};

	const onNameChange = e => {
		setName(e.target.value);
	};

	const onEmailChange = e => {
		setEmail(e.target.value);
	};

	const onMessageChange = e => {
		setMessage(e.target.value);
	};

	const alertName = () => {
		alert(name);
	};

	return (
		<div className='rounded max-w-full md:w-1/2 mt-10 container-custom md:mr-3 md:max-width-465'>
			<h2 className='text-4xl font-bold mb-6'> Send me a message </h2>
			<div className='flex flex-col'>
				<input
					type='text'
					placeholder='Name'
					className='mb-6 py-3 rounded px-4'
					onChange={onNameChange}
					value={name}
				/>
				<input
					placeholder='E-mail'
					className='mb-6 rounded py-3 px-4'
					onChange={onEmailChange}
					value={email}
				/>
				<textarea
					placeholder='Briefly describe the idea you want to bring to life'
					rows={3}
					className='py-3 px-4 mb-6 rounded resize-none'
					onChange={onMessageChange}
					value={message}
				/>
				<div className='w-full flex justify-end'>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, y: '5px' }}
						className='px-3 rounded py-1 bg-blue-c'
						// onSubmit={handleSubmit}
						onClick={handleSubmit}
						method='POST'
					>
						send
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default Message;
