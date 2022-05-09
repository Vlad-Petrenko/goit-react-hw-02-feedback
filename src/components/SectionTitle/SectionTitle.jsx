import { Section, Title } from './SectionTitle';

const SectionTitle = ({ children, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
};
export default SectionTitle;
