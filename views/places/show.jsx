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
            <h1>Show Page</h1>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 

            </main>
        </Def>
    )
}

module.exports = show
