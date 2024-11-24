import 'i18next';
import type { resources, defaultNS } from "./common/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources["en"];
  }
}

export function use(any: any): {
  use: (value: any) => {
    use: (param: any) => {
      init(arg0: { defaultNS: string; ns: string[]; debug: boolean; fallbackLng: string; interpolation: { escapeValue: boolean; }; backend: { loadPath: string; }; }): unknown;
      use: (param: any) => {
        use: (param: any) => void
      }
    }
  }
} {
  throw new Error("Function not implemented.");
}

