const FakeRootRef = () => {
  console.warn(
    'RootRef has been removed. Instead of using RootRef wrapper `<RootRef rootRef={ref}><Button /></RootRef>`, use ref directly on element `<Button ref={ref} />`'
  )
}

export default FakeRootRef
