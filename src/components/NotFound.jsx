import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex-grow w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
  404 - Page Not Found
</h1>
<p className="mt-4 text-lg text-gray-800 dark:text-gray-200">
  Sorry, the page you are looking for doesn't exist.
</p>
<Link to="/" className="mt-6 text-blue-500 hover:underline dark:text-blue-400">
  Go back to Home
</Link>
    </div>
  );
};

export default NotFound;
