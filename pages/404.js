import styles from '../styles/404.module.scss';
import Container from "../components/Container";
import Link from 'next/link';

export default function PageNotFound() {
    return (
        <Container>
            <div className={styles.pageNotFound}>
                <span>Page not found</span>
                <span className={styles.pageNotFound__label}>
                    <Link href="/">
                        <a className={styles.pageNotFound__link}>Go back </a>
                    </Link>
                    to safety
                </span>
            </div>
        </Container>
    )
}