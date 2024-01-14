const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
          </main>
          <body>
            <div>
            <h2>Ratings</h2>
            <p>Not Rated</p>
            </div>
            <div>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </div>
          </body>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
             Edit
        </a>     
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
        </form> 
        </Def>
    )
}

module.exports = show
