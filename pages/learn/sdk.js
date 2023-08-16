import { Inter } from '@next/font/google'
import SharedHead from "./../shared/head";
import SharedTopBar from "./../shared/topbar";
import sharedStyles from "./../../styles/Shared.module.css";
import SharedFooter from '../shared/footer';
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
            <a href={process.env.NEXT_PUBLIC_BASE_URL + `/learn/sdk`}>
                SDK
            </a>
        </>
    )
}

export default function Sdk() {
    return (
        <>
            <SharedHead
                title="SmbPndk SDK - Learn SmbPndk - A new cloud."
                description="Learn SmbPndk SDK, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar breadcrumb={<Breadcrumb />} />
                <div className={inter.className}>
                    <h1 className={inter.className}>
                        SDK
                    </h1>
                    <p className={inter.className}>SDK (Software development Kit) is a set of library that one can use to integrate an existing software.</p>
                </div>

                <div className={sharedStyles.center}></div>
                <div className={sharedStyles.grid}>
                    <a
                        href={process.env.NEXT_PUBLIC_BASE_URL}
                        className={sharedStyles.card}
                    >
                        <h2 className={inter.className}>
                            SDK <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about SmbPndk SDK.
                        </p>
                    </a>
                </div>
                <SharedFooter />
            </main>
        </>
    )
}