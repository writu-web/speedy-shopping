import Nav from "./nav"

const Header = () => {
  return (
    <header className="bg-gray-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-white">My App</h1>   
        <Nav/>
      </div>
    </header>
  )
}
export default Header