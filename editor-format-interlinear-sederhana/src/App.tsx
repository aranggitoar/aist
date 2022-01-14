import * as React from 'react';
import styled from 'styled-components';

import TranslationBlock from '@/components/translation-block';
import { MenuBlock } from '@/components/menu-block';
import { PickerBlock } from '@/components/picker-block';

import LoadedBibleProvider from '@/contexts/LoadedBibleContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100%;
  padding: 2rem;
`;

const Separator = styled.hr`
  box-shadow: 20px 20px 150px 1px;
  margin: 2em 0;
  width: 65%;
`;

export function App(): React.ReactElement<Record<string, unknown>> {
  return (
    <Container id="app">
      <LoadedBibleProvider>
        <MenuBlock />
        <Separator />
        <PickerBlock />
        <Separator />
        <TranslationBlock />
      </LoadedBibleProvider>
    </Container>
  );
}
