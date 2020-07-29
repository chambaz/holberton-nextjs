import Post from '../components/post'

export default function Home(props) {
  return (
    <main className="container mx-auto px-4">
      <section className="pb-16 mb-8">
        <h2 className="text-4xl font-semibold mt-8 mb-8">Holberton feed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {props.posts.map((post, i) => {
            return <Post key={i} data={post} />
          })}
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_URL}/api/posts/all`)
  const data = await res.json()

  return { props: data }
}
