import styled from "styled-components";
import React from "react";

export const Container = styled.div`
    width:100%;
    height: 6em;
    background-color: var(--mainYellow);
    
    
    
`

export const Wrapper = styled.div`
    max-width: 72em;
    padding: .7em;
    display:flex;
    aling-items: center;
    justify-content: space-around;
    gap: 1em;
    margin: 0 auto;
    
    img{
        width: 8em;
        height: 2em;
        margin-top: .4em;
    }
`

export const InputContainer = styled.div`
    width:35.5em;
    height: 5.3emem;
    background-color: white;
    padding: .2em;
    input{
        width: 93.8%;
        height: 100%;
        border:none;
        text-align: left;
    }
    button{
        border:none;
        border-left:1px solid grey;
        height: 1.5em;
        width:2em;
        text-align: center;
        background-color: white;
         margin : .5em auto;
        
        
    }
    button:hover{
        cursor:pointer;
    }
`

export const WrapperContainer = styled.div`
    display:flex;
    gap: 3em;
    
`


export const Offers = styled.div`

        a{
            text-decoration: none;
            color: rgba(0, 0, 0, 0.8);
        }
        color: rgba(0, 0, 0, 0.5);       
        .iconMoney{
            margin-top: .3em;
            color: darkGray;
            margin-bottom: -.2em;
            margin-right: .3em;
        }
`

export const WrapperList = styled.div`
        width: 49em;
        height: 2em;
        margin-top: -.7em;
        display:flex;
        
`

export const WrapperMenu = styled.div`
        width: 19em;
        height: 2em;
        margin-top: -.7em;
`

export const Location = styled.div`
        width: 7.5em;
        height: 2.5em;
        display: flex;
        margin-left: 1.85em;
        color: rgba(0, 0, 0, 0.9);
        gap: .6em;
        .ArrowIcon{
            font-size: 1.6em;
        }
        .location__location{
            font-size: .7em;
            margin-top: -1.1em;
            
        }
        .location__place{
            margin-top: -.7em;
        }
`

export const List = styled.div`

        .List__list{
            list-style: none;
            display: flex;
            font-size: .75em;
            gap: .8em;
            margin-left: 1.3em;
        }
        .List__item a{
            text-decoration: none;
            color: rgba(0, 0, 0, 0.6);
        }
        .List__menu{
            display: flex;
            height: 1em;
            gap:.5em;
            font-size: .8em;
            list-style: none;
            align-items: center;

        }

        .List__menu-item a{
            text-decoration: none;
            color: rgba(0, 0, 0, 0.9);
        }

        .List__menu-item{
            margin-left:.2em;
        }

        .profilePic{
            width: 2em;
            height: 2em;
            border-radius: 50%;
            margin-top: -.9em;
            
        }
`