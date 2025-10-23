export namespace locales {
    export { en };
    export { fr };
    export { ru };
    export { vi };
}
export function getActionsI18n(): {
    t: any;
    f: (date: any, formatStr: any, opts?: {}) => string | undefined;
    lang: any;
};
declare var _default: Component;
export default _default;
import en from "./en.json";
import fr from "./fr.json";
import ru from "./ru.json";
import vi from "./vi.json";
