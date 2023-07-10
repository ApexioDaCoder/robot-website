'use client';

import { useState } from 'react';
import { sendEmail } from './actions';
import { Button, Input, Textarea } from '@nextui-org/react';
import { styled } from 'styled-components';
import toast from 'react-hot-toast';

const notify = () =>
  toast('Thank you!', {
    position: 'bottom-center',
    style: {
      fontFamily: 'var(--readex-pro-font)',
    },
  });

const Container = styled.div`
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  input[data-autocompleted] {
    background-color: transparent !important;
  }
`;

export const Form = () => {
  return (
    <Container>
      <form
        action={async (data) => {
          await sendEmail(data);
          notify();
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
    </Container>
  );
};
