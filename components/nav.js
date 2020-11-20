
const Nav = () => {
  return (
    <nav className="bg-white flex justify-center">
      <div className="container">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

          <div className="relative flex items-center justify-between h-16">

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

              </button>
            </div>

            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-blue-400 text-xl font-bold">HEALTH EXPLORE</h1>
            </div>

            <div className="flex items-center justify-center w-full">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a href="#" className="px-3 py-2 text-sm font-medium bg-transparent">PROFILE</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium bg-transparent">JOBS</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium bg-transparent">PROFESSIONAL NETWORK</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium bg-transparent">LOUNGE</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium bg-transparent">SALARY</a>
                </div>
              </div>
            </div>

            <div className="items-center justify-center">
              <div className="hidden sm:block sm:ml-6">
                <div className="space-x-4 flex items-center">
                  <button className="bg-transparent nav_btn_create_job text-center text-blue-400 font-bold border-2 border-blue-400 px-4 py-2 mx-4 rounded-lg">
                    CREATE JOB
                  </button>
                  <img className="h-12 w-12 mx-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <a href="#" className="flex px-4 py-2 text-sm nav_btn_create_job font-medium bg-transparent">LOG OUT</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Dashboard</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav;
