import './TicketsPage.css'
import {NavLink} from "react-router-dom";



export default function (){


    return(<div className={'page-content'}>
        <h1 className='gradient-text'>
            Tickets
        </h1>

        <h3>Here will be some tickets!</h3>

        <div className='gradient-border'>
            <div className="card-container gradient-border-content">
                <div className='card'>
                    <div className='card-content'>
                        <h2 className='card-title'>
                            Mega Tickets
                        </h2>
                        <p className='card-body'>
                            It's super mega cooool ticket. You want it! :D
                        </p>
                        <NavLink className='card-button' to='/ticket/XD'>
                            Learn more
                        </NavLink>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <h2 className='card-title'>
                            Mega Tickets
                        </h2>
                        <p className='card-body'>
                            It's super mega cooool ticket. You want it! :D
                        </p>
                        <NavLink className='card-button' to='/ticket/XD'>
                            Learn more
                        </NavLink>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <h2 className='card-title'>
                            Mega Tickets
                        </h2>
                        <p className='card-body'>
                            It's super mega cooool ticket. You want it! :D
                        </p>
                        <NavLink className='card-button' to='/ticket/XD'>
                            Learn more
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>


    </div>)
}