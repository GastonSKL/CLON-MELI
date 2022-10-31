import React from 'react';
import { Container, Wrapper,InputContainer, Offers, WrapperContainer , WrapperList, WrapperMenu, Location, List } from './Styles';
import { FaSearch, FaMoneyBillWaveAlt,FaLocationArrow, FaBell, FaCartArrowDown} from 'react-icons/fa';
import Photo  from '../images/profile.jpg'

export const Header = () => {
  return (
    <Container>
        <Wrapper>
            <WrapperContainer>
            <img src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus@2x.png' alt='logo'/> 
            <InputContainer>
            <form>
                <input type='text' placeholder='Buscar productos, marcas y mas...'></input>
                <button type='submit'><FaSearch /></button>
            </form>
            </InputContainer>
            </WrapperContainer>
            <Offers>
            <span><a href='#'><FaMoneyBillWaveAlt className='iconMoney' /> Ofertas por tiempo limitado</a></span>
        </Offers>
        </Wrapper>

        <Wrapper>
            <WrapperList>
                <Location>
                        <FaLocationArrow className='ArrowIcon'/>
                        <div className='location__location'>
                            <p className='location__name'>Enviar a Gaston</p>
                            <p className='location__place'>Colon 1356</p>
                        </div>
                </Location>
                <List>
                        <ul className='List__list'>
                           <li className='List__item'><a href='#'>Categorias</a></li> 
                           <li className='List__item'><a href='#'>Ofertas</a></li> 
                           <li className='List__item'><a href='#'>Historial</a></li> 
                           <li className='List__item'><a href='#'>Supermercado</a></li> 
                           <li className='List__item'><a href='#'>Moda</a></li> 
                           <li className='List__item'><a href='#'>Vender</a></li>
                           <li className='List__item'><a href='#'>Ayuda</a></li>  
                        </ul>
                </List>
            </WrapperList>
            <WrapperMenu>
            <List>
                        <ul className='List__menu'>
                        <li className='List__menu-item'><img src={Photo} alt='pic' className='profilePic'></img></li> 
                           <li className='List__menu-item'><a href='#'>Pablo</a></li> 
                           <li className='List__menu-item'><a href='#'>Mis compras</a></li> 
                           <li className='List__menu-item'><a href='#'>Favoritos</a></li> 
                           <li className='List__menu-item'><a href='#'><FaBell /></a></li> 
                           <li className='List__menu-item'><a href='#'><FaCartArrowDown /></a></li> 
                        </ul>
                </List>
            </WrapperMenu>
        </Wrapper>
        
        
    </Container>
  )
}
