import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import DownloadLink from 'react-download-link';

const info = [
	'9,000+ App Downloads',
	'10,000+ Happy Customers',
	'1K+ Deliveries'
];

const variants = {
	visible: {
		opacity: 1,
		transition: {
			// duration: 1
		}
	},
	hidden: {
		opacity: 0,
		transition: {
			// duration: 0
		}
	}
};

// const fs = require('fs');
// const path = require('path');
// const axios = require('axios');

// async function download() {
// 	const url = '../public/cv.pdf';
// 	const path = Path.resolve(__dirname, 'files', 'cv.pdf');
// }

const axios = require('axios');
// const FileDownload = require('js-file-download');
// axios.get(`/cv.pdf`).then(response => {
// 	FileDownload(response.data, 'cv.pdf');
// });

// function downloadCV() {
// 	axios({
// 		url: 'dima-k.dimaakononenko.now.sh/public/cv.pdf',
// 		method: 'GET',
// 		responseType: 'blob', // important
// 	  }).then((response) => {
// 		const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
// 		const link = document.createElement('a');
// 		link.href = url;
// 		link.target = '_blank'
// 		link.click();
// 	  });
// }

const AboutMe = () => {
	return (
		<div className='rounded text-lg container-custom'>
			<h2 className='text-4xl font-bold'>About me</h2>
			<p className='paragraph mb-5'>
				More than anything else I strive to create. And things like design serve me
				as great inspirations. I believe that commitment and hard work can overcome
				anything. Thus, my motto is to enjoy the journey and always to learn new
				things.
			</p>
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>6+ years of graphic/web design experience</p>
			</div>
			<br />
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>Attention to details</p>
			</div>
			<br />
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>Fast learner and adapter to the new workflows</p>
			</div>
			<div className='container w-full flex justify-end'>
				<a href='/cv.pdf' target='_blank'>
					<motion.button
						// onClick={downloadCV()}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, y: '5px' }}
						className='py-1 px-3 rounded flex bg-blue-c'
					>
						open CV
						<img
							src='/images/OpenButton.svg'
							className='w-5 ml-2 mt-1 -mr-1'
							alt=''
						/>
					</motion.button>
				</a>
			</div>
		</div>
	);
};

export default AboutMe;
