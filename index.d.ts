export declare const baseColors: string[];
export declare const colors: string[];
export declare const friendlyColors: string[];
export declare function randomColor(): string;
export declare const colorsMap: Map<string, string>;
export declare const colorsMapRev: Map<string, string>;
export declare function crc32(str: string): number;
export declare function crc32IndexOf(array: any[], value: any): number;
export declare function crc32FromIndex(array: any[], value: any): any;
export declare function friendlyColorFromCrc32(value: any, returnColorCode?: boolean): string;
export declare function friendlyColorCodeFromCrc32(value: any): string;
