import React from "react";
import Projects from "./projects.js";
import Technologies from "./technologies.js";
import AboutMe from "./about-me.js";
import ContactMe from "./contact-me.js";

const Home = () => {
	return (
		<div className='flex flex-col w-5/6 ml:w-3/4 m-auto mt-20 w-body-max'>
			<div className='pl-6 flex flex-col-reverse md:flex-row mb-20'>
				<div className='leading-tight text-3xl mt-6 md:mr-10 text-xl'>
					<p>Hi, my name is</p>
					<h1 className='ml:text-5xl-custom font-bold'>Dima Kononenko</h1>
					<p className=''>I'm a</p>
					<h1 className='ml:text-5xl-custom font-bold'>front-end developer.</h1>
				</div>
				<div className='m-auto md:m-0'>
					<img
						src='/images/User-pic-emoji.png'
						className='object-contain'
						alt=''
					/>
				</div>
			</div>

			<AboutMe />

			<div className='flex flex-col md:flex-row justify-between mt-10'>
				<div className='mb-10 md:mr-4'>
					<Projects />
				</div>
				<div className='flex flex-col md:ml-4 md:max-w-1/2'>
					<div className='mb-10'>
						<Technologies />
					</div>
					<div className=''>
						<ContactMe />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
 
// text-4xl border-4 inline-flex justify-start

{
	/* <div className='leading-none mr-20'>
    <p>Hi, my name is</p>
    <h1 className='text-2vw font-bold'>Dima Kononenko</h1>
    <p className=''>I'm a</p>
    <h1 className='text-5vw font-bold'>front-end developer.</h1>
</div>
<div className='bg-gray-200 relative pb-2/3'>
    <img src='../static/User_pic_emoji.png' className='h-full w-full'  alt='' />
</div> */
}
