const desktopSize = {
    xs: 360,
    ss: 620,
    sm: 768,
    md: 1024,
    lg: 1200,
}

export const screenSize = {
    xs: `@media (min-width: ${desktopSize.xs}px)`,
    ss: `@media (min-width: ${desktopSize.ss}px)`,
    sm: `@media (min-width: ${desktopSize.sm}px)`,
    md: `@media (min-width: ${desktopSize.md}px)`,
    lg: `@media (min-width: ${desktopSize.lg}px)`,
}
