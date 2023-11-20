/*
the RootLayout component establishes a basic structure for the entire application, ensuring consistent styling and layout across different views or components. By integrating the StateProvider, it also initializes the global state management system, allowing components within the application to access and update shared states and functions provided by the StateProvider.
*/
import "./globals.css";
import StateProvider from "./StateProvider";

export const metadata = {
  title: "Multiplication Practice",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateProvider>
      <html lang="en" className="font-barlow text-[14px]">
        <body className="w-full min-h-screen flex flex-col justify-center items-center">
          {children}
        </body>
      </html>
    </StateProvider>
  );
}
