import { Inter } from "next/font/google"
import sharedStyles from '@/styles/Shared.module.css'
import SharedTopBar from './shared/topbar'
import SharedHead from './shared/head'
import SharedFooter from './shared/footer'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <>
            <SharedHead
                title="Login with your GitHub account."
                description="Learn SmbPndk, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar />
                <div>
                    <h1 className={inter.className}>
                        About
                    </h1>
                    <p className={inter.className}>
                        SmbPndk is a new cloud platform. For your explosive ideas: a controlled demolition.
                    </p>
                </div>
                <SharedFooter />
            </main>
        </>
    )
}