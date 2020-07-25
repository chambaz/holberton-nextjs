import Link from 'next/link'

export default function Post() {
  return (
    <main className="container mx-auto px-4 py-16">
      <Link href="/">
        <a className="text-blue-600">&lsaquo; Back to posts</a>
      </Link>
      <section className="pb-16 my-16">
        <h1 className="text-4xl font-semibold mb-8">This is the post title</h1>
        <div className="markdown">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            elementum tincidunt eros, et commodo ante efficitur porta. Mauris
            varius non purus non efficitur. In facilisis auctor nibh, vitae
            efficitur sapien viverra ac. Proin sed leo molestie, faucibus lacus
            quis, volutpat velit. Etiam vel elit eget ante maximus vehicula in
            vel neque. Nunc enim turpis, bibendum in lacinia sed, pulvinar sit
            amet sapien. Nunc eleifend consequat mi sed auctor. Nunc a orci
            neque. Nulla bibendum auctor quam a imperdiet. Etiam faucibus eros
            ut orci rhoncus varius. Vestibulum feugiat, neque ac dignissim
            maximus, eros diam consequat dui, non tempor tellus nisl rutrum
            tellus.
          </p>

          <p>
            Nullam finibus purus turpis, vel vehicula nisi porttitor commodo.
            Curabitur a mi quis ex hendrerit porta dictum ac dui. Vestibulum
            sagittis lorem massa, sed finibus turpis cursus nec. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Morbi in dolor sed nunc tristique mattis. Aliquam
            eget vestibulum tortor. Sed semper id urna non tincidunt. Etiam
            imperdiet, massa eu tempus tristique, arcu odio rutrum neque, eget
            laoreet velit sem lacinia purus. Suspendisse ut commodo odio,
            lacinia posuere lacus. Duis enim leo, congue et viverra nec, iaculis
            ut mauris. Proin pharetra mollis felis. Ut eleifend condimentum
            urna, id rhoncus justo sodales at. Nullam ultricies congue nunc sit
            amet commodo. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Sed dapibus nunc vel
            nisl scelerisque, at venenatis diam dictum. Praesent sit amet
            bibendum magna, non gravida ipsum.
          </p>

          <p>
            Aenean quis lectus nec sapien dictum egestas. Phasellus bibendum
            volutpat elit non congue. Aliquam non nunc eget nunc sollicitudin
            ornare sit amet in urna. Donec dignissim tortor vitae finibus
            tempus. Nullam tellus ipsum, consectetur malesuada imperdiet ac,
            accumsan nec enim. Etiam ut sapien a elit feugiat suscipit. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </section>
    </main>
  )
}
