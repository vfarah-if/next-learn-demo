import Link from 'next/link'
import Header from '../components/Header';
import Layout from './../components/MyLayout';

export default function Index() {
  return (
    <div>
      <Header />
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Layout>
        <p>Hello Next.js</p>
      </Layout>
    </div>
  )
}
