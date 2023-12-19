import React from 'react'
import styles from '../../styles.module.css'
import Header from '../../components/HeaderComponent/Header'
// import Register from '../Register'

import Model1 from '../../assets/Model1.png'
import Model2 from '../../assets/Model2.png'
import Model3 from '../../assets/Model3.png'

const HomePage = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['reg']}>


      <Header/>
        {/* При нажатии на категорию изменять формат текста. 
        Нужно в css изменить название text02 и text04 на состояния до нажатия(text04) и после нажатия(text02). 
        Оптимизировать использование  стиля Frame1,2,3,4,5 . Сделатьб один Frame, Которыи будет расчитывать расстояние автоматически  (Сделав это, лишниие стили уберутся из фала styles.modules.css) */}
        <div className={styles['categories']}>
          <div className={styles['frame']}>
            <span className={styles['text']}>
              <span>НОВЫЕ ТОВАРЫ НЕДЕЛИ</span>
            </span>
            <div className={styles['UnderLinePosition']}>
              <svg width="304" height="1" viewBox="0 0 304 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="304" y2="0.5" stroke="#161616"/> 
              </svg>
            </div>
          </div>
          <div className={styles['frame1']}>
            <div className={styles['UnderLinePosition']}>
              <svg width="304" height="1" viewBox="0 0 304 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="304" y2="0.5" stroke="#161616"/> 
              </svg>
            </div>
            <span className={styles['text04']}>
              <span>Товары со скидкой</span>
            </span>
          </div>
          <div className={styles['frame2']}>
            <div className={styles['UnderLinePosition']}>
              <svg width="304" height="1" viewBox="0 0 304 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="304" y2="0.5" stroke="#161616"/> 
              </svg>
            </div>
            <span className={styles['text04']}>
              <span>Детские товары</span>
            </span>
          </div>
          <div className={styles['frame3']}>
            <div className={styles['UnderLinePosition']}>
              <svg width="304" height="1" viewBox="0 0 304 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="304" y2="0.5" stroke="#161616"/> 
              </svg>
            </div>
            <span className={styles['text04']}>
              <span>Женские товары</span>
            </span>
          </div>
          <div className={styles['frame4']}>
            <div className={styles['UnderLinePosition']}>
              <svg width="304" height="1" viewBox="0 0 304 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="304" y2="0.5" stroke="#161616"/> 
              </svg>
            </div>
            <span className={styles['text04']}>
              <span>Мужские товары</span>
            </span>
          </div>
          <div className={styles['frame5']}>
            <div className={styles['UnderLinePosition']}>
              <svg width="304" height="1" viewBox="0 0 304 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="304" y2="0.5" stroke="#161616"/> 
              </svg>
            </div>
            <span className={styles['text04']}>
              <span>Товары прошлой недели</span>
            </span>
          </div>
        </div>


        <div className={styles['scroll']}>
          <img
            src="/vector334063-yn8r.svg"
            alt="Vector334063"
            className={styles['vector33']}
          />
          <img
            src="/vector344063-6y0l.svg"
            alt="Vector344063"
            className={styles['vector34']}
          />
        </div>


{/* Компоновка карточек не правильная */}
 {/* div картинка
           div информация -> div c ценниками, span c названием и кнопка(добавить в корзину)  в фигме переделать*/}
        <div className={styles['photo']}>


         
          <div className={styles['photo1']}>
            <img src={Model1} alt="Rectangle954063" className={styles['rectangle95']} />
            <img src={Model2} alt="Rectangle984063" className={styles['rectangle98']} />
            <img src={Model3} alt="Rectangle994063" className={styles['rectangle99']} />
          </div>

          <div className={styles['pricelist']}>
            <span className={styles['text12']}>
              <span>2000₽</span>
            </span>
            <span className={styles['text14']}>
              <span>1000₽</span>
            </span>
            <span className={styles['text22']}>
              <span>2000₽</span>
            </span>
            <span className={styles['text18']}>
              <span>2000₽</span>
            </span>
            <span className={styles['text16']}>
              <span>Футболка “Гуччи”</span>
            </span>
            <span className={styles['text20']}>
              <span>Футболка “Гуччи”</span>
            </span>
           
            <span className={styles['text24']}>
              <span>Футболка “Гуччи”</span>
            </span>
            <img
              src=""
              alt="Rectangle1064063"
              className={styles['rectangle106']}
            />
            <span className={styles['text26']}>
              <span>В корзину</span>
            </span>
            <img
              src=""
              alt="Rectangle1074063"
              className={styles['rectangle107']}
            />
            <span className={styles['text28']}>
              <span>В корзину</span>
            </span>
            <img
              src=""
              alt="Rectangle1084063"
              className={styles['rectangle108']}
            />
            <span className={styles['text30']}>
              <span>В корзину</span>
            </span>
            <img
              src=""
              alt="Rectangle1464063"
              className={styles['rectangle146']}
            />
            <span className={styles['text32']}>
              <span>50%</span>
            </span>
          </div>
        </div>


        {/* Начало Header */}
      
        {/* Кончало */}
        {/* <Register/> */}
      </div>
    </div>
  )
}


export default HomePage