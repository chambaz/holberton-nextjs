import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

const posts = [
  {
    id: 1,
    title: 'This is a post',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim est ac dignissim ullamcorper. Curabitur aliquam id felis a vestibulum.',
  },
  {
    id: 2,
    title: 'This is another post',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim est ac dignissim ullamcorper. Curabitur aliquam id felis a vestibulum.',
  },
  {
    id: 3,
    title: 'This is a great post',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim est ac dignissim ullamcorper. Curabitur aliquam id felis a vestibulum.',
  },
  {
    id: 4,
    title: 'This is a post',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim est ac dignissim ullamcorper. Curabitur aliquam id felis a vestibulum.',
  },
  {
    id: 5,
    title: 'This is another post',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim est ac dignissim ullamcorper. Curabitur aliquam id felis a vestibulum.',
  },
  {
    id: 6,
    title: 'This is a great post',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim est ac dignissim ullamcorper. Curabitur aliquam id felis a vestibulum.',
  },
]

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="pb-16 mb-8">
        <h2 className="text-4xl font-semibold mt-8 mb-8">Holberton feed</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {posts.map((post) => {
            return (
              <article className="bg-white shadow">
                <Link href={`/posts/${post.id}`}>
                  <div className="cursor-pointer">
                    <img src="https://via.placeholder.com/800x450" />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{post.title}</h3>
                      <p className="mt-2">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-end px-2 pb-2">
                  <FaRegHeart className="cursor-pointer" />
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
