
import styles from '@/styles/Shared.module.css'

function PageLinks() {
    return (
        <>
            <a href={process.env.NEXT_PUBLIC_BASE_URL}>
                Home
            </a>
            &nbsp;/&nbsp;
            <a href={process.env.NEXT_PUBLIC_BASE_URL + `about`}>
                About
            </a>
            &nbsp;/&nbsp;
            <a href={process.env.NEXT_PUBLIC_BASE_URL + `contact`}>
                Contact
            </a>
        </>
    )
}

export default function SharedTopBar(props) {
    return (
        <>
            <div className={styles.description}>
                <p>
                    <code className={styles.code}>
                        <a href={process.env.NEXT_PUBLIC_BASE_URL_CONSOLE} >
                            $ smb login
                        </a>
                    </code>
                </p>
                <div>
                    <PageLinks />
                </div>
            </div>
        </>
    )
}