import Image from 'next/image'
import Link from 'next/link'
import img from './images/profile.jpg'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">

      <div className="z-10 w-full px-24  items-center  font-mono text-sm">
        <Header></Header>
        <Hero></Hero>

        
        
        {/* <Image
          src={img} // Route of the image file
          height={300} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
          alt="Your Name">
        </Image> */}
       

      </div>



      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div> */}
    </main>
  )
}
