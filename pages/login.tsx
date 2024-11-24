import { Inter } from "next/font/google"
import sharedStyles from '@/styles/Shared.module.css'
import loginStyles from '@/styles/Login.module.css'
import SharedTopBar from './shared/topbar'
import SharedHead from './shared/head'
import SharedFooter from './shared/footer'
const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = (context) => {
    console.log('getServerSideProps body', context.query)
    return {
        props: JSON.parse(JSON.stringify(context.query))
    }
}

export default function Login(props) {
    let errorMessage = ''
    if (props.error) {
        const error = JSON.parse(props.error)
        errorMessage = error.message
    }

    const styleGithub = { "--color": '#e8eaea' };

    return (
        <>
            <SharedHead
                title="Login with your GitHub account."
                description="Learn smbCloud, a new cloud platform. For your explosive ideas: a controlled demolition."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar />
                <div className={inter.className}>
                    <a className={loginStyles.button} href="https://github.com/login/oauth/authorize?client_id=053e152f1b78ecee552b&redirect_uri=http://localhost:3000/authorize" style={styleGithub}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login with Github
                    </a>
                </div>
                <div className={inter.className}>
                    <span className={loginStyles.error}>{errorMessage}</span>
                </div>
                <SharedFooter />
            </main>
        </>
    )
}