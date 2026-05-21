'use client';

import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div className="w-full h-screen">
      {/* 
        NOTE: You were using a "Public Viewer" URL (my.spline.design/...) 
        which returns an HTML page. Spline needs a direct .splinecode URL.
        You can get this from Export > Code > React in the Spline editor.
      */}
      <Spline scene="https://prod.spline.design/WuCDOBWCJGbB3bob/scene.splinecode" />
      {/* <iframe src='https://my.spline.design/nexbotrobotcharacterconceptforpersonaluse-0HvbsJ8bKOf1C18UyMcaOiaF/' frameborder='0' width='100%' height='100%'></iframe> */}
    </div>
  );
}
