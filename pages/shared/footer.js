import styles from '@/styles/Shared.module.css'
import { BsGithub } from 'react-icons/bs'

export default function SharedFooter(props) {
    return (
        <>
            <div className={styles.footer}>
                <a href={process.env.NEXT_PUBLIC_GITHUB_URL} rel="noopener noreferrer" target='__blank'>
                    <BsGithub size={25}/>
                </a>
            </div>
        </>
    )
}