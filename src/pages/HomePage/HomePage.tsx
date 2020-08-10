import React from 'react'

// styles
import "./HomePage.scss"

// components
import SignIn from '../../components/SignIn/SignIn'


 const HomePage:React.FC = ():JSX.Element => {
    return (
        <div className="homepage">
            <div className="homepage__form">
               <SignIn/>
            </div>
        </div>
    )
}

export default HomePage