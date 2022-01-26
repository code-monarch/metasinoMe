import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* ANIMATE CSS */}
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
          />
          {/* PRELOAD FONT FILES */}
          <link rel='preload' href='/fonts/Lato-Regular.ttf' as='font' />
          <link rel='preload' href='/fonts/Casino.ttf' as='font' />
          <link rel='stylesheet' href='/fonts/CasinoFlat.ttf' as='font' />
          <link rel='preload' href='/fonts/CasinoShadow.ttf' as='font' />

          {/* IMPORT POPPINS FONT FROM GOOGLE FONT */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap'
            rel='stylesheet'
          />
          {/* FONT AWESOME */}
          <link
            rel='stylesheet'
            href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
            integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
            crossOrigin='anonymous'
          />
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
