'use server';

import sgMail from '@sendgrid/mail';
import { SubmissionEmail, SubmissionConfirmationEmail } from './email-template';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

import { render } from '@react-email/render';

export async function sendEmail(data) {
  const [email, name, message] = [
    data.get('email'),
    data.get('name'),
    data.get('message'),
  ];

  try {
    await sgMail.send({
      to: 'techsyndicate0519@outlook.com',
      cc: 'apexio@hey.com',
      from: { email: 'tech-syndicate@apexio.dev', name: 'Tech Syndicate' }, // Change to your verified sender
      reply_to: 'techsyndicate0519@outlook.com',
      subject: 'Tech Syndicate Contact Form Submission',
      html: render(
        <SubmissionEmail name={name} email={email} message={message} />
      ),
    });

    await sgMail.send({
      to: email,
      from: { email: 'tech-syndicate@apexio.dev', name: 'Tech Syndicate' }, // Change to your verified sender
      reply_to: 'techsyndicate0519@outlook.com',
      subject: 'Tech Syndicate Contact Form Confirmation',
      html: render(
        <SubmissionConfirmationEmail
          name={name}
          email={email}
          message={message}
        />
      ),
    });
    return true;
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    return false;
  }
}
