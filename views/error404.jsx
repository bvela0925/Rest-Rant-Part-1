const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Ope! Sorry, we can't find this page!</p>
                <div>
                <img src="/images/cute-kitten.jpg" alt="Kitten looking up" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Mark James</a> on <a href="https://placekitten.com/200/300">Place Kitten</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404