import Link from 'next/link'
import React from 'react'

const PlainCVPage = () => {
  return (
    <main className='max-w-xl mx-auto plain'>

      <div>
        <h1>Thomas Price</h1>
        <p>I'm an aspiring Software Engineer with a strong passion for building web applications with great user experiences.</p>
      </div>

      {/* summary */}
      <section>
        <h2>Summary</h2>
        <p>I am an A Level student passionate about web development and software engineering. Alongside my studies, I run my own business, providing web solutions for local companies and managing marketing strategies. I have experience in developing websites using modern frameworks like Next.js and managing CRM implementations to optimise business operations.</p>
      </section>

      {/* projects */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            (25) <Link href='https://babyblueitconsulting.com/' target='_blank'>Baby Blue IT</Link> - IT consulting website
          </li>
          <li>
            (24) <Link href='https://paapo.co.uk/' target='_blank'>Paapo</Link> - Financial stability + help website
          </li>
          <li>
            (24) <Link href='https://stampp.it/' target='_blank'>Stampp.it</Link> - Digital loyalty card saas (mine)
          </li>
          <li>
            (24) <Link href='https://perranbeachhouse.com/' target='_blank'>Perran Beach House</Link> - Booking system for a holiday home
          </li>
          <li>
            (23) <Link href='https://houseofhandsomebedford.co.uk/' target='_blank'>House of Handsome</Link> - Barbershop website
          </li>
          <li>
            (23) <Link href='https://song-squad.co.uk/' target='_blank'>Song Squad</Link> - Website for a performing arts club
          </li>
        </ul>
      </section>


      <section>
        <h2 >Experience</h2>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h3>Seasons Garden Centre</h3>
              <em className='-mt-1 block'>Sales Assistant</em>
              <p className="text-sm mt-1">Serving customers, handling queries.</p>
            </div>
            <p className="text-sm text-right sm:text-left sm:w-32 mt-2 sm:mt-0 sm:ml-4 text-gray-700">2024 - Present</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h3>Baby Blue</h3>
              <em className='-mt-1 block'>Web Developer & Tech Assistant</em>
              <p className="text-sm mt-1">Website rebuild, CMS, CRM and quoting system.</p>
            </div>
            <p className="text-sm text-right sm:text-left sm:w-32 mt-2 sm:mt-0 sm:ml-4 text-gray-700">2024 - Present</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h3>HATS Drama Group</h3>
              <em className='-mt-1 block'>Volunteer Lighting and Sound Lead</em>
              <p className="text-sm mt-1">Programming shows and live performances.</p>
            </div>
            <p className="text-sm text-right sm:text-left sm:w-32 mt-2 sm:mt-0 sm:ml-4 text-gray-700">2021 - Present</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Education</h2>

        <div className="space-y-4">
          <div>
            <div className="flex gap-1 items-baseline">
              <h3 className="text-base leading-tight">Kimberley College</h3>
              <em className="text-sm text-gray-700">(2024 - Present)</em>
            </div>
            <p>Predicted A*s in Mathematics, Further Mathematics, Computer Science and Economics.</p>
          </div>

          <div>
            <div className="flex gap-1 items-baseline">
              <h3 className="text-base leading-tight">Wixams Academy</h3>
              <em className="text-sm text-gray-700">(2019 - 2024)</em>
            </div>
            <p>Achieved 9999999887 across a range of subjects including Maths, English and Sciences.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Contact</h2>

        <ul>
          <li>
            <span>Email: </span>
            <Link target='_blank' href="mailto:thomasjprice2@gmail.com">
              thomasjprice2@gmail.com
            </Link>
          </li>
          <li>
            <span>GitHub: </span>
            <Link target='_blank' href="https://github.com/ThomasJPrice">
              github.com/thomasjprice
            </Link>
          </li>
          <li>
            <span>LinkedIn: </span>
            <Link target='_blank' href="https://www.linkedin.com/in/thomas-price-2a48b4262/">
              Thomas Price
            </Link>
          </li>
        </ul>
      </section>


    </main>
  )
}

export default PlainCVPage