import React from 'react'
import { Tweet } from 'react-tweet'
import Image from 'next/image'

type Props = {
    isTweet?: boolean
    imageUrl: string
    title: string  
    description: string
    tweetId: string
}

export default function StatusItem({isTweet, imageUrl, title, description, tweetId}: Props) {
  return (  
    <div>
      {isTweet ? (
        <Tweet id={tweetId} />
      ) : (
        <Image src={imageUrl} alt={title} width={300} height={300} />
      )}
    </div>
  );
}