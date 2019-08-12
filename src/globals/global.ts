/*Basic Intent Types*/

export const Intent = {
    NONE: "none" as "none",
    PRIMARY: "primary" as "primary",
    SUCCESS: "success" as "success",
    WARNING: "warning" as "warning",
    DANGER: "danger" as "danger",
    INFO: "info" as "info",
};

export type Intent = typeof Intent[keyof typeof Intent]

export const ButtonSize = {
    LARGE: "large" as "large",
    SMALL: "small" as "small",
    EXTRASMALL: "extrasmall" as "extrasmall"
}

export type ButtonSize = typeof ButtonSize[keyof  typeof ButtonSize]
