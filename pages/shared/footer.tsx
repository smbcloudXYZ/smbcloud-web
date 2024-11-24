import styles from '@/styles/Shared.module.css'
import { BsGithub } from 'react-icons/bs'
import { GrDebian } from 'react-icons/gr'

export default function SharedFooter(props) {
    return (
        <>
            <div className={styles.footer}>
                <a href={process.env.NEXT_PUBLIC_GITHUB_URL} rel="noopener noreferrer" target='__blank' title='smbCloud GitHub page'>
                    <BsGithub size={25}/>
                </a>
                <a href='https://debian.org' rel="noopener noreferrer" target='__blank' title='Running on Debian'>
                    <GrDebian size={25}/>
                </a>
            </div>
        </>
    )
}