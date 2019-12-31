import React from 'react';
// import Link from "next/link";
import '../public/main.css';

const links = [
	{ href: '', label: 'Get in touch' },
	{ href: '/', label: 'Home' }
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav className='m-auto mt-3 w-body-max w-5/6 flex justify-between'>
		<ul className='flex justify-start border-black'>
			{links.map(({ key, href, label }) => (
				<li key={key}>
					<a
						href={href}
						className='mr-10 flex text-xl pt-3 border-0 border-b-4 border-grey'
					>
						{label}
					</a>
				</li>
			))}
		</ul>
		<a href='//github.com/kkdima' target='_blank'>
			<img src='/images/JamIcons-github.svg' alt='github' className='mt-3' />
		</a>
	</nav>
);

export default Nav;
