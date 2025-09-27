import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEffect } from 'react';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    window.location.replace('/intro');
  }, []);

  return null;
}
