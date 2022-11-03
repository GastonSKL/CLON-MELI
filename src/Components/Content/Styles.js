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
    border-bottom: 1px solid rgba(0,0,0, 0.5);
    padding-bottom: 2em;
    
`

export const Column = styled.div`
    position: relative;
    
    .iconHeart{
        font-size: 1.5em;
        color: red;
        position:absolute;
        right: 10px;
        top: 5px;

    }
`

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
        padding-bottom: 4em;
        border-bottom: 1px solid rgba(0,0,0, 0.3);
        border-top: 1px solid rgba(0,0,0, 0.3);
        
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

export const DescriptionContainer = styled.div`
    
    position: sticky;
    top:0;
    right:0;
    
`

export const Box = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: .7em;
    margin: .5em .2em;
    padding:.5em;

    .delivery__container{
        display:flex;
        gap: 1em;
    }

    .delivery{
        display: flex;
        flex-direction: column;
        align-items: left;
        
        
    }

    .delivery__icon{
        color:green;
    }

    .delivery__arrival{
        color:green;
    }

    .delivery__direction{
        font-size: .7em;
        color: blue;
        margin-top: -.8em;
        :hover{
            cursor:pointer;
        }
    }

    .store{
        display:flex;
        align-items: center;
        justify-content: start;
        margin-left: .5em;
        gap: 1em;
    }

    .store__img{
        width: 2.5em;
        height: 2.5em;
    }

    .store__name{
        font-size:.7em;
        a{
            color:blue;
            :hover{
                cursor: pointer;
            }
        }
        margin-bottom: -.4em;
    }

    .store__sells{
        font-size: .7em;
        margin-bottom: -.4em;
    }

    .store__facturation{
        font-size:.7em;
        color: rgba(0,0,0,0.5);
    }

    .stock{
        font-size: .8em;
        margin-left: .5em;
    }

    .quantity{
        font-size:.8em;
        margin-left:.5em;
    }

    .buy{
        display:flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 94%;
        height: 3em;
        border:none;
        background-color: #3483fa;
        color: white;
        font-weight: bold;
        border-radius:.6em;
        :hover{
            cursor:pointer;

        }
    }

    .protected{
        margin-top: 2em;
        display: flex;
        font-size: .8em;
        color: rgba(0,0,0,0.5);
        align-items: center;
        gap: .5em;
        a{
            text-decoration: none;
        }
    }

    .points{
        display: flex;
        font-size: .8em;
        color: rgba(0,0,0,0.5);
        align-items: center;
        gap: .5em;
        a{
            text-decoration: none;
        }
    }

    .warranty{
        display: flex;
        font-size: .8em;
        color: rgba(0,0,0,0.5);
        align-items: center;
        gap: .5em;
    }

    .medal{
        color: green;
        margin-top: 1em;
        margin-left: .8em;
    }

    .advertisement{
        font-size: .8em;
        color: rgba(0, 0, 0, 0.5);
        margin-top:-.5em;
        margin-left:.8em;
    }

    .traker{
        margin-bottom: 4em;
    }

    .traker__bar{
        height: 1em;
        width: 90%;
        margin: 1em auto;
        border-radius: .4em;
        overflow: hidden;
        display: flex;
    }

    .traker__bar-section1{

        width: 75%;
        height: 100%;
        background-color: #f1fdd7;
        
    }

    .traker__bar-section2{
        width:25%;
        height:100%;
        background-color: #39b54a;

    }

    .traker__description{
        
        display: flex;
        align-items: start;
        
        
        
    }

    .traker__description-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 4em;
    }

    .item__title{
        font-size:1.2em;
    }

    .item__description{
        margin-top: -1em;
        font-size: .75em;
        color: rgba(0,0,0, 0.8);
    }

    .item1{
        border-right: 1px solid rgba(0,0,0,0.5);
    }

    .item2{
        border-right: 1px solid rgba(0,0,0,0.5);
    }

    .traker__link{
        text-decoration: none;
        margin-left: 0.8em;
        font-size: .8em;
    }
    .creditInfo{
        display: flex;
        align-items: center;
        gap: 1em;
        flex-wrap: wrap;
    }

    .paymenmeans{
        font-size: .8em;
        text-decoration: none;
    }
`

export const SimilProducts = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.5em;
    .simil__title{
        font-weight: 500;
    }
`

export const Comparation = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 183px);
    grid-template-rows: auto;
    grid-auto-rows: auto;
    border-bottom: 1px solid rgba(0,0,0,.2);
    padding: 1em;
    
    .item{
        width: 14.2em;
        height: 14.2em;
        text-align: center;
        font-size:.7em;
        margin-bottom: 1em;
        img{
            width: 80%;
            height: 40%;
        }
    }
`
export const Opinions = styled.div`
    width: 59.5em;
    padding: 1em 2em;
    .opinion__title{
        font-size: 1.6em;
        font-weight: 500;
    }
`
export const OpinionsContainer = styled.div`
    width: 48.2em;
    padding: 1em;
    display: flex;

    
    .score{
        display:flex;
        align-items: center;
        gap: .5em;
        margin-top: -2em;
        
    }
    .score__number{
        font-size: 2.6em;
        font-weight: 700;
        color: #3483fa;
    }
    .score__star{
        color: #3483fa;
    }

    .bars__metric{
        display: flex;
        align-items: center;
        gap:.7em;
        margin-top: -2em;
    }

    .bars{
        display: flex;
        height: .2em;
        width: 10em;
        border: 1px solid black;        border-radius:.4em;
        overflow: hidden;
        
    }
    .section1-bars1{
        width: 90%;
        background-color: rgba(0,0,0,.5);
    }

    .section1-bars2{
        width: 5%;
        background-color: rgba(0,0,0,.5);
    }

    .section1-bars3{
        width: 3%;
        background-color: rgba(0,0,0,.5);
    }

    .section1-bars4{
        width: 2%;
        background-color: rgba(0,0,0,.5);
    }

    .section1-bars5{
        width: 0%;
        background-color: rgba(0,0,0,.5);
    }

    .estella{
        display: flex;
        gap: .3em;
    }

    .description__opinion{
        font-size: .8em;
        margin-left: 2em;
        color: rgba(0,0,0,.7)
    }
    .star__opinion{
        margin-left: 1.5em;
        color: #3483fa;
    }

`
