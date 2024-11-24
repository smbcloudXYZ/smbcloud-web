import { Inter } from 'next/font/google'
import sharedStyles from '@/styles/Shared.module.css'
import SharedTopBar from './shared/topbar'
import SharedHead from './shared/head'
import SharedFooter from './shared/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Learn() {
    return (
        <>
            <SharedHead
                title="Learn smbCloud - A new cloud."
                description="Learn smbCloud, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar />
                <div className={sharedStyles.center}>
                    <h2 className={inter.className}>
                        Learn smbCloud
                    </h2>
                </div>
                <div className={sharedStyles.grid}>
                    <a
                        href={process.env.NEXT_PUBLIC_BASE_URL + `/learn/platform`}
                        className={sharedStyles.card}
                    >
                        <h2 className={inter.className}>
                            Platform <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about smbCloud platform.
                        </p>
                    </a>

                    <a
                        href={process.env.NEXT_PUBLIC_BASE_URL + `/learn/sdk`}
                        className={sharedStyles.card}
                    >
                        <h2 className={inter.className}>
                            SDK<span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about smbCloud SDK!
                        </p>
                    </a>
                </div>
                <SharedFooter />
            </main>
        </>
    )
}