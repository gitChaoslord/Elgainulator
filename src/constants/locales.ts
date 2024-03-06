import translation_en_US from "../locales/en.json";
import translation_el_GR from "../locales/el.json";

const locales = Object.freeze({
  en: {
    label: "English",
    native: "English",
    // icon: usFlag,
    translation: translation_en_US,
  },
  el: {
    label: "Greek",
    native: "Ελληνικά",
    // icon: grFlag,
    translation: translation_el_GR,
  }
});

const optionSelector = ({ label, native }: typeof locales['en']) => ({ label, native });

export const localeOptions = Object.freeze(
  Object.entries(locales).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: optionSelector(value)
    }),
    {}
  )
) as Record<string, { label: string, native: string }>;

const resourceSelector = ({ translation }: { translation: typeof import('../locales/en.json') }) => ({ translation });

export const localeResources = Object.freeze(
  Object.entries(locales)
    .filter(([, value]) => !!value.translation)
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: resourceSelector(value)
      }),
      {}
    )
);

export const localeCodes = [...Object.keys(locales)];
