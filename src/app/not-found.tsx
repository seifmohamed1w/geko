import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-stone-100">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-stone-900">Page not found</h2>
      <p className="mt-2 max-w-md text-stone-500">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/">
          <Button variant="outline">Go Home</Button>
        </Link>
        <Link href="/catalog">
          <Button>View Catalog</Button>
        </Link>
      </div>
    </Container>
  );
}