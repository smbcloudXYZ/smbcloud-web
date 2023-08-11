import { Inter } from '@next/font/google'
import SharedHead from "./../shared/head";
import SharedTopBar from "./../shared/topbar";
import sharedStyles from "./../../styles/Shared.module.css";
const inter = Inter({ subsets: ["latin"] });

function Breadcrumb() {
    return (
        <>
            <a href={process.env.NEXT_PUBLIC_BASE_URL}>
                Home
            </a>
            &nbsp;/&nbsp;
            <a href={process.env.NEXT_PUBLIC_BASE_URL + `/learn`}>
                Learn
            </a>
            &nbsp;/&nbsp;
            <a href={process.env.NEXT_PUBLIC_BASE_URL + `/learn/platform`}>
                Platform
            </a>
        </>
    )
}

export default function Platform() {
    return (
        <>
            <SharedHead
                title="SmbPndk Platform - Learn SmbPndk - A new cloud."
                description="Learn SmbPndk Platform, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar breadcrumb={<Breadcrumb />} />
                <div className={sharedStyles.center}>
                    <h2 className={inter.className}>
                        SmbPndk Platform
                    </h2>
                </div>
                <div className={sharedStyles.grid}>
                    <a
                        href={process.env.NEXT_PUBLIC_BASE_URL}
                        className={sharedStyles.card}
                    >
                        <h2 className={inter.className}>
                            Frontend Platform <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about SmbPndk platform.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}