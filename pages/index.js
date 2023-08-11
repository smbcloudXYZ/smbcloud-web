import { Inter } from '@next/font/google'
import sharedStyles from '@/styles/Shared.module.css'
import SharedTopBar from './shared/topbar'
import SharedHead from './shared/head'

const inter = Inter({ subsets: ['latin'] })

function Breadcrumb() {
  return (
    <>
      <a href={process.env.NEXT_PUBLIC_BASE_URL}>
        Home
      </a>
    </>
  )
}

export default function Home() {
  return (
    <>
      <SharedHead
        title="SmbPndk - A new cloud."
        description="A new cloud platform. For your explosive ideas: a controlled demolition."
      />
      <main className={sharedStyles.main}>
        <SharedTopBar breadcrumb={<Breadcrumb />} />
        <div className={sharedStyles.center}>
          <h1 className={inter.className}>SmbPndk</h1>
        </div>

        <div className={sharedStyles.grid}>
          <a
            href={process.env.NEXT_PUBLIC_BASE_URL_DOCS}
            className={sharedStyles.card}
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
            className={sharedStyles.card}
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
