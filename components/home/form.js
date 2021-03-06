import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { fadeInUp } from '../../public/styles/framer_animation/animations';

const Form = () => {
	const [name, setName] = useState(''),
		[email, setEmail] = useState(''),
		[message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const dataToSubmit = {
			name,
			email,
			message
		};

		console.log(dataToSubmit);

		axios
			.post('/api/send', dataToSubmit)
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
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

	return (
		<motion.div
			exit={{ opacity: 0, y: -60 }}
			variants={fadeInUp}
			initial='initial'
			animate='animate'
			className='rounded max-w-full md:w-full mt-10 container-custom md:mr-3 md:max-width-465 mb-8'
		>
			<h2 className='text-4xl font-bold mb-6'> Send me a message </h2>
			<form
				id='#contact-form'
				onSubmit={handleSubmit}
				method='POST'
				action='/api/send'
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
		</motion.div>
	);
};

export default Form;
