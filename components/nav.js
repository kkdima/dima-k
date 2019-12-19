import React from "react";
import Link from "next/link";
import "../public/main.css";

const links = [
	{ href: "", label: "Get in touch" },
	{ href: "https://github.com/zeit/next.js", label: "Blog" }
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav className='m-auto text-center border-black'>
		<ul className='m-auto flex mr-2 justify-end border-black'>
			<li className='flex py-2 px-3'>
				<Link href='/'>
					<a className='no-underline'>Home</a>
				</Link>
			</li>
			{links.map(({ key, href, label }) => (
				<li key={key}>
					<a href={href}>{label}</a>
				</li>
			))}
		</ul>
	</nav>
);

export default Nav;
