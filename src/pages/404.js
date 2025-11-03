import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { Seo } from '../components/Seo';

const NotFoundPage = () => (
  <Layout bodyClass='404'>
    <Seo title='404: Not found' />
    <div className='not-found' data-theme='dark'>
      <h1>404</h1>
      <p>
        Take me back to <Link to='/'>venelin.ca</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
