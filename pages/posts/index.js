import Link from 'next/link';
import styles from '../../styles/Posts.module.scss';
import MainLayout from "../../components/MainLayout";
import Container from "../../components/Container";
import { wrapper } from './../_app';
import { useSelector } from 'react-redux';

export default function Posts() {

    const posts = useSelector(s => s.posts)
    return (
        <MainLayout title="Posts">
            <Container>
                <h1 className="sas">Posts</h1>
                {posts.map(post => {
                    return <div key={post.id} className={styles.post}>
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <a className={styles.post__link}>{post.title[0].toUpperCase() + post.title.slice(1)}</a>
                        </Link>
                    </div>
                })}
            </Container>
        </MainLayout>
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    if(store.getState().posts.length === 0) {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => store.dispatch({ type:'POSTS_SET_DATA',payload:res }))
    }
})