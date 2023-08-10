import { Inter } from "next/font/google"
import sharedStyles from '@/styles/Shared.module.css'
import SharedTopBar from './shared/topbar'
import globalstyles from '@/styles/global.module.css'
import SharedHead from './shared/head'
import SharedFooter from './shared/footer'
import axios from "axios"
import Link from "next/link"
import HttpStatusCode from "./shared/httpStatusCode"
import Image from "next/image"
const inter = Inter({ subsets: ['latin'] })

interface UserInfo {
    login: string
    id: number
    name: string
    avatar_url: string
    html_url: string
}

interface UserEmail {
    email: string
    primary: boolean
    verified: boolean
    visibility: string
}

interface Response {
    status: HttpStatusCode
    message: string
    user_info?: UserInfo
    user_emails?: UserEmail[]

}

export const getServerSideProps = async (context: { query: { code: any } }) => {
    const code = context.query.code
    console.log(code)
    axios.defaults.baseURL = `http://localhost:8088/v1/`
    const res = await axios.post(`authorize`, { code })
    const obj: Response = res.data

    // Only filter primary email and verified email
    if (obj.user_emails) {
        obj.user_emails = obj.user_emails.filter((email: UserEmail) => {
            return email.primary && email.verified
        })
    }

    return {
        props: obj
    }
}

export default function Authorize({ 
    status, message, user_info, user_emails
}: Response) {

    // render singup form if we have success response
    // render error message if we have error response
    if (status === HttpStatusCode.OK) {
        return <SignupForm status={status} message={message} user_emails={user_emails} user_info={user_info} />
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
                <p className={inter.className}>{message}</p>
                <Link href="/login" >
                    <code className={sharedStyles.code}>
                        $ Retry
                    </code>
                </Link>
                <SharedFooter />
            </main>
        </>
    )
}

function SignupForm(props: Response) {
    return (
        <>
            <SharedHead
                title="Link your GitHub account to SmbPndk."
                description="Link your GitHub account to SmbPndk, the full-suite front-end developer platforms."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar />
                <div>
                    <h1 className={inter.className}>Signup</h1>
                    <p className={inter.className}>Link your GitHub account to SmbPndk, the full-suite front-end developer platforms.</p>
                    <div className={inter.className}>
                    <Image
      src={props.user_info?.avatar_url}
      alt="Picture of the author"
      width={500}
      height={500}
      blurDataURL="data:..."
      placeholder="blur"
    />
                    </div>
                    <form method="POST" action="/signup">
                        <input type="hidden" name="user_info" value={JSON.stringify(props.user_info)} />
                        <input type="hidden" name="user_emails" value={JSON.stringify(props.user_emails)} />
                        <input type="hidden" name="status" value={props.status} />
                        <input type="hidden" name="message" value={props.message} />
                        <input type="text" name="username" placeholder="Username" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="submit" value="Signup" />
                    </form>
                </div>
                <SharedFooter />
            </main>
        </>
    )
}