const images = [
    'https://images.unsplash.com/photo-1491406213019-05b162a72c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1942&q=80',
    
    'https://images.unsplash.com/photo-1529374890316-47a8e9f3177e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    
    'https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    ]
    
    const titles = [
      'as-is',
      'simple',
      'minimal'
    ]
    
    const Card = ({ img, title }) => {
      return (
        <div className="card">
          <div className="card__img">
            <img src={ img } class="img-responsive" />
          </div>
          <h2 className="card__title">{ title }</h2>
        </div>
      )
    }
    
    const Grid = () => {
      return (
       <div className="grid">
          <h1 className="grid__title">CSS <br/>Asymmetry</h1>
          <span></span>
          { images.map( (img, i) => <Card img={img} title={titles[i]} /> )}
       </div>
      )
    }
    
    
    ReactDOM.render(
      <Grid />, 
      document.getElementById('container')
    )
     
    /* ===================================
    => this project was inspired from here:
    => https://www.pinterest.co.uk/pin/148900331417410147/
     =================================== 
    */