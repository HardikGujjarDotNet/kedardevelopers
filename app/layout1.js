export const metadata = {
  title: 'Kedar Developers',
  description: 'Website under construction',
  icons: '/favicon.ico', // your K favicon in public folder
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}