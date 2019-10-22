A `Hero` is used to to showcase key marketing messages. It
is perfect for onboarding an app.

```jsx
import Hero, {
  Title,
  Subtitle,
  Section,
  Sections,
  Paragraph,
  CTA,
  Icon
} from 'cozy-ui/transpiled/react/Hero';
import Button from 'cozy-ui/transpiled/react/Button';
import { t } from '../../docs/utils';

const RED = '#f52d2d'
const PURPLE = '#a75bcb'
const BLUE = '#2d8af2';

<Hero>
  <Title>{t('Onboarding.title.desktop')}</Title>
  <Sections>
    <Section>
      <Icon color={RED} icon='warning' />
      <Subtitle>{t('Onboarding.manage-budget.title')}</Subtitle>
      <Paragraph>{t('Onboarding.manage-budget.description')}</Paragraph>
    </Section>
    <Section>
      <Icon color={PURPLE} icon='paperplane' />
      <Subtitle>{t('Onboarding.save-time.title')}</Subtitle>
      <Paragraph>{t('Onboarding.save-time.description')}</Paragraph>
    </Section>
    <Section>
      <Icon color={BLUE} icon='folder' />
      <Subtitle>{t('Onboarding.cozy-assistant.title')}</Subtitle>
      <Paragraph>{t('Onboarding.cozy-assistant.description')}</Paragraph>
    </Section>
  </Sections>
  <CTA>
    <Button
      label={t('Onboarding.connect-bank-account')}
      onClick={() => flash(t('ComingSoon.description'))} />
  </CTA>
</Hero>

```
