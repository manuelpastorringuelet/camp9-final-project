'use client';

import {
  useVotePollMutation,
  useVotePollQuery,
} from '@/components/hooks/usePoll';
import ProgressBar from '@/components/shared/ProgressBar';
import Button from '@/components/shared/buttons/Button';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ThankYouForVoting from '@/components/voting/ThankYouForVoting';
import VotingFeedback from '@/components/voting/VotingFeedback';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { zodResolver } from '@hookform/resolvers/zod';
import { VotePoll, voteSchema } from '@/types/voting/VotingSchema';
import VotingTypeChoice from '@/components/voting/VotingTypeChoice';
import QuestionVote from '@/components/voting/QuestionVote';
import VotingConditions from '@/components/voting/VotingConditions';
import { useSession } from 'next-auth/react';
import Loading from '@/components/voting/Loading';
import { Mood } from '@prisma/client';

type Anonymity = 'Anonymous' | 'NonAnonymous' | 'AnonymousUntilQuorum';

export type UserAnswer = {
  anonymity: Anonymity;
  answer: string[];
  mood: Mood;
};

export default function Voting({ params }: { params: { slug: string } }) {
  const pollId = params.slug;

  const { query } = useVotePollQuery(pollId);
  const { mutate } = useVotePollMutation(pollId);

  const multistepComponets = [
    <QuestionVote
      key={query.data?.data.id}
      description={query.data?.data.description}
      question={query.data?.data.question}
    />,
    <VotingConditions
      key={query.data?.data.id}
      anonymity={query.data?.data.anonymity}
      quorum={query.data?.data.quorum}
    />,
    <VotingTypeChoice
      key={query.data?.data.id}
      question={query.data?.data.question!}
      type={query.data?.data.type!}
      options={query.data?.data.options}
    />,
    <VotingFeedback key={query.data?.data.id} />,
  ];

  const [step, setStep] = useState<number>(0);

  const methods = useForm<UserAnswer>({
    resolver: zodResolver(voteSchema),
    mode: 'all',
  });

  async function nextHandler() {
    if (step < multistepComponets.length - 1) {
      let keyArray: (keyof VotePoll)[] = [];
      switch (step) {
        case 1:
          keyArray = ['anonymity'];
          break;
        case 2:
          keyArray = ['answer'];
          break;
        case 3:
          keyArray = ['mood'];
          break;
      }
      const isValid = await methods.trigger(keyArray);
      if (!isValid) return;
      setStep(step + 1);
    }
  }

  function onSubmit(data: UserAnswer) {
    const userAnswer = query.data?.data.options?.map(option => {
      return data.answer.includes(option);
    }) as boolean[];
    const userVote = {
      answer: userAnswer,
      pollId: Number(pollId),
      mood: data.mood,
    };
    mutate(userVote);
  }

  const titles = ['Question', 'About this Poll', 'Your Vote', 'Your Mood'];

  if (query.data?.data.id === 107000) return <ThankYouForVoting />;
  if (query.isLoading) return <Loading />;

  return (
    <main>
      <h1 className="title-bold text-left pb-1">{titles[step]}</h1>
      <ProgressBar
        currentPage={step + 1}
        numberOfPages={multistepComponets.length}
      />
      <FormProvider {...methods}>
        <form className="pt-4 ">
          {multistepComponets[step]}
          <div className="fixed bottom-24 right-8 flex flex-row justify-end gap-16 w-[311px]">
            {step > 0 && step < 4 && (
              <Button
                size="small"
                type="button"
                variant="secondary"
                onClick={() => setStep(step - 1)}
                disabled={Object.keys(methods.formState.errors).length !== 0}
              >
                <GrFormPrevious size={24} strokeWidth={2} />
                Back
              </Button>
            )}
            {/**change this step to -2 to have it in the correct way */}

            {step < multistepComponets.length - 1 && (
              <Button
                size="medium"
                type="button"
                onClick={nextHandler}
                disabled={Object.keys(methods.formState.errors).length !== 0}
              >
                Next
                <GrFormNext size={24} strokeWidth={2} />
              </Button>
            )}
            {step === multistepComponets.length - 1 && (
              <Button
                size="medium"
                type="submit"
                onClick={methods.handleSubmit(onSubmit)}
                disabled={Object.keys(methods.formState.errors).length !== 0}
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </main>
  );
}
