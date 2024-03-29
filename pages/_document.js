// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="VfcxyWQjJ-6aLoh-09DoFMV8KnqCuYEpakvIEMN4Xdk" />
          <meta name="google-site-verification" content="_HRbIym6NYPmySCRduApERDi1GYEmHfdHoLUz5yAK_M" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
