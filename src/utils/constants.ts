import girlWithDog from '../assets/images/profiles/girl-with-dog.png';
import ScooterGirl from '../assets/images/profiles/ScooterGirl.png';
import GirlInCoat from '../assets/images/profiles/GirlInCoat.png';
import girlWithBook from '../assets/images/profiles/girlWithBook.png';
import girlInRedDress from '../assets/images/profiles/girlInRedDress.png';
import manWithGuitar from '../assets/images/profiles/manWithGuitar.png';
import manWithCar from '../assets/images/profiles/manWithCar.png';
import girlInPink from '../assets/images/profiles/girlInPink.png';
import skateboarder from '../assets/images/profiles/skateboarder.png';
import manWithCoffee from '../assets/images/profiles/manWithCoffee.png';

import man from '../assets/images/profiles/maleAvatar.png';
import girl from '../assets/images/profiles/femaleAvatar.png';

import vitalik from '../assets/images/profiles/vitalik.png';
import kostya from '../assets/images/profiles/kostya.png';
import jora from '../assets/images/profiles/jora.png';
import kirill from '../assets/images/profiles/kirill.png';
import sanek from '../assets/images/profiles/sanek.png';
import masha from '../assets/images/profiles/masha.png';
import viola from '../assets/images/profiles/viola.png';
import max from '../assets/images/profiles/max.png';
import katya from '../assets/images/profiles/katya.png';
import vika from '../assets/images/profiles/vika.png';

import dop1 from '../assets/images/profiles/dop1.png';
import dop2 from '../assets/images/profiles/dop2.png';
import dop3 from '../assets/images/profiles/dop3.png';
import dop4 from '../assets/images/profiles/dop4.png';



import vitalikImg from '../assets/images/peopleImgs/vitalikImg.png';
import kostyaImg from '../assets/images/peopleImgs/kostyaImg.png';
import joraImg from '../assets/images/peopleImgs/joraImg.png';
import kirillImg from '../assets/images/peopleImgs/kirillImg.png';
import sanyaImg from '../assets/images/peopleImgs/sanyaImg.png';
import maxImg from '../assets/images/peopleImgs/maxImg.png';
import mashaImg from '../assets/images/peopleImgs/mashaImg.png';
import violaImg from '../assets/images/peopleImgs/violaImg.png';
import katyaImg from '../assets/images/peopleImgs/katyaImg.png';
import vikaImg from '../assets/images/peopleImgs/vikaImg.png';
import { IGuy } from '../types/guys';

export const baseUrl = 'https://fantastic-conkies-9dafb4.netlify.app/';

export const resultTexts = [
  {
    text: 'А ты точно купидон? Приложения справляются лучше тебя… Или докажешь обратное?',
    button: 'Я смогу',
  },
  {
    text: 'Ты справился хорошо, но потерял сноровку! Половина людей осталась без пары. Поможешь им?',
    button: 'Помочь',
  },
  {
    text: 'Ты – лучший купидон! Зачем нужны приложения для знакомств, если есть ты? Может, ещё разок?',
    button: 'Помочь',
  },
];

export const defaultGuys: IGuy[] = [
  {
    id: 1,
    top: 110,
    left: 255,
    height: 150,
    width: 40,
    name: 'Девочка-2',
    avatar: dop2,
    gender: 'female',
  },

  {
    id: 2,
    top: 350,
    left: 355,
    height: 140,
    width: 60,
    name: 'Девочка на самокате',
    avatar: ScooterGirl,
    gender: 'female',
  },
  {
    id: 3,
    top: 480,
    left: 210,
    height: 160,
    width: 60,
    name: 'Парень с кофе',
    avatar: manWithCoffee,
    gender: 'male',
  },
  {
    id: 4,
    top: 65,
    left: 800,
    height: 150,
    width: 60,
    name: 'Девочка с книгой',

    avatar: girlWithBook,

    gender: 'female',
  },
  {
    id: 5,
    top: 300,
    left: 960,
    width: 100,
    height: 170,
    name: 'Парень на скейте',
    avatar: skateboarder,
    gender: 'male',
  },

  {
    id: 6,
    top: 570,
    left: 760,
    width: 50,
    height: 160,
    avatar: dop3,
    name: 'Парень на дороге',
    gender: 'male',
  },

  {
    id: 7,
    top: 1015,
    left: 750,
    width: 60,
    height: 180,
    name: 'Девочка в юбке',
    avatar: girlInRedDress,
    gender: 'female',
  },

  {
    id: 8,
    top: 20,
    left: 1500,
    width: 40,
    height: 120,
    name: 'Парень у машины',
    avatar: manWithCar,
    gender: 'male',
  },

  {
    id: 9,
    top: 700,
    left: 1360,
    width: 145,
    height: 160,
    name: 'Девочка с собакой',
    gender: 'female',
    avatar: girlWithDog,
  },

  {
    id: 10,
    top: 1070,
    left: 1360,
    width: 60,
    height: 150,
    avatar: dop1,
    name: 'Девочка у озера',
    gender: 'female',
  },

  {
    id: 11,
    top: 1070,
    left: 1590,
    width: 50,
    height: 140,
    name: 'Парень у озера',
    avatar: dop4,
    gender: 'male',
  },

  {
    id: 12,
    top: 905,
    left: 1770,
    width: 60,
    height: 150,
    name: 'Девочка в платье у дороги',
    avatar: girlInPink,
    gender: 'female',
  },
  {
    id: 13,
    top: 605,
    left: 2130,
    width: 85,
    height: 155,
    name: 'Парень с гитарой',
    avatar: manWithGuitar,
    gender: 'male',
  },

  {
    id: 14,
    top: 100,
    left: 1900,
    width: 66,
    height: 160,
    name: 'Девочка в плаще',
    gender: 'female',
    avatar: GirlInCoat,
  },
];

export const guys: IGuy[] = [
  {
    id: 1,
    top: 680,
    left: 1235,
    width: 145,
    height: 160,
    name: 'Виталий, 30',
    gender: 'male',
    lookingFor: 'Девочка с собакой',
    profileText: 'Ищу спортивную девушку с тёмными волосами. Люблю собак!',
    avatar: vitalik,
    img: vitalikImg,
  },

  {
    id: 2,
    top: 390,
    left: 415,
    height: 140,
    width: 70,
    name: 'Константин, 35',
    gender: 'male',
    lookingFor: 'Девочка на самокате',
    profileText: 'Нравятся блондинки в женственных платьях. Покатаемся на самокатах?',
    avatar: kostya,
    img: kostyaImg,
  },

  {
    id: 3,
    top: 90,
    left: 1970,
    width: 66,
    height: 160,
    name: 'Георгий, 25',
    gender: 'male',
    lookingFor: 'Девочка в плаще',
    profileText: 'Короткая стрижка, кожаный плащ. Если это ты, то идём в кино! ',
    avatar: jora,
    img: joraImg,
  },

  {
    id: 4,
    top: 90,
    left: 850,
    height: 150,
    width: 60,
    name: 'Кирилл, 23',
    gender: 'male',
    lookingFor: 'Девочка с книгой',
    profileText: 'Светлые волосы, мечтательная улыбка и томик Бродского – мой идеал.',
    avatar: kirill,
    img: kirillImg,
  },

  {
    id: 5,
    top: 1015,
    left: 815,
    width: 70,
    height: 190,
    name: 'Санёк, 20',
    gender: 'male',
    lookingFor: 'Девочка в юбке',
    profileText: 'Пойдём на рок-концерт, брюнетка в короткой юбке?',
    avatar: sanek,
    img: sanyaImg,
  },

  {
    id: 6,
    top: 640,
    left: 2080,
    width: 60,
    height: 155,
    name: 'Маша, 21',
    gender: 'female',
    lookingFor: 'Парень с гитарой',
    profileText: 'Обожаю жгучих брюнетов в косухе. Может, и на гитаре играешь?',
    avatar: masha,
    img: mashaImg,
  },

  {
    id: 7,
    top: 60,
    left: 1550,
    width: 40,
    height: 120,
    name: 'Виолетта, 27',
    gender: 'female',
    lookingFor: 'Парень у машины',
    profileText: 'Ищу состоятельного брюнета с машиной и хорошим чувством юмора.',
    avatar: viola,
    img: violaImg,
  },

  {
    id: 8,
    top: 900,
    left: 1820,
    width: 60,
    height: 155,
    name: 'Максим, 32',
    gender: 'male',
    lookingFor: 'Девочка в платье у дороги',
    profileText: 'Стану Райаном Гослингом для своей барби. Не могу устоять перед розовым платьем)',
    avatar: max,
    img: maxImg,
  },

  {
    id: 9,
    top: 285,
    left: 1050,
    width: 70,
    height: 130,
    name: 'Катя, 19',
    gender: 'female',
    lookingFor: 'Парень на скейте',
    profileText: 'Пищу от парней с длинными волосами в кепке и на скейте ',
    avatar: katya,
    img: katyaImg,
  },
  {
    id: 10,
    top: 500,
    left: 145,
    height: 160,
    width: 70,
    name: 'Виктория, 32',
    gender: 'female',
    lookingFor: 'Парень с кофе',
    profileText: 'Не смогу устоять перед мужчиной в очках и галстуке. Выпьем кофе? ',
    avatar: vika,
    img: vikaImg,
  },
];
