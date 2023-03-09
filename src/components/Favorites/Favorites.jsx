import React from 'react';
import { connect }  from 'react-redux';


 function Favorites({ myFavorites }) {

    return (
        <div>
            <h1>Favorites</h1>
            {
                myFavorites.map((fav) => {
                    return (
                        <div>
                            <h2>{fav.name}</h2>
                            <img src={fav.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect( mapStateToProps, null ) (Favorites)