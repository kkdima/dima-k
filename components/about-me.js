import React from "react";

const AboutMe = () => {
	return (
		<div className='text-lg container-custom'>
			<h2 className='text-4xl font-bold'>About me</h2>
			<p className='paragraph mb-5'>
				More than anything else I strive to create. And things like design serve me
				as great insipirations. I bealive that commitment and hard work can overcome
				anything. Thus, my motto is to enjoy the journey and always to learn new
				things.
			</p>
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>6+ years of graphic/web design experince</p>
			</div>
			<br />
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>Attention to detailes</p>
			</div>
			<br />
			<div className='inline-flex'>
				<img src='/images/Ellipse.svg' className='object-contain mr-4' alt='' />
				<p>Fast learner and adapter to the new workflows</p>
			</div>
			<div className='containter w-full flex justify-end'>
				<button className='py-1 px-3 rounded flex bg-blue-c'>
					open CV
					<img
						src='/images/OpenButton.svg'
						className='w-5 ml-2 mt-1 -mr-1'
						alt=''
					/>
				</button>
			</div>
		</div>
	);
};

export default AboutMe;
