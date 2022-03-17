import { Htag, Button, Paragraph } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Heading 1</Htag>
      <Htag tag='h2'>Heading 2</Htag>
      <Htag tag='h3'>Heading 3</Htag>
      <Button appearance='primary' arrow='down' className='hello'>Узнать подробнее</Button>
      <Button appearance='ghost' arrow='down'>Читать отзывы</Button>
      <Button appearance='ghost' arrow='right'>Читать отзывы</Button>
      <Paragraph size='s'>small</Paragraph>
      <Paragraph size='m'>medium</Paragraph>
      <Paragraph size='b'>big</Paragraph>
    </div>
  );
}
