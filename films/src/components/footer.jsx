function Footer(){
    return <footer className="page-footer teal accent-5">
        <div className="footer-copyright">
            <div className="container white-text">
                @{new Date().getFullYear()} D18sk
                <a className="white-text text-lighten-1 right" href="#!">Repository</a>
                </div>
            </div>
    </footer>
}
export {Footer};