declare module '*.styl' {
  const classes: Record<string, string>
  export default classes
}

declare module 'cozy-ui/react/*' {
  const component: (props: Record<string, unknown>) => JSX.Element
  export default component
}

declare module 'cozy-ui/react/Avatar/helpers' {
  export function nameToColor(name: string): string
}
