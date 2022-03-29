import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { Input, Textarea } from '../components';
import { API } from '../helpers/api';

function Home({ menu }:HomeProps): JSX.Element {
  return (
    <>
      <Input placeholder='тест' />
      <Textarea placeholder='тест area' />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}