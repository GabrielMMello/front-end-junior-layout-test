import "./Nav.css"
import NavElement from "./NavElement/NavElement";

function Nav() {
    const SMALL = "smallElement";
    const MEDIUM = "mediumElement"
    const BIG = "bigElement";

    const TEXT_NATURE = "Lorem ipsum dolor sit amet"
    const TEXT_DAILY = "Praesent tincidunt consectetur diam"
    const TEXT_TOGETHER = "Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum"
    const TEXT_ANALYSIS = "Duis sollicitudin mauris vitae venenatis aliquet"
    const TEXT_PICTURES = "Quisque eu nisl purus"

    return (
        <nav className="Nav">
            <div className="TopNav">
                <h2>categories</h2>
                <p>discover new possibilities to help you today</p>
            </div>
            <ul>
                <li><NavElement header="nature"     text={TEXT_NATURE}      sizeClass={SMALL}   /></li>
                <li><NavElement header="daily"      text={TEXT_DAILY}       sizeClass={MEDIUM}  /></li>
                <li><NavElement header="together"   text={TEXT_TOGETHER}    sizeClass={BIG}     /></li>
                <li><NavElement header="analysis"   text={TEXT_ANALYSIS}    sizeClass={MEDIUM}  /></li>
                <li><NavElement header="pictures"   text={TEXT_PICTURES}    sizeClass={SMALL}   /></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;