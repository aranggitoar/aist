import React from 'react';
import styled from 'styled-components';

import MenuBlockFileHandler from './MenuBlockFileHandler/MenuBlockFileHandler';
import { MenuBlockSettings } from './Settings/Settings';

import { LoadedBibleContext } from '@/contexts/LoadedBibleContext';

import './index.css';

const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

export function MenuBlock(): React.ReactElement<Record<string, unknown>> {
  const { loadedBibleObject, updateUploadedBible } = React.useContext(LoadedBibleContext) as LoadedBibleContextType
  return (
    <Block>
      <MenuBlockFileHandler loadedBibleObject={loadedBibleObject} updateUploadedBible={updateUploadedBible}/>
    </Block>
  );
}

export default MenuBlock;
