import createIntlMiddleware from "next-intl/middleware";

const appLocales = ["tr","en","ur","es","ar","de","it"];
const appDefaultLocale = "en";
const intlMiddleware = createIntlMiddleware({
  locales: appLocales,
  localePrefix: "always",
  defaultLocale: appDefaultLocale,
});

export default function middleware(req) {
    return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/((?!api|_next|.*\\..*).*)"],
};