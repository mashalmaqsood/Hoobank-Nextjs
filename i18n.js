import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
// import { appLocales } from "@/configs/locale";

const appLocales = ["tr","en","ur","es","ar","de","it"];
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!appLocales.includes(locale)) notFound();
  return {
    messages: (await import(`./locales/${locale}/translation.json`)).default,
  };
});

