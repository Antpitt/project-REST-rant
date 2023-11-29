const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="./images/puppy.jpg" alt="Cute puppy"/>
              </div>
              Photo by <a href="https://unsplash.com/@priscilladupreez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Priscilla Du Preez 🇨🇦</a> on <a href="https://unsplash.com/photos/black-pug-puppy-on-green-textile-SIgxB-9GdR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </main>
      </Def>
    )
  }
  
module.exports = error404
