import Link from 'next/link';

export const Navigation = () => (
  <nav>
    <ul className="flex">
      <li className="p-2 hover:text-primary-light">
        <Link href="/">
          <h3>Home</h3>
        </Link>
      </li>
      <li className="p-2 hover:text-primary-light">
        <Link href="/about">
          <h3>About</h3>
        </Link>
      </li>
      <li className="p-2 hover:text-primary-light">
        <Link href="/blog">
          <h3>Blog</h3>
        </Link>
      </li>
      <li className="p-2 hover:text-primary-light">
        <Link href="/shop">
          <h3>Shop</h3>
        </Link>
      </li>
    </ul>
  </nav>
);
