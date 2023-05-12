import Link from 'next/link';
export default function FirstPost() {
  return (
    <>
      <h1>page1</h1>
      <h2><Link href='/'>back</Link></h2>
    </>
  )
}