import { ReactNode } from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

interface PageProps {
children: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection modelName="Model One" overlayNode={ <DefaultOverlayContent label="Model One" descripition='Order Online fro Delivery'/>
          }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;