import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <main>
            <section className="section">
                <div className="pageNotFound">
                    <div className="row">
                        <div className="col-lg-12 txt-center fontsz-50 fontw-500">
                            <p>🙁</p>
                            <p>404. Page not found.</p>
                        </div>
                        <div className="col-lg-12 text-center pad-20">
                            <p>Sorry, we couldn't find the page you where looking for. We suggest that you return to <Link to='/' >home page </Link>.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
