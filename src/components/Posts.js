import React, { useMemo, useState } from 'react'
import SearchBar from './SearchBar'

const Posts = ({ posts }) => {
  const [search, setSearch] = useState('')

  const filteredPosts = useMemo(() => {
    return posts.filter(post => (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search]);

  return (
    <div className='p-10'>
      <SearchBar search={search} setSearch={setSearch} />
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {filteredPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

const Post = ({ post }) => {
  return (<div className='shadow p-4 rounded-md border border-gray-600'>
    <div>
      <p className='text-sm text-center font-medium  text-white'>{post.title}</p>
      <p className='text-xs mt-2 text-gray-300'>{post.body}</p>
    </div>
  </div>)
}

export default Posts