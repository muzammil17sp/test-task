import  { useEffect, useState } from 'react'

const useFetchPosts = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const postsDocs = await fetch('https://jsonplaceholder.typicode.com/posts')
      const allPosts = await postsDocs.json()
      setPosts(allPosts)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return {posts, loading, error}
}

export default useFetchPosts