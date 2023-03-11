import Image from 'next/image'
import avatarImage from '../../public/images/avataaars.png'

const AboutPage = () => {

    return (
        <>
            <div className="mx-auto mt-10">
                <h1 className="text-5xl	px-10 font-bold	">About Me</h1>
                {/* <p className="border-b border-slate-200 mx-8 py-3" /> */}
                <div className="mt-6 flex justify-center">
                    <div className="flex justify-between">
                        <div >
                            <Image className="h-auto max-w-min" src={avatarImage} alt="Louis M. avatar" />
                        </div>
                        <div className="max-w-xl">
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
