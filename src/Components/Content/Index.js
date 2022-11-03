import React from 'react'
import { Container, Panel, Column, Galery, Description, PrevContainer, ItemContainer, ContainerItem, GaleryContainer, ImgContainer, CarouselContainer,CarouselItemContainer } from './Styles';
import { FaCheckCircle, FaArrowDown, FaStar, FaStarHalf } from 'react-icons/fa';

const Info = () =>{
  return (
    <Description>
      <h2>Características de La Cardeuse Native 400</h2>
      <div className='container'>
        <div className='container__item'>
          <p className='container__item-icon'><FaCheckCircle /></p>
          <p className='container__item-description'>Tipo de superficie de contacto:<span> Pillow top</span></p>
        </div>

        <div className='container__item'>
          <p className='container__item-icon'><FaCheckCircle /></p>
          <p className='container__item-description'>Tipo de relleno: <span> Resortes de contacto</span></p>
        </div>

        <div className='container__item'>
          <p className='container__item-icon'><FaCheckCircle /></p>
          <p className='container__item-description'>Con alta densidad: <span> Sí</span></p>
        </div>

        <div className='container__item'>
          <p className='container__item-icon'><FaCheckCircle /></p>
          <p className='container__item-description'>Tamaño: <span> Queen</span></p>
        </div>
        <a>Ver mas caracteristicas <FaArrowDown /></a>

      </div>
      <h3>Descripción</h3>
      <p>La línea Native 400 se produce con nuestro exclusivo sistema Bonell de resortes tradicionales. Este sistema permite que los resortes trabajen en conjunto generando una sensación de suavidad y relajación al acostarse. Gracias al sistema Flip For Better que caracteriza todos nuestros modelos es que el Native cuenta con las mismas propiedades de ambos lados del colchón. A su vez cuenta con 4 manijas laterales reforzadas que facilitan la rotación del producto. Este modelo le permitirá tener una sensación de mullidez y relajación muy alta debido a su Pillow Native que es una capa extra de espuma de alta densidad que se ubica debajo de las tapas del colchón. La terminación se realiza de ambas caras del colchón con tela Jackard de algodón de la más alta calidad. La tela es sometida a procesos que lo protegen del polvo ambiental y los malos olores y a su vez impiden la reproducción de ácaros y bacterias. Box compuesto por una estructura de madera estacionada y secada a horno. Posee 6 patas de apoyo. Recubierto con tela de tapicería y cubierta antideslizante para evitar el movimiento entre el colchón y la base. <br/><br/></p>
      <h4>Durabilidad y firmeza</h4>
      <p>Posee un soporte de madera que se destaca por su estética, dureza y flexibilidad. Es resistente a la fricción y a la presión, por lo que podrás disfrutar del máximo bienestar que brinda este colchón.<br/><br/></p>
      <h4>Relax en tu hogar</h4>
      <p>Su relleno de resortes actúa como amortiguador y reduce el desgaste del colchón, garantizando así una mayor estabilidad de tu cuerpo.<br/><br/></p>
      <h4>Firmeza ideal para relajarte</h4>
      <p>Gracias a su Pillow Top, podrás prevenir el desarrollo de problemas de columna y contractura muscular. También te ayudará a mejorar la circulación, ya que te brinda el soporte adecuado para tu cuerpo.</p>

    </Description>
  )
}

const Item = ({img, price, description}) =>{
  return(
    <ContainerItem>
      <img className='item__img' src={img} />
      <p className='item__price'>${price}</p>
      <p className='item__discount'>6x ${(price / 6).toPrecision(6)}</p>
      <p className='item__desription'>${description}</p>
    </ContainerItem>
  )
}

const ProductPreview = () =>{
  return(
    <PrevContainer>
      <h2>Quienes vieron este producto también compraron</h2>
      <ItemContainer>
        <Item 
          img='https://thumbs.dreamstime.com/b/colchones-de-la-representaci%C3%B3n-d-en-el-fondo-blanco-78034139.jpg'
          price= {16000}
          description = 'Sommier Suavestar Espuma Extra 1 plaza de 190cmx80cm'
        />
        <Item 
          img='https://image.shutterstock.com/image-illustration/mattress-one-single-isolated-on-260nw-1486986290.jpg'
          price= {26000}
          description = 'Sommier Suavestar Superstar 2 1/2 plazas de 190cmx140cm'
        />
        <Item
          img='https://img.freepik.com/vector-premium/colchon-doble-aislado-sobre-fondo-blanco-articulo-cama-ortopedica-realista-dormir-accesorio-descanso-dormitorio-ilustracion-vectorial-3d_341509-3025.jpg?w=2000'
          price= {12410}
          description = 'Sommier Suavestar Boreal Bamboo 1 plaza'
        />
      </ItemContainer>
    </PrevContainer>
  )
}

const CarouselItem = ({card}) =>{
  return(
    <CarouselItemContainer>
      <img src={card}/>
    </CarouselItemContainer>
  )
}

export const Content = () => {
  return (
    <Container>
      <Panel>

        <Column>
        <Galery>
          <GaleryContainer>
            <ImgContainer>
              <img src='https://http2.mlstatic.com/D_NQ_NP_898982-MLA49837454026_052022-O.webp' alt='mainGalery'></img>
              <CarouselContainer>
                <CarouselItem
                 card='https://arcoiristriunvirato.com.ar/wp-content/uploads/2018/05/bf-fondo-blanco-invertido-scaled.jpg'
                />
                <CarouselItem
                 card='https://tienda.centroestant.com.ar/media/2022/05/1_CC8019022_FondoBlanco_1000x1000.jpg'
                />
                <CarouselItem
                 card='https://previews.123rf.com/images/johnkasawa/johnkasawa1304/johnkasawa130400042/19312682-cama-colch%C3%B3n-aislado-en-el-fondo-blanco.jpg'
                />
              </CarouselContainer>
            </ImgContainer>
          </GaleryContainer>
          <GaleryContainer>
            <p className='smallTitle'>Nuevo | 1195 vendidos</p>
            <h2 className='Title'>Sommier La Cardeuse Native 400 Queen de 190cmx140cm</h2>
            <p className='stars__container'>
              <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
                </span>
                <span>
                  (248)
                </span>
            </p>
            <p><span className='mostSelled'>MAS VENDIDO</span><span className='mostSelled-description'>4° en Juegos de sommier y colchon</span></p>
            <h3 className='price'>$115.227 <span className='price__discount'>55% OFF</span></h3>
            <p className='discount__price'>en<span className='discount__price-price'>12x $9.602 sin intereses</span></p>
            <p className='points'>Duplica puntos: <span className='points__points'>Sumas 1646 mercado puntos</span></p>
            <a className='More'>Ver los medios de pago</a>
            <p className='Option'>Tamaño: <b>Queen</b></p>
            <div className='Sizes'>
              <div className='Sizes_queen'>Queen</div> 
              <div className='Sizes_king'>King</div>
            </div>
            <p className='Option'>Largo de la cama principal: <b>190 cm</b></p>
            <div className='Sizes'>
              <div className='Sizes_queen'>Queen</div> 
              <div className='Sizes_king'>King</div>
            </div>
            <p className='Option'>Ancho de la cama principal: <b>140cm</b></p>
            <div className='Sizes'>
              <div className='Sizes_queen'>Queen</div> 
              <div className='Sizes_king'>King</div>
            </div>

            <p className='details'>Lo que tenés que saber de este producto</p>
            <ul className='list'>
              <li className='list__item'>Material de la base: madera.</li>
              <li className='list__item'>El colchón está compuesto por resortes.</li>
              <li className='list__item'>Tapizado en telas de jackard y algodón.</li>
              <li className='list__item'>Con pillow top para mayor firmeza y comodidad</li>
              <li className='list__item'>Es antiácaros.</li>
              <li className='list__item'>De alta densidad.</li>
              <li className='list__item'>Máximo confort.</li>
              <li className='list__item'>Ideal para un sueño reparador.</li>
              <li className='list__item'>Las imágenes pueden ser ilustrativas</li>
            </ul>
          </GaleryContainer>
        </Galery>
        <ProductPreview />
        <Info />

        </Column>

        <Column>
          
          
        </Column>
      </Panel>
    </Container>
  )
}


