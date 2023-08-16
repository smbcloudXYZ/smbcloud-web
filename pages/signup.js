import axios from "../lib/axios"
import SharedTopBar from './shared/topbar'
import SharedHead from './shared/head'
import sharedStyles from '@/styles/Shared.module.css'
import { Inter } from "next/font/google"
import SharedFooter from './shared/footer'
const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async (context) => {
    const query = context.query
    // Check if we have user_info and user_email
    if (!query.user_info || !query.user_email) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    const userInfo = JSON.parse(query.user_info)
    const userEmail = JSON.parse(query.user_email)
    
    const res = await axios.post(`users`, {
        user: {
            email: userEmail.email,
            authorizations_attributes: [{
                provider: 0,
                uid: userInfo.id
            }]
        }
    })
    const obj = res.data
    return {
        props: obj
    }
}

export default function Signup() {
    return (
        <>
            <SharedHead
                title="Create your account"
                description="Create your account."
            />
            <main className={sharedStyles.main}>
                <SharedTopBar />
                <h1 className={inter.className}>Create your account</h1>
                <div className={inter.className}>
                    <div className={sharedStyles.center}>
                        <p className={inter.className}>
                            Your account has been created. You need to confirm your email.
                            You will be redirect to the login page. Or click the link on the top left corner.</p>
                    </div>
                </div>
                <SharedFooter />
            </main>
        </>
    )
}