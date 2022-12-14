import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
//import { withUtag } from '../helpers/utag-helpers'
import { useEffect } from 'react'


export default function Home({ allPostsData }) {


  useEffect(() => {
    window.utag.view({
      "adl_site_hierarchy": ["dashboard"], "adl_category": "poc-dashboard", "adl_subcategory": "", "adl_language": "en", "adl_country": "US", "adl_page_type": "", "page_name": "PoC Dashboard", "adl_page_url": "https://mango-moss-0df475f10.2.azurestaticapps.net/index.html"
    });
    console.log(window.utag);
  }, []);


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong>John</strong>. I’m a software engineer and a
          translator (English/Japanese). You can contact me on{' '}
          <a href="https://twitter.com/chibicode">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link id={id} href={'#'}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

