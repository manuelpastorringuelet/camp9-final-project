import SignUpForm from 'components/shared/forms/SignUpForm';
import Link from 'next/link';
import React from 'react';

function SignUp() {
  return (
    <div className="flex flex-col justify-between gap-3">
      <div className="flex flex-col gap-9 justify-between">
        <h1 className="appName">d&apos;accord</h1>
        <SignUpForm />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center body-semibold">Already have an Account?</p>
        <Link href={'/login'} className="underline text-center body-semibold">
          Log in!
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
