import React from "react";

const ContactMe = () => {
	return (
		<div className='rounded container-custom relative min-h-contactme'>
			<h2 className='text-4xl font-bold mb-4'>Contact Me</h2>
			<p className='paragraph'>
				+1 (213) 332 83 98 <br />
				kkdimaa@gmail.com
			</p>
			{/* <div className='relative'> */}
				<img src='/images/Union.svg' className='absolute bottom-0 left-0' alt='' />
			{/* </div> */}
		</div>
	);
};

export default ContactMe;
