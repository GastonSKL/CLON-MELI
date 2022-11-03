import React from 'react'
import { Container, Panel, Column, Galery, Description, PrevContainer, ItemContainer, ContainerItem, GaleryContainer, ImgContainer, CarouselContainer,CarouselItemContainer, DescriptionContainer , Box, SimilProducts, Comparation, Opinions, OpinionsContainer} from './Styles';
import { FaCheckCircle, FaArrowDown, FaStar, FaStarHalf,FaHeart, FaTruck, FaMapMarkerAlt, FaShieldAlt, FaTrophy, FaMedal, FaSpellCheck, FaHourglassHalf, FaCreditCard} from 'react-icons/fa';

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
        <a className='link'>Ver mas caracteristicas <FaArrowDown /></a>

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

const Table = () =>{
  return(
    
      <Comparation>
        <div className='item item1'>
          
        </div>

        <div className='item item2'>
          <img src='https://http2.mlstatic.com/D_NQ_NP_2X_844517-MLA46490092958_062021-V.webp'></img>
          <p>Sommier La Cardeuse Native 800 King de 200cmx200cm marron</p>
          <p>(Este producto) </p>
        </div>

        <div className='item item3'>
          <img src='https://http2.mlstatic.com/D_NQ_NP_2X_907979-MLA40571989292_012020-V.webp'></img>
          <p>Sommier La Cardeuse Native 800 King de 200cmx200cm marron</p>
          <p>(Este producto)</p>
        </div>

        <div className='item item4'>
          <img src='https://http2.mlstatic.com/D_NQ_NP_2X_904876-MLA45385771172_032021-V.webp'></img>
          <p>Sommier La Cardeuse Native 800 King de 200cmx200cm marron</p>
          <p>(Este producto)</p>
        </div>

        <div className='item item5'>
          <img src='https://http2.mlstatic.com/D_NQ_NP_2X_904876-MLA45385771172_032021-V.webp'></img>
          <p>Sommier La Cardeuse Native 800 King de 200cmx200cm marron</p>
          <p>(Este producto)</p>
        </div>

        <p>Opiniones</p>
        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></p>
        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></p>
        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
        <p>Precio</p>
        <p>$317.959</p>
        <p>$165.655</p>
        <p>$244.232</p>
        <p>$135.211</p>
        <p>Largo principal</p>
        <p>200cm</p>
        <p>200cm</p>
        <p>200cm</p>
        <p>200cm</p>
        <p>Ancho Principal</p>
        <p>140cm</p>
        <p>140cm</p>
        <p>140cm</p>
        <p>140cm</p>
        <p>Altura princiap</p>
        <p>66cm</p>
        <p>--</p>
        <p>--</p>
        <p>--</p>



        

      </Comparation>
    

  )
}

export const Content = () => {
  return (
    <Container>
      <Panel>

        <Column>
        <span className='iconHeart'><FaHeart /></span>
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

        <Column className='col2'>
          <DescriptionContainer> 
            <Box>
              <div className='delivery__container'>
                <p className='delivery__icon'><FaTruck /></p>
                <div className='delivery'>
                  <p className='delivery__arrival'>Llega gratis el martes 13 de diciembre</p>
                  <p className='delivery__direction'><FaMapMarkerAlt /> Enviar a Colon 1356</p>
                </div>
              </div>
              <div className='store'>
                <img src='https://http2.mlstatic.com/D_Q_NP_975671-MLA25754853079_072017-G.jpg' alt='store' className='store__img'></img>
                <div className='store__container'>
                  <p className='store__name'>Tienda oficial <a>La Cardeuse</a></p>
                  <p className='store__sells'>1.935 ventas</p>
                  <p className='store__facturation'>Hace factura A</p>
                </div>
              </div>
              <p className='stock'>Stock disponible</p>
              <p className='quantity'><b>Cantidad: 1 unidad</b> (2946 disponibles)</p>
              <button className='buy'>Comprar Ahora</button>
              <div className='protected'>
              <p className='protected__shield'><FaShieldAlt /></p>
              <p className='protected__description'><a href='#'>Compra Protegida</a>, recibi el producto que esperabas o te devolvemos tu dinero</p>
            </div>
            <div className='points'>
              <p className='points__trophy'><FaTrophy /></p>
              <p className='points__description'><a href='#'>Mercado Puntos</a>. Sumas 3872 puntos</p>
            </div>
            <div className='warranty'>
              <p className='warranty__medal'><FaMedal /></p>
              <p className='warranty__description'>5 años de garantia de fabrica</p>
            </div>
            </Box>

            <Box>
              <p>Información de la tienda</p>
              <div className='store'>
                <img src='https://http2.mlstatic.com/D_Q_NP_975671-MLA25754853079_072017-G.jpg' alt='store' className='store__img'></img>
                <div className='store__container'>
                  <p className='store__name'><b>La Cardeuse</b></p>
                  <p className='store__sells'>Tienda oficial de Mercado Libre</p>
                </div>
              </div> 

              <div className='warranty medal'>
              <p className='warranty__medal'><FaMedal /></p>
              <p className='warranty__description'>5 años de garantia de fabrica</p>
              </div>
              <p className='advertisement'>¡Es uno de los mejores del sitio!</p>    

              <div className='traker'>
                <div className='traker__bar'>
                  <div className='traker__bar-section1'></div>
                  <div className='traker__bar-section2'></div>
                </div>
                <div className='traker__description'>

                  <div className='traker__description-item item1'>
                    <h4 className='item__title'>1936</h4>
                    <p className='item__description'>Ventas en los ultimos 60 dias</p>
                  </div>

                  <div className='traker__description-item item2'>
                    <h4 className='item__title'><FaSpellCheck /></h4>
                    <p className='item__description'>Brinda buena atencion</p>
                  </div>

                  <div className='traker__description-item'>
                    <h4 className='item__title'><FaHourglassHalf /></h4>
                    <p className='item__description'>Despacha sus productos a tiempo</p>
                  </div>

                </div>
              </div>  
              <a className='traker__link' href='#'>Ver mas datos de La Cardeuse</a>         
            </Box>

            <Box>
              <div className='payment'>
                <h3 className='payment__title'>Medios de pago</h3>
                <div className='payment__monthly'>
                  <p className='payment__card'><FaCreditCard /></p>
                  <p className='payment__description'>¡Paga en hasta 12 cuotas sin interes!</p>
                </div>
                <p>Hasta 12 cuotas sin tarjeta</p>
              </div>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg' alt='mercadoPago'></img>
              <p>Tarjetas de credito</p>
              <div className='creditInfo'>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg' alt='credit'></img>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg' alt='credit'></img>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg' alt='credit'></img>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg' alt='credit'></img>
              </div>
              <p>Tarjetas de debito</p>
              <div className='creditInfo'>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg' alt='credit'></img>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg' alt='credit'></img>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg' alt='credit'></img>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg' alt='credit'></img>
              <img src='https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg' alt='credit'></img>
              </div>
              <a className='paymenmeans' href='#'>Conoce otros medios de pago</a>

            </Box>
            
          </DescriptionContainer>
          
          
        </Column>
      </Panel>
      <Panel>
        <SimilProducts>
          <h2 className='simil__title'>Compará con otros productos similares</h2>
          <Table />
        </SimilProducts>
      </Panel>
      <Panel>
        <Opinions>
          <h4 className='opinion__title'>Opiniones del producto</h4>
          <OpinionsContainer>
            <div className='opinion__item item1'>
              <div className='score'>
                <p className='score__number'>4.6</p>
                <p className='score__star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              </div>
              <div className='bars__metric'>
              <div className='bars'>
                <div className='section1-bars1'></div>
              </div>
              <p>5 <FaStar /></p>
              </div>
              <div className='bars__metric'>
              <div className='bars'>
                <div className='section1-bars2'></div>
              </div>
              <p>4 <FaStar /></p>
              </div>
              <div className='bars__metric'>
              <div className='bars'>
                <div className='section1-bars3'></div>
              </div>
              <p>3 <FaStar /></p>
              </div>
              <div className='bars__metric'>
              <div className='bars'>
                <div className='section1-bars4'></div>
              </div>
              <p>2 <FaStar /></p>
              </div>
              <div className='bars__metric'>
              <div className='bars'>
                <div className='section2-bars5'></div>
              </div>
              <div className='estella'>
              <p>1</p>
              <p><FaStar /></p>
              </div>
              </div>
            </div>

            <div className='opinion__item item2'>
              <p className='star__opinion'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p className='description__opinion'>Los materiales y el color resultaron muy buenos, lo único es que venia con una falla de fabrica en uno de los módulos que sostiene el colchón, estaba rota la tela, rotura pequeña que la cosí y la pegue, da la sensación que son de segunda selección, aparte de eso, muy bueno todo lo demás-.</p>
              <p className='star__opinion'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p className='description__opinion'>Los materiales y el color resultaron muy buenos, lo único es que venia con una falla de fabrica en uno de los módulos que sostiene el colchón, estaba rota la tela, rotura pequeña que la cosí y la pegue, da la sensación que son de segunda selección, aparte de eso, muy bueno todo lo demás-.</p>
              <p className='star__opinion'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p className='description__opinion'>Los materiales y el color resultaron muy buenos, lo único es que venia con una falla de fabrica en uno de los módulos que sostiene el colchón, estaba rota la tela, rotura pequeña que la cosí y la pegue, da la sensación que son de segunda selección, aparte de eso, muy bueno todo lo demás-.</p>
              <p className='star__opinion'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p className='description__opinion'>Los materiales y el color resultaron muy buenos, lo único es que venia con una falla de fabrica en uno de los módulos que sostiene el colchón, estaba rota la tela, rotura pequeña que la cosí y la pegue, da la sensación que son de segunda selección, aparte de eso, muy bueno todo lo demás-.</p>
              <p className='star__opinion'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p className='description__opinion'>Los materiales y el color resultaron muy buenos, lo único es que venia con una falla de fabrica en uno de los módulos que sostiene el colchón, estaba rota la tela, rotura pequeña que la cosí y la pegue, da la sensación que son de segunda selección, aparte de eso, muy bueno todo lo demás-.</p>
            </div>
            <div className='opinion__item'></div>
          </OpinionsContainer>
        </Opinions>
      </Panel>
    </Container>
  )
}


