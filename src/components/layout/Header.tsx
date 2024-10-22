import React, { useContext } from 'react'
import { StoreContext } from '../../context/Store'
import { ShoppingBag } from 'lucide-react'

function Header() {
  const { setView } = useContext(StoreContext)

  return (
    <header className='bg-primary-2 w-full'>
      <div className='prose container mx-auto px-4 py-4 flex items-center'>
        <button 
          onClick={() => setView('landing')} 
          className='mr-2 text-primary-A hover:text-primary-0 transition-colors'
          aria-label="Go to home page"
        >
          <ShoppingBag className="h-6 w-6" />
        </button>

        <h1 className='text-primary-A text-left text-2xl font-bold text-outline shadow-primary-3'>
          Craft & Graft
        </h1>
      </div>
    </header>
  )
}

export default Header
