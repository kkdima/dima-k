import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import '../public/main.css';
// import Layout from '../public/components/layout';

import 'aos/dist/aos.css';
import AOS from 'aos';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<div className=''>
				<Head>
					<title>Dima K.</title>
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width'
						key='viewport'
					/>
					<link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
					<link rel='icon' href='/favicon.ico' />
					<link rel='stylesheet' href='/css/main.css' />
				</Head>
				{/* <Layout> */}
				<Component {...pageProps} />
				<script src='https://unpkg.com/aos@next/dist/aos.js'></script>
				<script>AOS.init()</script>
				{/* </Layout> */}
			</div>
		);
	}
}

export default MyApp;
