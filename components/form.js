import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const dataToSubmit = {
			name,
			email,
			message
		};

		axios.post('/api/send', dataToSubmit);

		resetForm();
	};

	const handleChange = e => {
		e.preventDefault();

		if (e.target.id === 'name') {
			setName(e.target.value);
		} else if (e.target.id === 'email') {
			setEmail(e.target.value);
		} else if (e.target.id === 'message') {
			setMessage(e.target.value);
		}
	};

	const resetForm = () => {
		useState({ setName: '', setEmail: '', setMessage: '' });
	};

	return (
		<div className='rounded max-w-full md:w-1/2 mt-10 container-custom md:mr-3 md:max-width-465'>
			<h2 className='text-4xl font-bold mb-6'> Send me a message </h2>
			<form
				onSubmit={handleSubmit}
				method='POST'
				action='api/sendMail'
				className='flex flex-col'
			>
				<input
					id='name'
					type='text'
					placeholder='Name'
					className='mb-6 py-3 rounded px-4'
					onChange={handleChange}
					value={name}
				/>
				<input
					id='email'
					placeholder='E-mail'
					className='mb-6 rounded py-3 px-4'
					onChange={handleChange}
					value={email}
				/>
				<textarea
					id='message'
					placeholder='Briefly describe the idea you want to bring to life'
					rows={3}
					className='py-3 px-4 mb-6 rounded resize-none'
					onChange={handleChange}
					value={message}
				/>
				<div className='w-full flex justify-end'>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, y: '5px' }}
						className='px-3 rounded py-1 bg-blue-c'
						onClick={handleSubmit}
						method='POST'
					>
						send
					</motion.button>
				</div>
			</form>
		</div>
	);
};

export default Form;
