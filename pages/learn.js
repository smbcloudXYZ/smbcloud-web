import { Inter } from '@next/font/google'
import styles from '@/styles/Learn.module.css'
import SharedTopBar from './shared/topbar'
import SharedHead from './shared/head'
const inter = Inter({ subsets: ['latin'] })

function Breadcrumb() {
    return (
        <>
            <a href={process.env.NEXT_PUBLIC_BASE_URL}>
                Home
            </a>
            &nbsp;/&nbsp;
            <a href={process.env.NEXT_PUBLIC_BASE_URL}>
                Learn
            </a>
        </>
    )
}

export default function Learn() {
    return (
        <>
            <SharedHead
                title="Learn SmbPndk - A new cloud."
                description="Learn SmbPndk, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={styles.main}>
                <SharedTopBar breadcrumb={<Breadcrumb />} />
                <div className={styles.center}>
                    <h2 className={inter.className}>
                        Learn SmbPndk
                    </h2>
                </div>
                <div className={styles.grid}>
                    <a
                        href={process.env.NEXT_PUBLIC_BASE_URL + `/learn/platform`}
                        className={styles.card}
                    >
                        <h2 className={inter.className}>
                            SmbPndk Platform <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about SmbPndk platform.
                        </p>
                    </a>

                    <a
                        href={process.env.NEXT_PUBLIC_BASE_URL + `/learn/sdk`}
                        className={styles.card}
                    >
                        <h2 className={inter.className}>
                            SmbPndk SDK<span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about SmbPndk MobileSDK!
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}