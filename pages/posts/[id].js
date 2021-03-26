import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import MainLayout from "../../components/MainLayout";
import Container from "../../components/Container";
import styles from "../../styles/Post.module.scss";
import {wrapper} from "../_app";

export default function Post() {


    const router = useRouter();

    const post = useSelector(s => s.posts.find(post =>
        String(post.id) === String(router.query.id)))

    return (
        <MainLayout title={`Post ${post.id}`} head={(
            <>
                <meta name="description" content={`Post ${post.id} in next course`} />
                <meta name="Keywords" content={`Next.js,next-course,post ${post.id}`} />
            </>
        )}>
            <Container>
                <div className={styles.postPage}>
                    <h1 className={styles.postPage__body}>Post {post.id}</h1>
                    <div className={styles.postPage__body}>
                        <b>Title</b>: {post.title[0].toUpperCase() + post.title.slice(1)}
                    </div>
                     <div className={styles.postPage__body}>
                        <b>Body</b>: {post.body[0].toUpperCase() + post.body.slice(1)}
                     </div>
                    <div className={styles.postPage__body}>
                        <b>User id</b>: {post.userId}
                    </div>
                </div>
            </Container>
        </MainLayout>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    if(store.getState().posts.length === 0) {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => store.dispatch({ type:'POSTS_SET_DATA',payload:res }))
    }
})


