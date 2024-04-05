import { Button } from '../components/Button';

import angelImg from '../assets/images/angel/angel-1.svg';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { useAppDispatch } from '../store/store';

export const Start = () => {
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    dispatch(setCurrentScreen(SCREENS.THE_LOADING));
  }; // Навигация

  return (
    <div
      className="relative flex flex-col h-full box-border  items-center pb-[50px]  from-gradient-color bg-main-full-bg bg-cover bg-center">
      <img className="absolute top-0 h-[360px] w-full object-none" src={angelImg} alt="Ангел" />
      <div className="mt-auto flex flex-col items-center mb-[21px]">
        <h1 className="h1-text mt-auto">Стрелы любви</h1>
        <p className="p-text mt-[30px] max-w-[250px]">
           Направь их правильно и создай как можно больше пар
        </p>
      </div>
      <div className='w-[170px]'>
      <Button onClick={handleNavigate}>Начать</Button></div>
    </div>
  );
};
