import React from 'react';

function Layout({ children }) {
  return (
    <main>This is wrapped in Layout
      {children}
    </main>
  );
}

export default Layout;
