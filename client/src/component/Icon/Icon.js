import React from 'react';
import logo from '../../assets/image/Logo.png';
import shop from '../../assets/icons/store.svg';
import top from '../../assets/icons/top.svg';
import add from '../../assets/icons/add.svg';
import tag from '../../assets/icons/tag.svg';
import map from '../../assets/icons/map.svg'
import classes from './Icon.module.css';
import Aux from '../../hoc/Aux/aux'

const icon = (props) => {


    let icon = null ;
    switch(props.iconType)
    {
        case ('logo') :
            icon = <img src={logo} alt="NearByYou" style={{height:props.height,    filter: "brightness(0) invert(1)"}}  />
            break;
        case ('shop') :
            icon = <img src={shop} alt="shop" style={{height:props.height}} />
            break;
        case ('tag') :
            icon = <img src={tag} alt="tag" style={{height:props.height}} />
            break;
        case ('top') :
            icon = <img src={top} alt="top" style={{height:props.height}} />
            break;
        case ('add') :
            icon = <img src={add} alt="add" style={{height:props.height}} />
            break;
        case ('map') :
            icon = <img src={map} alt="map" style={{height:props.height}} />
            break;
        case ('login') :
            icon = <a href="">LOG IN</a>
            break;
        case ('register') :
            icon = <a href="">REGISTER</a>
            break;
        case ('forgot') :
            icon = <a href="">FORGOT PASSWORD</a>
            break;

    }

    let iconTitle = null;
    if(props.title)
        iconTitle = <span>{props.title}</span>

    return (
        <div className={classes.Icon}>
            {icon}
            {iconTitle}
        </div>

    );
};

export default icon;
