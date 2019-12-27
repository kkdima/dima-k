import React from "react";

const Projects = () => {
	return (
		<div className='rounded container-custom md:w-full md:width-467'>
			<h2 className='text-4xl font-bold mb-6'>Projects</h2>
			<div className='relative mb-9'>
				<img src='/images/barva-design.png' className='rounded w-full' alt='' />
				<button className='absolute right-0 mr-8 mb-3 bottom-0 y-0 px-3 rounded flex bg-blue-c'>
					open
				</button>
			</div>
			<div className='relative mb-9'>
				<img src='/images/barva-design.png' className='rounded w-full' alt='' />
				<button className='absolute right-0 mr-8 mb-3 bottom-0 y-0 px-3 rounded flex bg-blue-c'>
					open
				</button>
			</div>
			<div className='relative mb-9'>
				<img src='images/barva-design.png' className='rounded w-full' alt='' />
				<button className='absolute object-fit right-0 mr-8 mb-3 bottom-0 y-0 px-3 rounded flex bg-blue-c'>
					open
				</button>
			</div>
		</div>
	);
};

export default Projects;
