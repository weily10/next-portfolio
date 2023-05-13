import Link from 'next/link';
export default function Menu() {
  return (
    <>
      <div className='flex justify-between items-center'>
        
        <div className='flex list-none space-x-6 mr-12'>
          <div className='mr-12'> 
            logo
          </div>
          <li>
            <Link href="#about">about</Link>
          </li>
          <li>
            <Link href="#tech">tech</Link>
          </li>
          <li>
            <Link href="#projects">projects</Link>
          </li>
        </div>
        <div className='flex list-none space-x-6 '>
          <Link href="www.github.com" >git</Link>
          <Link href="www.github.com" >Behance</Link>
        </div>
      </div>

    </>
  )
}