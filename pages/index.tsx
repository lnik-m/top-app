import { Htag, Button, Paragraph, Tag } from '../components';

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

      <Tag size='m' color='l-blue'>10</Tag>
      <Tag size='s' color='ghost'>Photoshop</Tag>
      <Tag size='m' color='red'>hh.ru</Tag>
      <Tag size='s' color='primary'>Подготовка макетов</Tag>
      <Tag size='m' color='green'>-10 000 ₽ </Tag>
      
    </div>
  );
}
