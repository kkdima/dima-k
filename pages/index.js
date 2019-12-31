import React from 'react';
import Layout from '../components/my-layout';
import Projects from '../components/projects.js';
import Technologies from '../components/technologies.js';
import AboutMe from '../components/about-me.js';
import ContactMe from '../components/contact-me.js';
import Ad from '../components/your-ad';

const Index = () => (
	<Layout>
		<div className='flex flex-col sm:w-5/6 m-auto mt-20 w-body-max'>
			<div className='flex flex-col-reverse md:flex-row mb-20'>
				<div className='pl-6 leading-tight text-3xl mt-6 md:mr-10 text-xl'>
					<p>Hi, my name is</p>
					<h1 className='ml:text-5xl-custom font-bold'>Dima Kononenko</h1>
					<p className=''>I'm a</p>
					<h1 className='ml:text-5xl-custom font-bold'>front-end developer.</h1>
				</div>
				<div className='m-auto md:m-0'>
					<img src='/images/User-pic-emoji.png' className='object-contain' alt='' />
				</div>
			</div>

			<AboutMe />

			<div className='flex flex-col md:flex-row justify-between mt-10'>
				<div className='mb-10 md:mb-0 md:mr-2 p-0'>
					<Projects />
				</div>
				<div className='flex flex-col md:max-w-1/2 md:ml-2'>
					<div className='mb-10 max-w-full md:max-width-467'>
						<Technologies />
					</div>
					<div className='max-w-full md:max-width-467'>
						<ContactMe />
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default Index;
