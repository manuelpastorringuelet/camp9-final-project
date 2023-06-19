import { ReactElement, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ro } from '@faker-js/faker';

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const router = useRouter();

  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }

  function back() {
    if (currentStepIndex === 0) {
      router.back();
    }
    setCurrentStepIndex(currentStepIndex - 1);
  }

  // function back() {
  //   setCurrentStepIndex(i => {
  //     if (i <= 0) {
  //       return i;
  //     }
  //     return i - 1;
  //   });
  // }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goTo,
    next,
    back,
    isFirstStep: currentStepIndex !== 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
