import Image from 'next/image';
import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Image
      alt='flame-dreaming-of-unicorns'
        src="/images/flame-dreaming-of-unicorns.gif"
        className="w-[280px]"
      ></Image>
      <h3 className="title-bold">Loading...</h3>
    </div>
  );
}

export default Loading;
