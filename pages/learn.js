import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { HeadShared, MainTopBar } from '.'
const inter = Inter({ subsets: ['latin'] })
export default function Learn() {
    return (
        <>
            <HeadShared
                title="Learn SmbPndk - A new cloud."
                description="Learn SmbPndk, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={styles.main}>
                <MainTopBar />
                <div className={styles.center}>
                    <h2 className={inter.className}>
                        Learn SmbPndk
                    </h2>
                </div>
                <div className={styles.grid}>
                    <a
                        href="https://docs.smbpndk.com/"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Frontend SDK <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about SmbPndk FrontendSDK!
                        </p>
                    </a>

                    <a
                        href="https://smbpndk.com/learn/mobile-sdk"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Mobile SDK<span>-&gt;</span>
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