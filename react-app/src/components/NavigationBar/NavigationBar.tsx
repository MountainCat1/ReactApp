import './NavigationBar.css'
import {NavLink} from "react-router-dom";


export default function () {
    const getNavbarLinkClasses = (active : boolean) : string => {
        return active
            ? 'navbar-button navbar-button-active'
            : 'navbar-button'
    }

    return (<div className={'navigation-bar'}>
        <div className={'navbar-flex'}>

            <NavLink
                end
                className={({ isActive }) => getNavbarLinkClasses(isActive)}
                to={'/'}>
                Main page
            </NavLink>
            <NavLink
                className={({ isActive }) => getNavbarLinkClasses(isActive)}
                to={('/info')}>
                Info
            </NavLink>
            <NavLink
                className={({ isActive }) => getNavbarLinkClasses(isActive)}
                to={('/contact')}>
                Contact
            </NavLink>

        </div>
    </div>)
}