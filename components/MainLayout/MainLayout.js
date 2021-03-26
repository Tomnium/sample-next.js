import Link from 'next/link';
import Head from 'next/head';
import styles from './MainLayout.module.scss';
import Container from "../Container";


export default function MainLayout({ children,title = '',head = null }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {head}
            </Head>
            <div className={`${styles.mainLayout__nav}`}>
                <Container>
                    <nav className={styles.nav}>
                        <Link href="/">
                            <a className={styles.nav__link}>Main</a>
                        </Link>
                        <Link href="/posts">
                            <a className={styles.nav__link}>Posts</a>
                        </Link>
                        <Link href="/about">
                            <a className={styles.nav__link}>About</a>
                        </Link>
                    </nav>
                </Container>
            </div>
            <main className={styles.mainLayout__main}>
                {children}
            </main>
        </>
    )
}