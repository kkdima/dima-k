import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import Nav from '../components/nav';

import 'aos/dist/aos.css';
import AOS from 'aos';
class MyApp extends App {
	// Only uncomment this method if you have blocking data requirements for
	// every single page in your application. This disables the ability to
	// perform automatic static optimization, causing every page in your app to
	// be server-side rendered.
	//
	// static async getInitialProps(appContext) {
	//   // calls page's `getInitialProps` and fills `appProps.pageProps`
	//   const appProps = await App.getInitialProps(appContext);
	//
	//   return { ...appProps }
	// }
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
					<link rel='stylesheet' href='/main.css' />
				</Head>
				<Component {...pageProps} />
				<script src='https://unpkg.com/aos@next/dist/aos.js'></script>
				<script>
					AOS.init();
				</script>
			</div>
		);
	}
}

export default MyApp;
