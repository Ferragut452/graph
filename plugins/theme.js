
  const TButton = {
    fixedClasses: 'focus:outline-none focus:shadow-outline inline-flex items-center transition ease-in-out duration-150',
    classes: 'text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 text-sm font-medium border border-transparent px-3 py-2 rounded-md',
    variants: {
      error: 'text-white bg-red-600 hover:bg-red-500 focus:border-red-700  active:bg-red-700 text-sm font-medium border border-transparent px-3 py-2 rounded-md',
      success: 'text-white bg-green-600 hover:bg-green-500 focus:border-green-700 active:bg-green-700 text-sm font-medium border border-transparent px-3 py-2 rounded-md',
      funny: 'text-white bg-orange-600 hover:bg-orange-500 focus:border-orange-700 active:bg-orange-700 text-sm font-medium uppercase border-orange-200 px-4 py-2 border-2 rounded-full shadow',
      link: 'underline text-orange-500 px-3 py-2 hover:bg-orange-100 rounded'
    }
  }
  const TTag = {
    variants: {
      badge: 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800',
    }
  }

  const TCard = {
    fixedClasses: {
      wrapper: 'rounded max-w-lg mx-auto shadow',
      body: 'p-3',
      header: 'p-3 border-b',
      footer: 'p-3 border-t'
    },
    classes: {
      wrapper: 'bg-white',
      body: '',
      header: '',
      footer: ''
    },
    variants: {
      danger: {
        wrapper: 'bg-red-100 text-red-700',
        header: 'border-red-200 text-red-700',
        footer: 'border-red-200 bg-red-100 text-red-700'
      },
      clean: {
        wrapper: 'rounded',
        footer: 'bg-gray-100 ',
        body: 'p-3 text-sm text-gray-700'
      }
    }
  }

  const TInput = {
    classes: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
    variants: {
      error: 'text-red-600 bg-red-100 focus:outline-none focus:shadow-outline border border-red-300 rounded py-2 px-4 block w-full leading-normal placeholder-red-300',
      success: 'text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border border-green-300 rounded py-2 px-4 block w-full leading-normal placeholder-green-300',
      fun: 'bg-orange-100 block border-2 border-orange-300 focus:border-orange-500 focus:outline-none leading-normal px-4 py-3 rounded-full shadow-inner w-full placeholder-orange-300'
    }
  }
  
  const settings = {
    TInput,
    TButton,
    TTag,
    TCard
  }
  
  export default settings