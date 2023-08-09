import styles from '@/styles/Shared.module.css'

export default function SharedFooter(props) {
    return (
        <>
            <div className={styles.footer}>
                <div>
                    {props.breadcrumb}
                </div>
            </div>
        </>
    )
}