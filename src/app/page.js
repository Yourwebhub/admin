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
<meta name="description" content="Your Web Hub is a leading IT solutions company, specializing in web development, cloud services, and custom software." />
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
