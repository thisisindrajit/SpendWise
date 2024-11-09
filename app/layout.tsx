import type { Metadata } from "next";
import "./globals.css";
import { FC } from "react";

// TODO: Move constants to a separate file
export const metadata: Metadata = {
  title: "SpendWise",
  description:
    "SpendWise is an AI based expense tracker that is dead simple to use.",
};

const RootLayout: FC<Readonly<{
  children: React.ReactNode;
}>> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@300,400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="p-4 lg:p-6 flex flex-col items-center min-h-screen">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
