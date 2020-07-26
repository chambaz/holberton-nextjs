import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

export default function Post(props) {
  return (
    <article className="bg-white shadow">
      <Link href={`/posts/${props.data.id}`}>
        <div className="cursor-pointer">
          <img src="https://via.placeholder.com/800x450" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{props.data.title}</h3>
            <p className="mt-2">{props.data.excerpt}</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-end px-2 pb-2">
        <FaRegHeart className="cursor-pointer" />
      </div>
    </article>
  )
}
