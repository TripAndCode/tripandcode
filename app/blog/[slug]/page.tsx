import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import formatDate from '@/utils/formData';
import getPostMetadata from '@/components/getPostMetada';
import { notFound } from "next/navigation";


const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    if (!posts) {
        notFound();
    }
    return posts.map((post: any) => ({
        slug: post.slug
    }))
}


const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    const title = post.data.title
    const date = post.data.date
    return (
        <div>
            <div className='mt-6 text-center'>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                        {formatDate(date)}
                    </time>
                </dd>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">{title}</h1>
                {/* <dl className="pt-6 pb-6 border-b border-gray-200 dark:border-gray-700"></dl> */}
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
            <article className="prose lg:prose-xl"><Markdown>{post.content}</Markdown></article>
        </div>
    );
};

export default PostPage;
