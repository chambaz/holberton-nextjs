import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default function Post(props) {
  return (
    <main className="container mx-auto px-4 py-16">
      <Link href="/">
        <a className="text-blue-600">&lsaquo; Back to posts</a>
      </Link>
      <section className="pb-16 my-16">
        <h1 className="text-4xl font-semibold mb-8">{props.post.title}</h1>
        <div className="markdown">
          <ReactMarkdown source={props.post.content} />
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${context.params.id}`
  )
  const data = await res.json()

  return { props: data }
}
