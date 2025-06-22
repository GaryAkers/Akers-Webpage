

import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      <Head>
        <title>Gary Akers Mortgage Solutions - Home Loans, Refinance & More</title>
        <meta name="description" content="Explore mortgage solutions with Gary Akers including home loans, refinancing, investment property loans, and first-time buyer support." />
        <meta name="keywords" content="mortgage, home loan, refinance, FHA, VA, USDA, Gary Akers, Central Funding, DSCR, investment property, reverse mortgage, first-time buyer" />
      </Head>
      <motion.div className="p-6 space-y-12" initial="initial" animate="animate">
        <motion.nav className="flex justify-between items-center py-4 border-b" {...fadeUp}>
          <h1 className="text-2xl font-bold text-primary">Gary Akers Mortgage</h1>
          <ul className="flex gap-6 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </motion.nav>

        <motion.header {...fadeUp} className="text-center space-y-4 bg-[url('/hero.jpg')] bg-cover bg-center p-12 rounded-xl text-white">
          <h1 className="text-4xl font-bold">Akers Mortgage Solutions</h1>
          <p className="text-lg max-w-xl mx-auto">Empowering your path to homeownership with expert lending guidance.</p>
        </motion.header>

        <motion.section id="contact" className="p-6 bg-muted rounded-xl" {...fadeUp}>
          <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
          <form className="grid gap-4 max-w-xl mx-auto" action="mailto:GaryAkers@CentralFundingInc.com" method="POST" encType="text/plain">
            <input type="text" name="Full Name" placeholder="Full Name" className="p-2 rounded border" required />
            <input type="tel" name="Phone Number" placeholder="Phone Number" className="p-2 rounded border" required />
            <input type="email" name="Email" placeholder="Email Address" className="p-2 rounded border" required />
            <textarea name="Message" placeholder="Your Message" className="p-2 rounded border" rows="4" required></textarea>
            <button type="submit" className="w-full bg-black text-white p-2 rounded">Send Message</button>
          </form>
        </motion.section>

        <motion.footer className="border-t pt-6 text-sm text-muted-foreground text-center" {...fadeUp}>
          <p>© {new Date().getFullYear()} Gary Akers Mortgage Solutions. All rights reserved.</p>
          <p>NMLS #1889261 NMLS #1385251 | Equal Housing Lender</p>
        </motion.footer>
      </motion.div>
    </>
  )
}
