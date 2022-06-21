import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <nav className='flex flex-row justify-between px-2'>
        Xavier

        <ul className='flex space-x-3'>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact Me</li>
        </ul>
      </nav>


      <p className='font-bold text-5xl'>
        <span className='text-purple-600'>Hello, </span>
        I'm Xavier Ong</p>
    </div>
  );
}
