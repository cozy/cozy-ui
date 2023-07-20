```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import QualificationGrid from 'cozy-ui/transpiled/react/QualificationGrid'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [{ noUndefined: false, noOthers: false }]
initialState = { selectedQualification: undefined }

;

<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <>
        <div className="u-mb-1">Selected qualification: {state.selectedQualification}</div>
        <QualificationGrid
          noUndefined={variant.noUndefined}
          noOthers={variant.noOthers}
          onClick={qualification => setState({ selectedQualification: qualification })}
        />
      </>
    )}
  </Variants>
</DemoProvider>
```
