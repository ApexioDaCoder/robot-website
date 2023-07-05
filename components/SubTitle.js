'use client';

import styled from 'styled-components';
import { CascadeText } from '@/components/CascadeText';

export const SubTitle = styled(CascadeText)`
  font-family: var(--bebas-neue-font);
  font-size: ${(props) => props.size || 'calc(6vmin + 1.2rem)'};
  margin: 0;
  padding: 0;
  overflow-y: hidden;
`;
