import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://tech-syndicate.vercel.app';

export const SubmissionEmail = ({
  name = 'John Doe',
  email = 'hi@example.com',
  message = 'Lorem Ipsum',
}) => {
  const previewText = `Contact form submission by ${name}`;

  return (
    <Html style={{ background: 'white' }}>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] bg-white rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/TS-logo-dark.png`}
                width="50"
                alt="Tech Syndicate"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Contact Form Submission
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              From: <strong>{email}</strong>
              <br />
              Name: <strong>{name}</strong>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Message:
              <Text className="bg-slate-100 text-black mt-none p-4 rounded">
                {message}
              </Text>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export const SubmissionConfirmationEmail = ({
  name = 'John Doe',
  email = 'hi@example.com',
  message = 'Lorem Ipsum',
}) => {
  const previewText = `Contact Form Confirmation`;

  return (
    <Html style={{ background: 'white' }}>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] bg-white rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/TS-logo-dark.png`}
                width="50"
                alt="Tech Syndicate"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Contact Form Confirmation
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              This is confirmation that we have recieved your submission. Thanks
              for your interest :D
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              From: <strong>{email}</strong>
              <br />
              Name: <strong>{name}</strong>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Message:
              <Text className="bg-slate-100 text-black mt-none p-4 rounded">
                {message}
              </Text>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
