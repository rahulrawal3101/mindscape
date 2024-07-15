// // import { Inter } from "next/font/google";
// // import "./globals.css";

// // const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body style={{padding:'0px', margin:'0px'}}>{children}
//        {/* Hotjar Tracking Code for Site 5054607 (name missing) */}
//        <script>
//         (function(h,o,t,j,a,r){
//             h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//             h._hjSettings={hjid:5054607,hjsv:6};
//             a=o.getElementsByTagName('head')[0];
//             r=o.createElement('script');r.async=1;
//             r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//             a.appendChild(r);
//         })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
//     </script>
//       </body>
      
//     </html>
//   );
// }


// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
import React from 'react';

const metadata = {
  title: "Mindscape",
  description: "Play exciting quiz games online and test your knowledge. Join our quiz community today!",
  keywords: "Mental Stamina, digital world, cognitive deficits, academic performance, educational game,digital distractions,digital distractions,cognitive abilities,Enhanced Memory,Interactive games,memory retention,Critical Thinking,Puzzles and challenges,problem-solving skill,"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
        {/* Hotjar Tracking Code for Site 5054607 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5054607,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
          }}
        />
      </head>
      <body style={{ padding: '0px', margin: '0px' }}>
        {children}
      </body>
    </html>
  );
}

