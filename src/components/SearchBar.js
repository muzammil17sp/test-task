import React from 'react'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className='mb-10'>
      <div className='w-full md:w-2/4 mx-auto rounded-md flex items-center bg-white overflow-hidden pr-2'>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search using title and body' className='w-full text-sm outline-none  placeholder:text-xs px-2 py-2' />
        <div className=''><Search /></div>
      </div>
    </div>
  )
}

const Search = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

export default SearchBar