"use client";

import Image from 'next/image'
import topImage from '../public/images/trip_and_code_top2_worldmap.jpg'
import topImageTraveler from '../public/images/traveler.jpg'
import topImageProgrammer from '../public/images/programmer_2.jpg'
import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children }) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-100px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[1s]`}
        >
            {children}
        </div>
    )
}


const HomePage = () => {

    return (
        <>
            {/* Section header */}
            < div className="pt-20 pb-5 md:pt-40 md:pb-10" >
                <div className="text-center pb-12 md:pb-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                        Welcome to&nbsp;
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Trip & Code</span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                            Shares the experience and learnings of my travelling and programming 🛫 🖥
                        </p>

                        <a href="/blog" className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative font-bold">Get started!</span>
                        </a>

                    </div>
                </div>
            </div >


            {/* FadeIn */}
            <FadeIn>
                <div className="flex flex-wrap md:my-20">
                    <div className="flex justify-center w-full md:w-1/2">
                        <Image
                            src={topImageTraveler}
                            alt="Top image traveler"
                            loading="eager"
                            placeholder="blur" />
                    </div>
                    <div className="flex items-center w-full md:w-1/2 pt-4 md:pl-5 md:pt-0">
                        <div className="md:mb-5">
                            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 md:text-4xl md:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                                Are you a travel lover?
                            </h1>
                            <p className="py-5 text-xl leading-normal text-gray-500 md:text-xl xl:text-2xl dark:text-gray-300">
                                Traveling in different countries is my biggest hobby. <br />I have been to over 15 countries mainly in Asia and lived for a while in the U.S., Canada and Myanmar.
                                This website is partly a travel blog of my journey.
                            </p>
                        </div>
                    </div>

                </div>
            </FadeIn>
            <FadeIn>
                <div className="flex flex-wrap md:flex-row-reverse	md:my-20">

                    <div className="flex items-center justify-center w-full md:w-1/2">
                        <Image
                            src={topImageProgrammer}
                            alt="Top image programmer"
                            loading="eager"
                            placeholder="blur" />
                    </div>
                    <div className="flex items-center w-full md:w-1/2 pt-4 md:pr-5 md:pt-0">
                        <div className="md:mb-5">
                            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 md:text-4xl md:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                                Are you a coding enthusiast?
                            </h1>
                            <p className="py-5 text-xl leading-normal text-gray-500 md:text-xl xl:text-2xl dark:text-gray-300">
                                Programming is my job. I started my career as a software engineer in 2021 and absolutely love it!
                                I note down the knowledge of the field on this site.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="flex flex-wrap md:my-20">
                    <div className="flex items-center justify-center w-full md:w-1/2">
                        <Image
                            src={topImage}
                            alt="Top image"
                            loading="eager"
                            placeholder="blur" />
                    </div>
                    <div className="flex items-center w-full md:w-1/2 pt-4 md:pl-5 md:pt-0">
                        <div className="md:mb-5">
                            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 md:text-4xl md:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                                Or do you like both?
                            </h1>
                            <p className="py-5 text-xl leading-normal text-gray-500 md:text-xl xl:text-2xl dark:text-gray-300">
                                I resonate so much with you! I am delighted to have you in this website and try my best sharing as much useful information as I can 💪
                            </p>
                        </div>
                    </div>

                </div>
            </FadeIn>

            {/* <div className="text-center bg-slate-800 p-8 mt-6 my-6 rounded-md">
                <Link href="/">
                    <h1 className="text-3xl text-white font-bold">Trip & Code</h1>
                </Link>
                <p className="text-slate-300">Welcome to Trip & Code! 🛫 🖥</p>
            </div> */}
        </>
    )

}

export default HomePage;
function getInitialLocale() {
    throw new Error('Function not implemented.');
}

