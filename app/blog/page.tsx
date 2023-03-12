import Link from 'next/link'

// import PostPreview from '@/components/PostPreview';
import getPostMetadata from "../../components/getPostMetada";
import formatDate from '@/utils/formData';
import Tag from '@/components/tag';

const BlogPage = () => {
    const postMetadata = getPostMetadata()
    // const postPreviews = postMetadata.map((post) => (
    //     <PostPreview key={post.slug} {...post} />
    // ))
    return (
        <>
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Latest
                </h1>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    A blog created with Next.js and Tailwind.css
                </p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {!postMetadata.length && 'No posts found.'}
                {postMetadata.map((post) => {
                    const { title, date, subtitle, tags, slug } = post
                    console.log(tags, typeof(tags));
                    return (
                        <li key={slug} className="py-12">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={date}>{formatDate(date)}</time>
                                        </dd>
                                    </dl>
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                    <Link
                                                        href={`/blog/${slug}`}
                                                        className="text-gray-900 dark:text-gray-100"
                                                    >
                                                        {title}
                                                    </Link>
                                                </h2>
                                                <div className="flex flex-wrap mt-2">
                                                    {tags.map((tag) => (
                                                        <Tag key={tag} text={tag} />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                {subtitle}
                                            </div>
                                        </div>
                                        <div className="text-base font-medium leading-6">
                                            <Link
                                                href={`/blog/${slug}`}
                                                className="text-green-500 hover:text-green-600 dark:hover:text-green-400"
                                                aria-label={`Read "${title}"`}
                                            >
                                                Read more &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>)
                })}
            </ul>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {postPreviews}
            </div> */}
        </>
    )
}

export default BlogPage;
