import { useMemo } from 'react';
import { SCREENS } from '../types/screens';

import { useAppSelector } from '../store/store';
import { Start } from '../pages/Start';
import Loading from '../pages/Loading';
import { OnBoarding } from '../pages/OnBoarding';
import { Game } from '../pages/Game';
import { Result } from '../pages/Result';
import { Comics } from '../pages/Comics';
import { Share } from '../pages/Share';

export const Router: React.FC = () => {
  const { currentScreen } = useAppSelector((state) => state.game);

  return useMemo(() => {
    switch (currentScreen) {
      case SCREENS.THE_START:
        return <Start />;
      case SCREENS.THE_LOADING:
        return <Loading />;
        case SCREENS.THE_COMICS:
          return <Comics />;
      case SCREENS.THE_ONBOARDING:
        return <OnBoarding />;
      case SCREENS.THE_GAME:
        return <Game />;

        case SCREENS.THE_SHARE:
          return <Share />;
        
      case SCREENS.THE_RESULT:
        return <Result />;
      default:
        return <Start />;
    }
  }, [currentScreen]); // компонент навигации
};
