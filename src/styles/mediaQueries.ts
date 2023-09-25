//If any change is made in the breakpoints, the useScreenSize hook must be modified

export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
};

export const mediaQueries = {
  greaterThan:
    (key: keyof typeof breakpoints) => (style: TemplateStringsArray | string) =>
      `@media (min-width: ${breakpoints[key]}px) { ${style} }`,

  lessThan:
    (key: keyof typeof breakpoints) => (style: TemplateStringsArray | string) =>
      `@media (max-width: ${breakpoints[key]}px) { ${style} }`,

  between:
    (min: keyof typeof breakpoints, max: keyof typeof breakpoints) =>
    (style: TemplateStringsArray | string) =>
      `@media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max]}px) { ${style} }`,
};
