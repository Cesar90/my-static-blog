import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'
import Layout from '../components/Layout';
import { sortByDate } from '../utils'
import { IPosts } from '../utils/interface'
import Post from '../components/Post'
import Link from 'next/link'

export default function HomePage({posts}: IPosts) {
  return (
    <Layout>
        <h1 className='text-5xl border-b-4 p-5 font-bold'>
          Latest Posts
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, index) =><Post key={index} post={post} />)}
        </div>
        <Link href='/blog'>
          <a className="block text-center
            border border-gray-500
            text-gray-800 rounded-md 
            py-4 my-5 transition
            duration-500 ease select-none
            hover:text-white hover:bg-gray-900
            focus:outline-none focus:shadow-outline w-full">
              All Posts
            </a>
        </Link>
    </Layout>
  )
}

export async function getStaticProps(){
  //We get all the posts that are in the post folder
  const files = fs.readdirSync(path.join('posts'))
  //Convert each post to object
  const posts  = files.map(filename => {
    //Get only the name of the file in this case slug
    const slug = filename.replace('.md','');
    //Get only text from file
    const mardownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    //Convert text to object
    const { data:frontmatter }: any = matter(mardownWithMeta)
    //Create object as follows
    // {
    //   slug: 'javascript-performance-tips',
    //   frontmatter: {
    //     title: 'JavaScript Performance Tips',
    //     date: 'March 4, 2021',
    //     excerpt: 'We will look at 10 simple tips and tricks to increase the speed of your code when writing JS',
    //     cover_image: '/images/posts/img1.jpg',
    //     category: 'Javascript'
    //   }
    // }
    const result = {
      slug,
      frontmatter
    }

    return result
  })
  //Sort posts by date
  return {
    props:{
      posts: posts.sort(sortByDate)
    }
  }
}