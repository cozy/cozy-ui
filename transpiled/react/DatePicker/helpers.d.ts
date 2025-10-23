export function makeFormat({ ampm, mode, lang }: {
    ampm: any;
    mode: any;
    lang: any;
}): "dd/LL/yyyy" | "LL/dd/yyyy" | "HH:mm" | "HH:mm a" | "dd/LL/yyyy HH:mm" | "LL/dd/yyyy HH:mm a" | "LL/dd/yyyy HH:mm" | "LL/dd/yyyy a";
