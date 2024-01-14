const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="../images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                </div>
                Photo By <a href="https://unsplash.com/@seefromthesky">Ishan</a> on <a href="https://unsplash.com/">Unsplash</a>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
