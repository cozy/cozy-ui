import React from 'react'

const migrate = (oldProps, options) => {
  let newProps, msg
  for (let option of options) {
    if (option.src && option.dest) {
      // simple mode
      const src = option.src
      const dest = option.dest
      const oldProp = oldProps[src]
      if (oldProp === undefined) {
        continue
      }
      newProps = newProps || { ...oldProps } // copy props only if we change them
      newProps[dest] = oldProps[src]
      delete newProps[src]
      msg = `\`${src}\` is deprecated and has been migrated automatically, you should use \`${dest}\` now`
    } else if (option.fn) {
      // advanced mode
      const res = option.fn(newProps || oldProps)
      if (res.length !== 2) {
        throw new Error('migrateOption `fn` should return [newProps, msg].')
      }
      ;[newProps, msg] = res
    } else {
      console.warn(
        'migrateProps option is not valid, valid properties are `src`, `dest`, `fn`. You passed',
        option
      )
    }
    if (
      (process.env.NODE_ENV != 'production' ||
        window.SHOW_DEPRECATION_WARNINGS) &&
      msg
    ) {
      console.warn(`Deprecation: ${msg}`)
      msg = null
    }
  }
  // It is possible that no migration has been made, in this case newProps is undefined and we simply
  // return the oldProps
  return newProps || oldProps
}

/**
 * HOC to migrate old props for deprecation purpose.
 *
 * @example
 * Let's say we deprecated the property `withCross` of Modal and replaced
 * it with `closable`. To preserve backward compatibility we use the `migrate`
 * HOC, and provide an array of migrations to perform on the old props.
 *
 * ```
 * const migrateOptions = [{ src: 'withCross', dest: 'closable'}]
 * const Modal = migrate(migrateOptions)(_Modal)
 * ```
 *
 * Here we only have one migration, to rename `withCross` (source) to `closable` (destination).
 * For more complex migration, it is possible to use the `fn` property of a migration. In this
 * case you are responsible for providing a warning message as part of the return value of `fn`.
 *
 * ```
 * const migrateClosableAndReverse = oldProps => {
 *   let newProps
 *   if (oldProps.withoutCross) {
 *     newProps = {...oldProps}
 *     newProps.closable = !oldProps.withoutCross
 *     return [newProps, '`withoutCross` is deprecated. Use `closable` now. Be careful closable = !withoutCross']
 *   } else {
 *     return [oldProps, null]
 *   }
 *   return newProps || oldProps
 * }
 *
 * const migrateOptions = [{ fn: migrateClosableAndReverse }]
 * const Modal = migrate(migrateOptions)(_Modal)
 * ```
 *
 * @param  {Array} migrateOptions - Prop migrations that will be done on the old props
 * @return {HOC}
 */
export default migrateOptions => Component => {
  const Wrapped = oldProps => {
    const newProps = migrate(oldProps, migrateOptions, Component)
    return <Component {...newProps} />
  }
  Wrapped.displayName = Component.displayName || Component.name
  return Wrapped
}
