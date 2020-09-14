import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({ allPostsData }) => {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <p>Hey there, I'm Vincent - 
        </p>

        <p>A tech lover, travel & fitness enthusiast, and also a major foodie. I created this blog help me keep track of my thoughts, learnings, and feelings while starting a software engineering rotational position - a major career shift for me!
        </p>

        <p>I'd love to connect with fellow devs and techies: <a href="https://www.linkedin.com/in/vincentvinnybattaglia/">LinkedIn</a> or simply drop me a line on <a href="https://t.me/vbattaglia">Telegram</a>.
        </p>
        <p><i>Talk is cheap. Show me the code.  - Linus Torvalds</i>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
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

export default Home