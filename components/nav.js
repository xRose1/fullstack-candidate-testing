const links = [
  { href: '#', label: 'Profile' },
  { href: '#', label: 'Jobs' },
  { href: '#', label: 'Professional Network' },
  { href: '#', label: 'Lounge' },
  { href: '#', label: 'Salary' },
]

export default function Nav() {
  return (

    <nav class="bg-white">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="inset-y-0 left-0 flex items-center">
            <label data-toggle="sidebar" className="pointer-cursor lg:hidden block">
              <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="h-8 w-auto uppercase px-3 py-2 rounded-md text-sm font-medium text-blue-clipboard">Health Explore</a>
            </div>
          </div>
          <div class="flex-grow md:flex-grow-0 flex justify-between">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                {links.map(({ href, label }) => (
                  <a key={label} href={href} class="uppercase px-3 py-2 rounded-md text-sm font-normal text-black">{label}</a>
                ))}
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex flex-row items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="hidden sm:flex mr-3 relative">
              <button class="h-10 px-5 text-sm text-blue-clipboard transition-colors duration-150 border border-blue-clipboard rounded-lg focus:shadow-outline hover:bg-blue-clipboard hover:text-blue-clipboard uppercase">Create Job</button>
            </div>
            <div class="relative">
              <button class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                <div class="relative inline-block">
                <div class="border-primary bg-blue-clipboard text-primary w-8 h-8 rounded-full inline-flex items-center align-middle justify-center text-md text-white uppercase">Jo</div>
                  <span class="absolute top-0 right-0 uppercase font-bold inline-flex text-center p-2 leading-none text-2xs h-4 w-4 inline-flex items-center justify-center rounded-full bg-red-500 text-white shadow-outline-white border-2 border-white transform translate-x-1/2 -translate-y-1/2">2</span>
                </div>
              </button>
            </div>
            <div class="hidden ml-3 sm:flex">
              <a href="#" class="uppercase px-3 py-2 rounded-md text-sm font-normal text-black">Logout</a>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {links.map(({ href, label }) => (
            <a key={label} href={href} class="uppercase block px-3 py-2 rounded-md text-base font-medium text-black">{label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
