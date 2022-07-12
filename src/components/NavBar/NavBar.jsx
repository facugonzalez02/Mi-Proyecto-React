const NavBar = () => {

    const estilosNav = {backgroundColor: 'white', listStyle: 'none', display:'flex', justifyContent:'space-evenly'}
    const li = {display: 'inline-block', padding: '20px', color: 'black'}

    return (
          <div className='NavBar'>
              <div>
                <img src="src/Logo.png" alt="LOGO"/>
              </div>
            <ul style = {estilosNav}>          
              <a href="#"><li style={li}>Inicio</li></a>
              <a href="#"><li style={li}>Productos</li></a>
              <a href="#"><li style={li}>Plan de entrenamientos</li></a>
              <a href="#"><li style={li}>Contacto</li></a>
            </ul>
          </div>
      )
}

export default NavBar
