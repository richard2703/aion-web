import React, { useState } from "react";
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
  const [selectedLocale, setSelectedLocale] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  function onSelect(locale: Locale) {
    setSelectedLocale(locale);
    setIsOpen(false);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <button
        aria-label={label}
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          "flex items-center rounded-sm p-2 transition-colors bg-transparent",
          isPending && "pointer-events-none opacity-60"
        )}
      >
        <img
          src={`/flags/${selectedLocale}.png`}
          alt={`${selectedLocale} flag`}
          className="w-4 h-4 mr-2"
        />
        <span className="text-lg font-medium">
          {items.find((item) => item.value === selectedLocale)?.label}
        </span>
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 mt-1 bg-slate-800 rounded shadow-lg">
          {items.map((item) => (
            <li key={item.value}>
              <button
                onClick={() => onSelect(item.value as Locale)}
                className="flex items-center p-2 w-full hover:bg-slate-700"
              >
                <img
                  src={`/flags/${item.value}.png`}
                  alt={`${item.label} flag`}
                  className="w-4 h-4 mr-2"
                />
                <span className="text-lg font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
