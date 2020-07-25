import { useState } from 'react'
import Link from 'next/link'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

export default function Post(props) {
  const [liked, setLiked] = useState(false)

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
        <div onClick={(e) => setLiked(!liked)} className="cursor-pointer">
          {liked ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
    </article>
  )
}
