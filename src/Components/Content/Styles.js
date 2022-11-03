import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .8em;
    
`

export const Panel = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: 67fr 33fr;
`

export const Column = styled.div``

export const Galery = styled.div`
    display: flex;
    height: 46em;
    width: 100%;
    
    
`

export const GaleryContainer = styled.div`
    .smallTitle{
        font-size: .6em;
        color: rgba(0, 0, 0, 0.5);
    }
    .Title{
        font-size: 1.2em;
    }
    .stars__container{
        color: blue;
        font-size: .8em;
        :hover{
            cursor: pointer;
        }
    }
    .mostSelled{
        background-color: orange;
        color: white;
        border-radius: .2em;
        text-align: center;
        font-size: .7em;
        
    }
    .mostSelled-description{
        font-size: .6em;
        margin-left: 1em;
        color: blue;
    }
    .price{
        font-weight: 500;
    }
    .price__discount{
        font-size: .7em;
        color: green;
    }
    .discount__price{
        font-size: .8em;
        margin-top: -.5em;
        margin-top: -.9em;
    }
    .discount__price-price{
        font-size: 1em;
        color: green;
        margin-left: .6em;
    }
    .points{
        font-size: .6em;
        margin-top: -.7em;
    }
    .points__points{
        color:green;
    }
    .More{
        color:blue;
        font-size: .6em;
        
    }

    .Option{
        font-size: .7em;
    }
    .Sizes{
        display: flex;
        gap: .7em;
        font-size: .9em;
    }
    .Sizes_queen{
        border: 1px solid blue;
        border-radius: .4em;
        text-align: center;
        height: 1.5em;
        width: 4em;
        :hover{
            cursor:pointer;
        }
    }
    
    .Sizes_king{
        border: 1px dashed black;
        border-radius: .4em;
        text-align: center;
        height: 1.5em;
        width: 4em;
        :hover{
            cursor:pointer;
        }
    }
    .details{
        font-size: .7em;
        color: rgba(0, 0, 0, 0.5);
        
    }
    .list{
        font-size: .7em;
        
    }
    .list__item{
        margin-top: 1em;
    }
`

export const ImgContainer = styled.div`
    height: 31em;
    width: 25.6em;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 5em;
    
    >img{
        height: 55%;
        width: 100%;
    }
`

export const CarouselContainer = styled.div`
    height: 11.25em;
    width: 3.25em;
    position: absolute;
    top: 0.5em;
    left: -4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const CarouselItemContainer = styled.div`
    width: 3.2em;
    height: 3.2em;
    border: 1px solid rgba(0, 0, 0, 0.5);
    img{
        width: 100%;
        height: 100%;
    }
    :hover{
        cursor: pointer;
        border: 1px solid blue;
    }
`

export const Description = styled.div`
    padding: 3em;
    h4, p{
        color: rgba(0, 0, 0, 0.5);
        font-size: 1.18em;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        
    }
    h3{
        margin-top: 4em;
        margin-bottom: 1.5em;
    }
    .container a{
        color: blue;
        display: flex;
        align-items: center;
        margin-top: 1em;
    }

    .container a:hover{
        cursor: pointer;
    }
    .container__item{
        display: flex;
        align-items: center;
        gap: 1em;
        font-size: .82em;
        margin-left: .5em;
        
    }
    .container__item-icon{
        color: black;
        
    }
    .container__item-description{
        color: black;
        font-weight: 300;
        
    }
    .container__item-description <span>{
        font-weight: 600;
    }
`

export const PrevContainer = styled.div`
    height: 30em;
    width: 100%;
    padding: 0 2em;
    h2{
        font-weight: 400;
    }
`

export const ItemContainer = styled.div`
    display: flex;
    max-width: 45em;
    height: 25.4em;
    align-items: center;
    justify-content: space-around;
    
    
`

export const ContainerItem = styled.div`
    :hover{
        cursor:pointer;
    }
    height: 24.4em;
    width: 14.2em;
    padding: .5em;
    .item__img{
        width: 100%;
        height: 65%;
    }
    .item__discount{
        font-size: .7em;
        color: green;
        font-weight: 600;
    }
    .item__desription{
        font-size: .7em;
        color: rgba(0, 0, 0, 0.5);
    }
`

