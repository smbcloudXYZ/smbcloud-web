import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function HeadShared(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export function MainTopBar() {
  return (
    <>
      <div className={styles.description}>
        <p>
          Get started here&nbsp;
          <code className={styles.code}>
            <a href={process.env.NEXT_PUBLIC_BASE_URL_A}>
              https://a.smbpndk.com
            </a>
          </code>
        </p>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <HeadShared
        title="SmbPndk - A new cloud."
        description="A new cloud platform. For your explosive ideas: a controlled demolition."
      />
      <main className={styles.main}>
        <MainTopBar />
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href={process.env.NEXT_PUBLIC_BASE_URL_DOCS}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about SmbPndk features and&nbsp;API.
            </p>
          </a>

          <a
            href={process.env.NEXT_PUBLIC_BASE_URL + `/learn`}
            className={styles.card}
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about SmbPndk in an interactive course with&nbsp;quizzes!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
