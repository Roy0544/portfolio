"use client";
import React, { useState, useEffect } from 'react';

/**
 * ShowcaseCardProxy
 * 
 * This component loads the Framer module at runtime in the browser.
 * This bypasses Turbopack's lack of support for experimental.urlImports.
 */
export default function ShowcaseCardProxy(props) {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dynamic import of the Framer module
    // We use a variable to prevent the bundler from trying to resolve this at build time
    const framerUrl = "https://framer.com/m/Showcase-Card-hbtb.js@baT94z3cbRmShOSZjllW";
    
    import(framerUrl)
      .then((mod) => {
        setComponent(() => mod.default);
      })
      .catch((err) => {
        console.error("Framer Component Load Error:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="p-6 bg-red-950/20 border border-red-900 rounded-2xl text-red-400 text-sm">
        Failed to load Framer component. <br/>
        Ensure you are online and urlImports are configured if using Webpack.
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="w-full h-full bg-neutral-900 animate-pulse rounded-2xl border border-neutral-800 flex items-center justify-center">
        <span className="text-neutral-500 text-xs">Loading Framer...</span>
      </div>
    );
  }

  return <Component {...props} />;
}
