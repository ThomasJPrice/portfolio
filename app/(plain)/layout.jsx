import React from 'react'
import { EB_Garamond } from 'next/font/google'

const plainFont = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb-garamond',
  })

const PlainLayout = ({children}) => {
  return (
    <body id='plain' className={`${plainFont.className} ${plainFont.variable} bg-[#faf9f6] text-[#111111] text-[18px] leading-[1.7] m-0 py-16`}>
      {children}
    </body>
  )
}

export default PlainLayout