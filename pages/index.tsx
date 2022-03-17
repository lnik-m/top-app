import { Htag, Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>привет1</Htag>
      <Htag tag='h2'>привет2</Htag>
      <Htag tag='h3'>привет3</Htag>
      <Button appearance='primary' className='hello'>Узнать подробнее</Button>
      <Button appearance='ghost' arrow='right'>Читать отзывы</Button>
    </div>
  );
}
