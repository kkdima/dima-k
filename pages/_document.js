import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// require('../.env').config();

export default class extends Document {
	render() {
		return (
			<html>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src='https://www.googletagmanager.com/gtag/js?id=UA-127322248-2'
					></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-127322248-2', {
              page_path: window.location.pathname,
            });
          `
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
