'use client';

import styled from 'styled-components';
import { CascadeText } from '../components/CascadeText';

export const Title = styled(CascadeText)`
  font-family: var(--paladins-font);
  font-size: calc(12vw + 1.2rem);
  margin: 0;
  padding: 0;
  white-space: nowrap;
  /*
  color: #000;
  --g0: #fff;
  text-shadow: 1px 1px var(--g0), -1px -1px var(--g0), 1px -1px var(--g0),
    -1px 1px var(--g0);
    */
`;
