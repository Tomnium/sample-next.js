import MainLayout from "../components/MainLayout";
import Container from "../components/Container";
import styles from '../styles/About.module.scss';


export default function About({ aboutData }) {

    return (
        <MainLayout title="About">
            <Container>
                <div className={styles.about}>
                    <h1>About</h1>
                    {aboutData.map(paragraph => (
                        <p key={paragraph}
                           className={styles.about__paragraph}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </Container>
        </MainLayout>
    )
}

export const getStaticProps = async () => {
    const aboutData = await fetch('http://localhost:3000/api/about')
        .then(res => res.json())
        .then(parsed => parsed.data)

    return {
        props:{
            aboutData,
        }
    }
}