import "./globals.css";
import { ReactNode } from "react";
import { CopilotKit } from "@copilotkit/react-core";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <CopilotKit 
          publicLicenseKey="ck_pub_f9bb1286700938ca71ca9db13b64e88b" 
          showDevConsole={false}
          runtimeUrl="/api/copilotkit" 
          agent="data_agent">
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}