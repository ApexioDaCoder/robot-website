'use client';

import { useState } from 'react';
import { sendEmail } from './actions';
import { Button, Input, Textarea } from '@nextui-org/react';

export const Form = () => {
  const [finished, setFinished] = useState(false);

  return (
    <>
      <form
        action={async (data) => {
          await sendEmail(data);
          setFinished(true);
        }}
        className="text-left"
      >
        <h2 className="text-2xl font-medium">Contact Form</h2>
        <Input name="name" label="Name" className="my-2" isRequired />
        <Input
          type="email"
          name="email"
          label="Email"
          className="my-2"
          isRequired
        />
        <Textarea
          name="message"
          label="Message"
          labelPlacement="outside"
          placeholder="Enter your message"
          className="my-2"
          isRequired
        />
        <Button type="submit" className="my-2">
          Contact
        </Button>
      </form>
      <p>{finished ? 'Thank You!' : '​'}</p>
    </>
  );
};
