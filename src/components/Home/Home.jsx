/*
*       Допоміжний файл в якому тільки викликаються дві компоненти 
*       (зроблено через проблему з маршрутами)
*/
import CarouselComp from '../CarouselComp/CarouselComponent';
import Wave from '../Waves/Wave';

const Home = () => {
    return (
        <div>
            <CarouselComp/>
            <Wave/>
        </div>
    )
}

export default Home