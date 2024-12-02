import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
 
export default async function RootLayout({
  children
}) {
  const locale = await getLocale();
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}