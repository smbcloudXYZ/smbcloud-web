
import styles from '@/styles/Shared.module.css'

export default function SharedTopBar(props) {
    return (
        <>
            <div className={styles.description}>
                <p>
                    Get started here&nbsp;
                    <code className={styles.code}>
                        <a href={process.env.NEXT_PUBLIC_BASE_URL_A}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://a.smbpndk.com
                        </a>
                    </code>
                </p>
                <div>
                    {props.breadcrumb}
                </div>
            </div>
        </>
    )
}