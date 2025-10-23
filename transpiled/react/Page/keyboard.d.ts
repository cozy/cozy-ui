/**
 * Helper hook that makes writing hooks for keyboard easier.
 *
 * With this hook, you can provide an event handler for a particular
 * keyboard event and its lifecycle will be handled for you (attach events
 * on component mount, removes them on component unmount).
 */
export function useKeyboard({ onKeyboardWillShow, onKeyboardWillHide, onKeyboardHeightWillChange, onKeyboardDidHide, onKeyboardDidShow }: {
    onKeyboardWillShow: any;
    onKeyboardWillHide: any;
    onKeyboardHeightWillChange: any;
    onKeyboardDidHide: any;
    onKeyboardDidShow: any;
}): void;
/**
 * Provides keyboardHeight and keyboardState
 *
 * keyboardState can be
 *
 * - will-hide
 * - will-show
 * - hidden
 * - showing
 *
 * More information on the keyboard plugin page:
 * https://github.com/ionic-team/cordova-plugin-ionic-keyboard
 */
export function useKeyboardInfo(): {
    keyboardHeight: number;
    keyboardState: string;
};
