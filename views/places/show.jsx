const React = require('react')
const Def = require('../default')

function show (data) {
    let rating = (
        <h2 className="inactive">
          No ratings...yet!
        </h2>
      )
    let comments = (
        <h2 className="inactive">
          Read some comments!
        </h2>
      )
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <h3>Located in {data.place.city}, {data.place.state}</h3>
              </div>
              <div className="col-sm-6">
                <h2>
                  Description
                </h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
              
            <h1>Show Page</h1>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
            </div>
            </div>
            </main>
        </Def>
    )
}

module.exports = show
