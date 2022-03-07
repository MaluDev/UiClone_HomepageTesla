import { ReactNode } from 'react';

import { Container } from './styles';

interface ModelsWrapperProps {
  children: ReactNode;
}

function ModelsWrapper({ children }: ModelsWrapperProps) {
  return (
    <Container>
      <h1>ModelsWrapper</h1>
      {children}
    </Container>
  );
};

export default ModelsWrapper;
