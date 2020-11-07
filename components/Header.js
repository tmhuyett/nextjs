import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'








const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div>
</div>
        <div><i></i>
            <div className="inner">
            
                <h1 className="grayscale">James River Deer Barriers</h1>
                <p className="weCare">"we care"</p>
            </div>
        </div>
        <nav className="navigate">
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
