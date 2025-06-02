import React from 'react';

export const dyanmic = 'force-dynamic'; // This page will always be revalidated

const DynamicPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl">Welcome to the Revalidate Page</h1>
      <p>This is a simple static page for your application.</p>
    </div>
  );
};

export default DynamicPage;