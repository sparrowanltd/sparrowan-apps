import Image from "next/image";
import line from '../../assets/Line90.png'
import startProjectBg from '../../assets/startProjectBg.png'
import dotsStartProject1 from '../../assets/dotsStartProject1.png'
import dotsStartProject from '../../assets/dotsStartProject.png'
export default function StartProject() {
    return (
        <>
            <main className="">
                {/* bannser scction  */}
                <section className="text-center flex flex justify-between gap-10">
                    <div className="flex-1">
                        <Image className=' w-full' src={startProjectBg} width={100} height={100} alt="imges" />
                    </div>
                    <div className="flex-1 mt-20">
                        <div>
                            <h1 className="text-center font-bold text-[#FF6B00] text-4xl">Start a project </h1>
                            <Image className='mx-auto mt-5' src={line} width={100} height={100} alt="imges" />
                        </div>
                        <div>
                            <span className="text-[#FF6B00] rounded bg-[#FFE1CC] py-2 px-3 font-bold">Our Blog</span>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute top-0 right-0">{/* className='absolute top-0 z-10' */}
                            <Image className='' src={dotsStartProject} width={100} height={100} alt="imges" />

                        </div>
                        <div className="absolute top-20 right-14">{/* className='absolute top-0 right-0 z-20' */}
                            <Image className='' src={dotsStartProject1} width={100} height={100} alt="imges" />
                        </div>
                    </div>
                </section>
                {/* text are */}
                <h1 className="text-center font-bold text-2xl">Are you ready to start a project?</h1>
                <p className="text-center  text-sm my-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis purus ut volutpat tellus platea tellus.
                </p>
                {/* ================== fromt section ==================  */}
                <section>
                    <div>
                        <from>
                            <div className="w-100 md:w-[700px] h-fit bg-[#FCF4EE] mx-auto p-5 md:p-10 rounded-2xl ">
                                <div className="mb-4">
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="name" >Full Names</label>
                                        <span className="text-red-600 ">*</span>
                                    </div>
                                    <input type='text' placeholder="You full name " className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />
                                </div>
                                <div className="mb-4 md:flex gap-4">
                                    <div className="flex-1">
                                        <div className="flex gap-2 items-center">
                                            <label htmlFor="name" >Email</label>
                                            <span className="text-red-600 ">*</span>
                                        </div>
                                        <input type='email' placeholder="you email " className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex gap-2 items-center">
                                            <label htmlFor="name" >Business Email (optional)</label>
                                            <span className="text-red-600 ">*</span>
                                        </div>
                                        <input type='email' placeholder="you email " className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />

                                    </div>
                                </div>
                                <div className="mb-4 md:flex gap-4">
                                    <div className="flex-1">
                                        <div className="flex gap-2 items-center">
                                            <label htmlFor="name" >Mobile phone</label>
                                            <span className="text-red-600 ">*</span>
                                        </div>
                                        <input type='number' placeholder="you number " className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />   </div>
                                    <div className="flex-1">
                                        <div className="flex gap-2 items-center">
                                            <label htmlFor="name" >Telephone  (optional)</label>
                                            <span className="text-red-600 ">*</span>
                                        </div>
                                        <input type='number' placeholder="you number " className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />

                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="companyname" >Company/Person Name</label>
                                        <span className="text-red-600 ">*</span>
                                    </div>
                                    <input type='text' placeholder="company name" id="companyname" className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />
                                </div>


                                <div className="mb-4">
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="companytype" >Company Type</label>
                                        <span className="text-red-600 ">*</span>
                                    </div>
                                    <select id="companytype"
                                        className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2"
                                    >
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="companyname" >Company Website URL </label>
                                        {/*                                         <span className="text-red-600 ">*</span>
 */}                                    </div>
                                    <input type='text' placeholder="company name" id="companyname" className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="companyname" >Your position in the Company</label>
                                        <span className="text-red-600 ">*</span>
                                    </div>
                                    <input type='text' placeholder="company name" id="companyname" className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="companyname" >Tell us something about your Company</label>
                                        <span className="text-red-600 ">*</span>
                                    </div>
                                    <input type='text' placeholder="company name" id="companyname" className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="companytype" >When do you start the project ?</label>
                                        <span className="text-red-600 ">*</span>
                                    </div>
                                    <select id="companytype"
                                        className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2"
                                    >
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="companyname" >Tell us about your requirement</label>
                                        <span className="text-red-600 ">*</span>
                                    </div>
                                    <input type='text' placeholder="company name" id="companyname" className="w-full rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-[#FF6B00] shadow-md mt-2" />
                                </div>






                            </div>

                        </from>
                    </div>
                </section>
            </main>
        </>
    )
} 