export function makeActions(actions?: Function[], options?: {}): object[];
export function getActionName(actionObject: any): string;
export function getOnlyNeededActions(actions: any, docs: any): any;
export function makeBase64FromFile(file: File): Promise<string | null>;
export function fileToArrayBuffer(file: File): Promise<ArrayBuffer>;
export function addFileToPdf(pdfDoc: PDFDocument, file: File): Promise<ArrayBuffer>;
export function makePdfBlob(client: import('cozy-client/types/CozyClient').default, docs: array): Promise<object>;
import { PDFDocument } from "pdf-lib/cjs/api";
