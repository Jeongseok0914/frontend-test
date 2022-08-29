import Error from 'next/error';
import type { NextPageContext } from 'next';

const ErrorPage = ({ err }: NextPageContext) => {
  return <Error statusCode={err?.statusCode} />;
};

ErrorPage.getInitialProps = async ({ err }: NextPageContext) => {
  return {
    err
  };
};

export default ErrorPage;
