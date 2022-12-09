import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Script from 'next/script'

const name = 'John Doe'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ Component, pageProps, children, home }) {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <script dangerouslySetInnerHTML={{
          __html: `window.utag_cfg_ovrd = window.utag_cfg_ovrd || {}; window.utag_cfg_ovrd.noview = true;
          (function (a, b, c, d) {
            a = 'https://tags.tiqcdn.com/utag/kyndryl/dev/dev/utag.js';
            b = document; c = 'script'; d = b.createElement(c); d.src = a; d.type = 'text/java' + c; d.async = true;
            a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);
        })();`}} /> */}
        {/* <Script
          src="/static/utagLocalScript.js"
          strategy="beforeInteractive"
        /> */}

        <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
        <script type="text/javascript" src="/static/utag-local.js"></script>
        <script type="text/javascript" src="/static/utag-selectors.js"></script>

      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
