import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Star1 from '../images/star1.jpg';
import Star2 from '../images/star2.jpg';
import Star3 from '../images/star3.jpg';
import Back1 from '../images/background1.jpg';
import Back2 from '../images/background2.jpg';
import Section1 from '../images/section1.png';
import Section2 from '../images/section2.png';
import Section21 from '../images/section2_.jpg';
import Section3 from '../images/section3.jpg';
import Section41 from '../images/section41.jpg';

const ScrollSpy = observer( () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
          };
    
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
    return (
        <div style={{ position: 'relative' }} >
            {!isMobile && (
            <div>
                <h1 style={{textAlign: 'center', margin: '20px'}}><b>Биография Элиаса Торрена</b></h1>
                <div className="row" style={{margin: '3%' }} >
                    <div className="col-xl-4 col-md-4">
                        <div style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
                            <img
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                src={Star1}
                                alt="Star 1"
                            />
                            <div
                                style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                textAlign: 'center',
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                }}
                            >
                                <h2 style={{ marginBottom: 30 }}><b>Родился</b></h2>
                                <h5>9 марта 2475 года</h5> 
                                <h5>Орбитальная станция Европа, Юпитер</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4">
                        <div style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
                            <img
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                src={Star2}
                                alt="Star 2"
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4">
                        <div style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
                            <img
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                src={Star3}
                                alt="Star 3"
                            />
                            <div
                                style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                textAlign: 'center',
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                }}
                            >
                                <h2 style={{ marginBottom: 30 }}><b>Род деятельности</b></h2>
                                <h5>Межзвездный навигатор, экзогеолог, основатель звездного разведывательного коллектива</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            <div id="section1" className="container-fluid section" 
                style={{
                    paddingTop: '50px',
                    height: isMobile ? '300px' : '500px',
                    backgroundImage: `url(${Back1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        textAlign: 'center',
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    {!isMobile && (
                        <img
                        style={{ width: '40%', height: 'auto' }}
                        src={Section1}
                        />
                    )}
                    <div style={{ flex: 1, textAlign: 'center', padding: '30px' }}>
                        <h1>Ранний период жизни</h1>
                        <p>Элиас Торрен вырос в условиях невесомости на орбитальной станции Европа, где его игровой площадкой были бескрайние просторы космоса. 
                            Подростком он ремонтировал спутниковые антенны и изучал голографические карты звездного неба, мечтая о неизведанных мирах. 
                            В 18 лет он построил самодельный спектроскоп для анализа минералов астероидов, обеспечив себе место в Институте экзогеологии Титана.</p>
                    </div>
                </div>
            </div>

            <div id="section2" className="container-fluid section"
                style={{
                    height: isMobile ? '300px' : '500px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: isMobile ? 'transparent' : 'rgba(0, 0, 0, 0.5)',
                        color: isMobile ? 'black' : 'white',
                        textAlign: 'center',
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        width: '100%', 
                        maxWidth: '100%', 
                        // padding: '20px',
                        boxSizing: 'border-box', 
                        height: '100%'
                    }}
                >
                    <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
                        <h1>Карьера</h1>
                        <p>
                        Элиас получил докторскую степень по планетарной геологии к 28 годам и присоединился к Galactic Exploration Authority (GEA). 
                        Разочарованный их миссиями, ориентированными на прибыль, он основал в 2505 году Stellar Recon Collective — свободный альянс исследователей, 
                        посвятивших себя картографированию забытых звездных систем.</p>
                    </div>
                    {!isMobile && (
                        <img
                        style={{ width: '25%', height: 'auto' }}
                        src={Section21}
                    />
                    )}
                    {!isMobile && (
                        <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
                            <h1>Открытия</h1>
                            <p>Его основные открытия включают в себя:
                            Торренс-Хейвен (2507): планета с умеренным климатом, обширными лесами и экосистемами на основе азота, ныне являющаяся исследовательским убежищем.
                            Обсидиановый дрейф (2510): планета-изгой со структурами из вулканического стекла, открывающая новые принципы геотермальной энергии.
                            Элория (2514): покрытый льдом мир с озерами жидкого метана, где обитают протоорганические соединения, изменившие астробиологию.
                            Элиас разработал Astral Beacon , навигационный инструмент на основе искусственного интеллекта, который нанес на карту более 1500 экзопланет, 
                            заслужив среди коллег звание «Первопроходца». Он выступает за сохранение инопланетных экосистем и публично выступал против добычи полезных 
                            ископаемых в обитаемых мирах.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div id="section3" className="container-fluid section"
                style={{
                    paddingTop: '50px',
                    height: isMobile ? '350px' : '500px',
                    backgroundImage: `url(${Back2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        textAlign: 'center',
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
                        <h1>Личная жизнь</h1>
                        <p>
                        В свои 50 лет Элиас остается одиночкой, командуя своим кораблем «Путник» , прочным судном класса «исследователь» с компаньоном-ИИ 
                        по имени Солис. Он собирает фрагменты инопланетного наскального искусства и курирует библиотеку межзвездных радиосигналов, полагая, 
                        что они содержат подсказки о древних цивилизациях. Шепоты о прошлой трагедии во время провалившейся колониальной миссии преследуют его, 
                        но Элиас отмахивается от них как от «старых космических мифов».
                        </p>
                    </div>
                    {!isMobile && (
                        <img
                        style={{ width: '40%', height: 'auto' }}
                        src={Section3}
                        />
                    )}
                </div>
            </div>

            <div id="section4" className="container-fluid section"
                style={{
                    paddingTop: '50px',
                    height: isMobile ? '300px' : '500px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: isMobile ? 'transparent' : 'rgba(0, 0, 0, 0.5)',
                    color: isMobile ? 'black' : 'white',
                    textAlign: 'center',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: '100%', 
                    maxWidth: '100%', 
                    boxSizing: 'border-box', 
                    height: '100%'
                }}
                >
                    {!isMobile && (
                        <img
                        style={{ width: '40%', height: 'auto' }}
                        src={Section41}
                        />
                    )}
                    <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
                        <h1>Наследие</h1>
                        <p>
                        Элиас продолжает свои экспедиции, движимый убеждением, что человечество должно сосуществовать с космосом, а не доминировать над ним. 
                        Его публичный каталог экзопланет вдохновил бесчисленное множество молодых мореплавателей, а его книга « За горизонтом » является основным 
                        предметом в исследовательских академиях.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ScrollSpy