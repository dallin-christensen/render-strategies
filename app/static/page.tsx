import React from 'react'; // This page will always be revalidated

const StaticPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl">Welcome to the Static Page</h1>
      <p>This is a simple static page for your application.</p>
    </div>
  );
};

export default StaticPage;