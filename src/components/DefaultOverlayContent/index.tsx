import { ReactNode } from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string
  descripition: string
}


interface DefaultOverlayContentProps {
  children: ReactNode;
}

const DefaultOverlayContent: React.FC<Props> = ({
  label, descripition
}) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{descripition}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className='white'>Existing Inventor</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
