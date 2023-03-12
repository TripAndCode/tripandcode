import Image from 'next/image'
// import avatarImage from '../../public/images/avataaars.png'
import profileImage from '../../public/images/circle_cropped_mexico.png'

const AboutPage = () => {

    return (
        <>
            <div className="mt-10">
                <div className="my-7">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">About Me</h1>
                </div>
                {/* <p className="border-b border-slate-200 mx-8 py-3" /> */}
                <div className="mt-6">
                    <div className="md:flex justify-between">
                        <div className="flex justify-center md:flex-none">
                            <Image
                                className="max-w-min"
                                width={300}
                                height={300}
                                src={profileImage}
                                alt="Louis M. avatar"
                            />
                        </div>

                        <div className="max-w-5xl mt-8 md:pl-5 md:max-w-3xl md:mt-0">
                            <div className="py-4">
                                <p className="font-bold text-3xl mb-4  flex justify-center"> Hi, beautiful people! </p>
                                <p className="text-gray-700 text-base">
                                    I'm Louis M. I was born and raised in Japan and has non-stop curiosity about various cultures around the world.
                                </p>
                                <p className="text-gray-700 text-base">
                                    I make money by being a software engineer. This profession has been full of learnings and joy.
                                </p>
                                <br />
                                <p className="text-gray-700 text-base">
                                    This web site is intended to output what I input by posting short articles about my experience and learnings. ✨
                                </p>
                            </div>
                            <div className="pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trip</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#code</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>

    )

}

export default AboutPage;
