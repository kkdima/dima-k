import React from "react";
import Link from "next/link";
import "../public/main.css";

const links = [{ href: "", label: "Get in touch" }].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav className='m-auto mt-3 w-body-max w-5/6 flex justify-between'>
		<ul className='flex justify-start border-black'>
			{links.map(({ key, href, label }) => (
				<li key={key}>
					<a href={href} className='flex text-xl py-2 px-3 underline'>
						{label}
					</a>
				</li>
			))}
		</ul>
		<a href='' >
			<img src='/images/JamIcons-github.svg' alt='github' />
		</a>
	</nav>
);

export default Nav;
