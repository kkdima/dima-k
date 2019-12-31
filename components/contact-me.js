import React from 'react';

const ContactMe = () => {
	return (
		<div className='rounded container-custom relative min-h-contactme flex'>
			<div className='min-w-80'>
				<h2 className='text-4xl font-bold mb-4'>Contact Me</h2>
				<p className='paragraph'>
					+1 (213) 332 83 98 <br />
					kkdimaa@gmail.com
				</p>
			</div>
			<div className='w-full h-full my-auto content-center'>
				<img src='/images/Union.svg' className='absolute bottom-0 left-0' alt='' />
				<div className='-ml-20'>
					<p className='font-bold text-3xl whitespace-no-wrap'>Los Angeles</p>
					<img src='/images/geo-pin.svg' className='ml-10' alt='' />
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
