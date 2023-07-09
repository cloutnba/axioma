import './Header.scss';

const Header = () => {
    return(
        <header className="header container">
            <div className="header__logo-wrapper">
                <img src="https://axioma.team/static/media/logo.b6615b595435e1c176bb.png" alt="logo" className="header__logo"/>
            </div>
        </header>
    )
}

export default Header;