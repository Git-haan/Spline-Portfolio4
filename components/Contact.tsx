"use client";
import Spline from "@splinetool/react-spline";

const Contact = () => {
    return (
        <section id="contact">
            <div className="flex md:flex-row flex-col mx-auto px-10">
                <div style={{ maxWidth: '100%', margin: '0 auto'}} className="hidden md:block">
                    <Spline scene="https://prod.spline.design/UK88Je3XaHGAUod3/scene.splinecode" />
                </div>
                <div className="flex flex-col md:pl-48 pl-6 py-24">
                    <p className="max-w-5xl py-10 text-lg"> — CONTACT </p>
                    <h1 className="text-3xl md:text-5xl font-semibold">
                        WOULD LOVE TO HEAR <br /> FROM YOU
                    </h1>
                    <p className="md:mt-10 py-10 text-lg">
                        Reach out to me today and let&apos;s discuss how I can help you achieve your goals. If you have any other requests or questions, don&apos;t hesitate to use the form.
                    </p>
                    <div className="flex items-center justify-start pt-10">
                        <div className="mx-auto w-full ">
                            <form action="https://api.web3forms.com/submit" method="POST">

                            <input type="hidden" name="access_key" value="d972aecc-be43-4974-958b-18cc484fae86" /> 
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="relative z-0">
                                <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">NAME</label>
                                </div>
                                <div className="relative z-0">
                                <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">EMAIL</label>
                                </div>
                                <div className="relative z-0 col-span-2">
                                <textarea name="message" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">MESSAGE</label>
                                </div>
                            </div>
                            <button type="submit" className="mt-20 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
                            </form>
                        </div>
                    </div>

            
                </div>
            </div>
        </section>
    )
}

export default Contact;