// import Link from 'next/link'
// import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }: { text: string }) => {
    return (
        // <Link href={`/tags/${kebabCase(text)}`}>
        //   <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        //     {text.split(' ').join('-')}
        //   </a>
        // </Link>
        <>
            <span className="mr-3 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {text.split(' ').join('-')}
            </span>

        </>
    )
}

export default Tag
