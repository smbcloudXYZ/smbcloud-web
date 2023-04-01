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
            &nbsp;/&nbsp;
            <a href={process.env.NEXT_PUBLIC_BASE_URL}>
                Learn
            </a>
        </>
    )
}

export default function Github() {
    return (
        <>
            <SharedHead
                title="Learn SmbPndk - A new cloud."
                description="Learn SmbPndk, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar breadcrumb={<Breadcrumb />} />
                <div className={sharedStyles.center}>
                    <h2 className={inter.className}>
                        SmbPndk x Github
                    </h2>
                </div>
                <div className={sharedStyles.grid}>
                    <a
                        href={process.env.NEXT_PUBLIC_BASE_URL + `/learn`}
                        className={sharedStyles.card}
                    >
                        <h2 className={inter.className}>
                            Learn Github <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about Github platform and how it integrate with SmbPndk.
                        </p>
                    </a>

                    <a
                        href="https://github.com/apps/smbpndk"
                        className={sharedStyles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Install<span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Install the SmbPndk Github App.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}