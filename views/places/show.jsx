const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments...yet!
        </h3>
      )
      if (data.place.comments.length) {
        comments = data.place.comments.maps(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3> <strong>- {c.author} </strong></h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
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
            <h2>Comments</h2>
            <div className="row">
              {comments}
            </div>
            </main>
        </Def>
    )
}

module.exports = show