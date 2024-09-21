import SpainFlag from "@icons/flags/Spain.astro";
import UnitedStatesFlag from "@icons/flags/UnitedStates.astro";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
  },
  en: {
    "nav.inicio": "Home",
  },
} as const;

export const routes = {
  es: {
    home: "home",
  },
  en: {
    home: "home",
  },
};
