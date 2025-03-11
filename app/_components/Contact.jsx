"use client"
import React from "react"
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi"
import { IoCallOutline } from "react-icons/io5"
import { TbSend2 } from "react-icons/tb"
import { socials } from "./Experience"
import { client } from "@/sanity/client"
import { motion } from "framer-motion"

const contacts = [
    {
        icon: (
            <HiOutlineLocationMarker className="rounded transition size-12 p-3 text-primary bg-biege/40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "Address",
        link: "Homs, Syria",
        href: "https://www.google.com/maps/place/Homs%E2%80%8E,+Syria/@34.73027,36.5946812,12z/data=!3m1!4b1!4m6!3m5!1s0x15230e9047c7c0fb:0xac367e06303788d0!8m2!3d34.7325256!4d36.713452!16zL20vMGs5cWY?entry=ttu&g_ep=EgoyMDI1MDIwNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
        icon: (
            <HiOutlineMail className="rounded transition size-12 p-3 text-primary bg-biege/40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "My Email:",
        link: "abdalmoamen.abbara@gmail.com",
        href: "mailto:abdalmoamen.abbara@gmail.com",
    },
    {
        icon: (
            <IoCallOutline className="rounded transition size-12 p-3 text-primary bg-biege/40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "Call Me Now:",
        link: "+963 936 047 684",
        href: "tel:+963936047684",
    },
]
const Card = ({ title, link, icon, href }) => (
    <a
        href={href}
        className="group rounded-[10px] flex gap-3 w-full sm:p-6 px-2 py-4 hover:shadow-[0px_12px_64px_0px_#1c19191f] transition-all overflow-hidden"
    >
        {icon}
        <div className="max-w-[calc(100%-60px)]">
            <p className="text-text-secondary text-sm mb-1">{title}</p>
            <p className="text-text-primary font-bold overflow-hidden text-ellipsis md:text-base text-sm">
                {link}
            </p>
        </div>
    </a>
)
const Contact = () => {
    const createContactEntry = async (data, e) => {
        try {
            const result = await client.create(data)
            e.target.reset()
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            _type: "contact",
            name: e.target[0].value,
            email: e.target[1].value,
            phoneNumber: e.target[2].value,
            subject: e.target[3].value,
            message: e.target[4].value,
        }
        createContactEntry(data, e)
    }
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="contact"
            className="bg-white px-section"
        >
            <div className="bg-white container mx-auto  rounded-2xl relative top-20 xl:p-[88px] lg:p-14 md:p-10 p-2 flex lg:flex-row flex-col items-center justify-between shadow-[0px_59px_124px_0px_#0000001f]">
                {/* left-side */}
                <div className="lg:max-w-[40%]">
                    <h3 className="lg:text-4xl font-semibold md:text-3xl text-2xl mb-4 text-text-primary lg:text-left text-center">
                        Let's discuss your Project
                    </h3>
                    <p className="text-lg text-text-secondary xl:mb-9 lg:mb-6 mb-4 lg:text-left text-center w-fit px-1">
                        There are many variations of passages of Lorem Ipsum
                        available. but the majority have suffered alte.
                    </p>
                    {/* contacts */}
                    <div className="flex flex-col gap-3 xl:mb-9 lg:mb-6 mb-4">
                        {contacts.map((item) => (
                            <div key={item.title}>
                                <Card
                                    href={item.href}
                                    icon={item.icon}
                                    link={item.link}
                                    title={item.title}
                                />
                            </div>
                        ))}
                    </div>
                    {/* socials */}
                    <div className="flex gap-3 bg-white w-fit mx-auto lg:mb-0 mb-10">
                        {socials.map((item) => (
                            <a
                                key={item.link}
                                target="_blank"
                                href={item.link}
                                className="size-12 rounded shadow-card transition-all text-primary bg-white hover:bg-primary hover:text-white text-center flex items-center justify-center "
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                {/* form */}
                <div className="lg:max-w-[50%]">
                    <p className="text-text-secondary text-lg lg:text-left text-center lg:mb-12 mb-8">
                        There are many variations of passages of Lorem Ipsum
                        available. but the majority have suffered alte.
                    </p>
                    <form
                        action="#"
                        className="space-y-4 text-lg text-text-secondary"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            spellCheck="false"
                            required
                            className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#e6e8eb] focus:border-[#a35c6a]"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                spellCheck="false"
                                required
                                className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#e6e8eb] focus:border-[#a35c6a]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                                spellCheck="false"
                                className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#e6e8eb] focus:border-[#a35c6a]"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            spellCheck="false"
                            required
                            className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#e6e8eb] focus:border-[#a35c6a]"
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            spellCheck="false"
                            required
                            rows={3}
                            className="w-full p-3 focus:outline-none transition-all outline-none border-b-2 border-[#e6e8eb] focus:border-[#a35c6a]"
                        />
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="group relative md:w-auto w-full inline-flex justify-center items-center overflow-hidden rounded bg-primary px-6 py-3 tracking-widest text-white outline-hidden"
                            >
                                <span className="absolute -end-full transition-all group-hover:end-4 mb-1">
                                    <TbSend2 />
                                </span>
                                <span className="text-sm font-medium transition-all group-hover:me-4">
                                    Submit
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
