/* eslint-disable no-unused-vars */
import cx from 'classnames'
import React, { forwardRef } from 'react'

/**
 Be aware that context is spread to every components but should not be spread to Table components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/
const virtuosoComponents = {
  List: forwardRef(({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        // display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(8.4rem, 1fr))',
        // padding: '0.5rem',
        ...style
      }}
    >
      {children}
    </div>
  )),
  Item: ({ children, ...props }) => (
    <div
      {...props}
      style={{
        padding: '0.5rem',
        // width: '33%',
        display: 'flex',
        flex: 'none',
        alignContent: 'stretch',
        boxSizing: 'border-box'
      }}
    >
      {children}
    </div>
  )
  // Scroller: forwardRef(({ context, ...props }, ref) => (
  //   <TableContainer {...props} ref={ref} />
  // )),
  // Table: forwardRef(({ context, ...props }, ref) => (
  //   <Table {...props} ref={ref} />
  // )),
  // TableHead: forwardRef(({ context, className, ...props }, ref) => (
  //   <TableHead {...props} className={cx(className, 'virtualized')} ref={ref} />
  // )),
  // TableBody: forwardRef(({ context, ...props }, ref) => (
  //   <TableBody {...props} ref={ref} />
  // )),
  // TableFooter: forwardRef(({ context, ...props }, ref) => (
  //   <TableFooter {...props} ref={ref} />
  // )),
  // TableRow: props => <TableRow {...props} />
}

export default virtuosoComponents
