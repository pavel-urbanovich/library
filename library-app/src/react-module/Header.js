import './Header.css'

function Header() {
  const menuArr = [
    <li className='Link-item' key={1}>
      <a href="google.com" className='Link-item-list'>
        About
      </a>
    </li>,
    <li className='Link-item' key={2}>
      <a href="google.com" className='Link-item-list'>
        Favorites
      </a>
    </li>,
    <li className='Link-item' key={3}>
      <a href="google.com" className='Link-item-list'>
        Coffee shop
      </a>
    </li>,
    <li className='Link-item' key={4}>
    <a href="google.com" className='Link-item-list'>
      Contacts
    </a>
    </li>,
    <li className='Link-item' key={5}>
    <a href="google.com" className='Link-item-list'>
      Library Card
    </a>
    </li>
  ]


  return (
    <header className="Header">
      <div className='Container'>
        <div className='Header-container'>
          <div className='Header-name'>
          Brooklyn Public Library
          </div>
          <nav className='Navigation'>
            <ul className='Menu'>
              {menuArr}
            </ul>
          </nav>
          <div className = "Icon-profile"></div>
        </div>
      </div>
    </header>
    );
  }

  export default Header;