
import useFetchPosts from './hooks/useFetchPosts';
import Loader from './components/Loader';
import Posts from './components/Posts';

function App() {
  const { posts, loading, error } = useFetchPosts()

  const renderContent = () => {
    if (error) {
      return <p className='text-red-500 py-10 text-center'>{error}</p>
    } else if (loading) return <Loader />
    
    else return <Posts posts={posts} />
  }

  return (
    <div className="bg-black min-h-screen">
      {renderContent()}
    </div>
  );
}

export default App;
