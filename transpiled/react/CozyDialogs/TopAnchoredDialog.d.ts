export default TopAnchoredDialog;
/**
 * A Dialog that will not be centered vertically. Useful when
 * the height of the dialog can vary, for example if there are
 * tabs inside the dialog, or if there is a list that can be
 * filtered.
 *
 * Normally, the Dialog is centered vertically, and this can lead
 * to "jumps" if the content gets taller or shorter.
 */
declare const TopAnchoredDialog: React.ComponentType<(Pick<import("@material-ui/types").ConsistentWith<any, {
    classes: import("@material-ui/styles").ClassNameMap<"paper" | "scrollPaper">;
}>, string | number | symbol> | Pick<import("@material-ui/types").ConsistentWith<any, {
    classes: import("@material-ui/styles").ClassNameMap<"paper" | "scrollPaper">;
}> & {
    children?: React.ReactNode;
}, string | number | symbol>) & import("@material-ui/styles/withStyles/withStyles").StyledComponentProps<"paper" | "scrollPaper">>;
import React from "react";
