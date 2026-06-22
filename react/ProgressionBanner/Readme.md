A banner with a progress bar at the bottom.

```jsx
import useProgression from "cozy-ui/transpiled/react/helpers/useProgression";
import ProgressionBanner from "cozy-ui/transpiled/react/ProgressionBanner";
import { CloudSync2, Icon } from '@linagora/twake-icons'
import Variants from "cozy-ui/docs/components/Variants";
import MuiButton from "cozy-ui/transpiled/react/Button";
import { BreakpointsProvider } from "cozy-ui/transpiled/react/providers/Breakpoints";

const { progression } = useProgression();

const initialVariants = [
  { withValue: true, progressBar: true, withButton: false, customColor: false },
];

<BreakpointsProvider>
  <Variants initialVariants={initialVariants}>
    {(variant) => (
      <ProgressionBanner
        progressBar={variant.progressBar}
        value={variant.withValue && progression}
        color={variant.customColor ? 'var(--errorColorLight)': undefined}
        text={
          variant.withButton
            ? "Storage limit nearly reached"
            : "4 remaining items"
        }
        icon={<Icon icon={CloudSync2} />}
        button={
          variant.withButton && (
            <MuiButton color="primary" onClick={() => alert("Clicked!")}>
              Manage your storage space
            </MuiButton>
          )
        }
      />
    )}
  </Variants>
</BreakpointsProvider>;
```
