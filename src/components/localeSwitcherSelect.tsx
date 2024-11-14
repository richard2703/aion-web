import React from "react";
import { Check, Languages } from "lucide-react";
import clsx from "clsx";
import { useTransition } from "react";
import { Locale } from "../i18n/config";
import { setUserLocale } from "../services/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <div
        className={clsx(
          "flex items-center rounded-sm p-2 transition-colors",
          "sm:flex-row", // Stack vertically on small screens
          isPending && "pointer-events-none opacity-60"
        )}
      >
        <Languages className="h-6 w-6 transition-colors text-white sm:text-sm" />
        <select
          defaultValue={defaultValue}
          aria-label={label}
          onChange={onChange}
          className="ml-2 appearance-none bg-transparent text-white border-none focus:border-none rounded sm:text-sm" // Adjust font size for mobile
        >
          {items.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className="p-2 bg-slate-800"
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
