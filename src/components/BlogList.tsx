const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function BlogList({ data }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((item) => (
            <article key={item.id} className="flex max-w-xl flex-col items-start justify-between">
              <img src={item.feature_image} alt="" className="rounded-lg h-56 bg-gray-50" />

              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.datetime} className="text-gray-500">
                  {item.updated_at}
                </time>
                {/* {data.tags.map((item) => (
                <a
                  href={item.slug}
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {item.name}
                </a>
                ))} */}
              </div>
              <div className="group relative">
                <h3 className="mt-3 h-10 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={item.slug}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{item.excerpt}</p>
              </div>
              {/* <div className="relative mt-8 flex items-center gap-x-4">
                {item.primary_author.profile_image && <img src={item.primary_author.profile_image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={item.primary_author.url}>
                      <span className="absolute inset-0" />
                      {item.primary_author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{item.primary_author.bio}</p>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
