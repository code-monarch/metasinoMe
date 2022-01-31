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
          {/* <link
            rel='preload'
            href='/fonts/Headlines-Bold.otf'
            as='font'
          /> */}
          <link
            rel='preload'
            href='/fonts/cream-DEMO.ttf'
            as='font'
          />
          <link
            rel='preload'
            href='/fonts/Casino.ttf'
            as='font'
          />
          <link
            rel='preload'
            href='/fonts/CasinoFlat.ttf'
            as='font'
          />
          <link
            rel='preload'
            href='/fonts/big_noodle_titling.ttf'
            as='font'
          />
          <link
            rel='preload'
            href='/fonts/Lato-Regular.ttf'
            as='font'
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
