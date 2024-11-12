import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./localeSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "es",
          label: t("es"),
        },
        {
          value: "en",
          label: t("en"),
        },
        // {
        //   value: "de",
        //   label: t("de"),
        // },
      ]}
      label={t("label")}
    />
  );
}
