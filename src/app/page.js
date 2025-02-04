import Choose from '@/components/Choose'
import FAQ from '@/components/Faq'
import Header from '@/components/Header'
import Mission from '@/components/Mission'
import Service from '@/components/Service'
import React from 'react'

const Page = () => {
  return (
    <>
  <title>Your Web Hub | All Your Digital Solutions</title>
    <meta name="google-site-verification" content="c0KwjJKmqa8880cfau1FywRuivriEkLKRi3KDHFkgQM" />
<meta name="description" content="Your Web Hub is a leading IT solutions company, specializing in web development, cloud services, and custom software." />
<meta name="keywords" content="yourwebhub, web development, cloud services, IT solutions, SEO services, e-commerce development, digital marketing, website design, enterprise software, mobile app development, UI/UX design, front-end development, back-end development, software engineering, WordPress development,  Laravel development, React development, Vue.js development, Python development, JavaScript programming, PHP development, HTML5, CSS3, SaaS development, cybersecurity solutions, data analytics, AI development, machine learning, chatbot development, branding solutions, online advertising, PPC campaigns, social media marketing, content marketing, lead generation, conversion optimization, website maintenance, API integration, CRM development, ERP solutions, hosting services, domain registration, SSL security, performance optimization, website speed enhancement, UX research, mobile optimization, cloud migration, blockchain development, fintech solutions, IoT solutions, database management,  IT consulting, agile development, software testing, cybersecurity audits, business automation, email marketing, paid search advertising,   marketplace development, progressive web apps (PWA), enterprise web applications, and startup solutions." />
<link rel="canonical" href="https://www.yourwebhub.store/" />
{/* <TransitionEffect/> */}
      <Header/>
      <Mission/>
      <Service/>
      <Choose/>
      <FAQ/>
    </>
  )
}

export default Page
