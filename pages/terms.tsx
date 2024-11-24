import { Inter } from "next/font/google"
import sharedStyles from '@/styles/Shared.module.css'
import SharedTopBar from './shared/topbar'
import SharedHead from './shared/head'
import SharedFooter from './shared/footer'
const inter = Inter({ subsets: ['latin'] })

function Breadcrumb() {
    return (
        <>
            <a href={process.env.NEXT_PUBLIC_BASE_URL}>
                Home
            </a>
            &nbsp;/&nbsp;
            <a href={process.env.NEXT_PUBLIC_BASE_URL + `/login`}>
                Login
            </a>
        </>
    )
}

export default function Github() {
    return (
        <>
            <SharedHead
                title="Login with your GitHub account."
                description="Learn smbCloud, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar />
                <div>
                    <a href="https://github.com/login/oauth/authorize?client_id=Iv1.07128cb5ebc13f09" className={sharedStyles.button}>
                        Login with Github
                    </a>
                </div>
                <SharedFooter breadcrumb={ <Breadcrumb /> }/>
            </main>
        </>
    )
}