import { Inter } from "next/font/google"
import sharedStyles from '@/styles/Shared.module.css'
import authorizeStyles from '@/styles/Authorize.module.css'
import SharedTopBar from './shared/topbar'
import SharedHead from './shared/head'
import SharedFooter from './shared/footer'
import axios from "../lib/axios"
import Link from "next/link"
import Image from "next/image"
import Router from "next/router"
const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async (context) => {
    const code = context.query.code
    const res = await axios.post(`authorize`, { code })
    const obj = res.data
    return {
        props: obj
    }
}


export default function Authorize({
    status, message, user_info, user_email
}) {

    // render singup form if we have success response
    // render error message if we have error response
    if (status === 200) {
        return <SignupForm 
                    status={status}
                    message={message}
                    user_email={user_email}
                    user_info={user_info}
            />
    }

    return (
        <>
            <SharedHead
                title="Something wrong when login with your GitHub account."
                description="Something wrong when login with your GitHub account.."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar />
                <h1 className={inter.className}>Error</h1>
                <div className={inter.className}>
                    <span >{message} Please retry: </span>
                    <Link href="/login" >
                        <code className={sharedStyles.code}>
                            $ smb login retry
                        </code>
                    </Link>
                </div>
                <SharedFooter />
            </main>
        </>
    )
}

function SignupForm(props) {

    const createAccount = async (user_info, user_email) => {
        console.log(user_info)
        Router.push({
            pathname: '/signup',
            query: {
                user_info: JSON.stringify(user_info),
                user_email: JSON.stringify(user_email)
            }
        }, '/signup')
    }

    return (
        <>
            <SharedHead
                title="Link your GitHub account to smbCloud."
                description="Link your GitHub account to smbCloud, the full-suite front-end developer platforms."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar />
                <h1 className={inter.className}>Signup</h1>
                <p className={inter.className}>
                    Link your GitHub account to smbCloud, the full-suite front-end developer platforms.
                    You will need to confirm your email address {props.user_email.email} to complete the signup process.
                </p>
                <div className={authorizeStyles.syncContainer}>
                    <div>
                        <Image
                            src={props.user_info?.avatar_url}
                            alt="Picture of the author"
                            width={50}
                            height={50}
                            blurDataURL="data:..."
                            placeholder="blur"
                            className={sharedStyles.avatar}
                        />
                    </div>
                    <div>
                        <div className={authorizeStyles.arrow}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div>
                        <code className={sharedStyles.code}>
                            $ smb
                        </code>
                    </div>
                </div>
                <Link onClick={() => {
                    createAccount(props.user_info, props.user_email)
                }} href=''>
                    <code className={sharedStyles.code}>
                        $ smb account create
                    </code>
                </Link>
                <SharedFooter />
            </main>
        </>
    )
}