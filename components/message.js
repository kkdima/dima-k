import React, { useState } from "react";
import { motion } from "framer-motion";

const Message = () => {
	const [name, email, message] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log(useState);
	};

	const onNameChange = e => {
		name(e.target.value);
	};

	const onEmailChange = e => {
		name(e.target.value);
	};

	const onMessageChange = e => {
		name(e.target.value);
	};

	return (
		<div className='rounded max-w-full md:w-1/2 mt-10 container-custom md:mr-3 md:max-width-465'>
			<h2 className='text-4xl font-bold mb-6'> Send me a message </h2>
			<div className='flex flex-col'>
				<input type='hidden' name='form-name' />
				<input
					placeholder='Name'
					className='mb-6 py-3 rounded px-4'
					value={name}
				/>
				<input
					placeholder='E-mail'
					className='mb-6 rounded py-3 px-4'
					value={email}
				/>
				<textarea
					placeholder='Briefly describe the idea you want to bring to life'
					rows={3}
					className='py-3 px-4 mb-6 rounded resize-none'
					value={message}
				/>
				<div className='w-full flex justify-end'>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, y: "5px" }}
						className='px-3 rounded py-1 bg-blue-c'
						onSubmit={handleSubmit}
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
