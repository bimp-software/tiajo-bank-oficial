import type { TFunction } from "i18next";

export type WithT = {
    t: TFunction;
};

export type WithTAndLang = {
    t: TFunction;
    lang: string;
};