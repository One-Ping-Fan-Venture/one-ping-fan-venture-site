'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { trackEvent } from '@/lib/analytics';

const focusAreas = [
  'Calm capital that respects founders and their timelines.',
  'Hands-on operating support to keep teams shipping.',
  'Product guidance that balances resilience and velocity.',
];

const ventureHighlights = [
  {
    title: 'Portfolio approach',
    description:
      'We partner with teams building infrastructure, intelligent tooling, and calm consumer experiences.',
  },
  {
    title: 'Measured experimentation',
    description:
      'We ship fast, measure impact, and keep risk surface area transparent for founders and teams.',
  },
  {
    title: 'Leadership coaching',
    description:
      'Seasoned operators help founders navigate pivotal hiring, GTM focus, and sustainable growth.',
  },
];

const handleHeroContactClick = () => trackEvent('Hero CTA Click', { target: 'contact' });
const handleHeroZenShiftClick = () => trackEvent('Hero CTA Click', { target: 'zenshift' });
const handleContactClick = (location: string) => trackEvent('Contact CTA Click', { location });
const handleZenShiftClick = () => trackEvent('ZenShift Click', { location: 'portfolio-highlight' });

export default function HomePage() {
  return (
    <main>
      <Box
        sx={{
          background: 'linear-gradient(120deg, #0f172a 0%, #111827 50%, #0b1324 100%)',
          color: '#e5e7eb',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="flex-start">
            <Typography variant="overline" sx={{ letterSpacing: 2, color: '#a5b4fc' }}>
              ONE PING FAN VENTURES
            </Typography>
            <Typography variant="h2" component="h1" fontWeight={700}>
              Patient capital with a builder&apos;s conviction.
            </Typography>
            <Typography variant="h6" sx={{ color: '#cbd5e1', maxWidth: 720, lineHeight: 1.6 }}>
              We invest in founders crafting resilient companies—balancing thoughtful innovation with
              the operational rigor it takes to win enduring markets.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#contact"
                onClick={handleHeroContactClick}
              >
                Talk with us
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                href="#zenshift"
                onClick={handleHeroZenShiftClick}
              >
                See ZenShift in action
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Calm builders. Intentional outcomes.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We back founders who can hold multiple truths at once—shipping quickly while building
              responsibly, and moving decisively while protecting their teams.
            </Typography>
            <Stack spacing={2}>
              {focusAreas.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.5}
                  alignItems="flex-start"
                  sx={{ color: 'text.secondary' }}
                >
                  <Box
                    sx={{
                      mt: '6px',
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="body1">{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {ventureHighlights.map((highlight) => (
                <Grid key={highlight.title} item xs={12} sm={6}>
                  <Card elevation={3} sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlight.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box id="zenshift" sx={{ backgroundColor: '#0b1324', color: '#e5e7eb', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="overline" sx={{ letterSpacing: 2, color: '#a5b4fc' }}>
                FEATURED BUILD
              </Typography>
              <Typography variant="h4" component="h2" gutterBottom>
                ZenShift accelerates resilient product teams.
              </Typography>
              <Typography variant="body1" sx={{ color: '#cbd5e1' }} paragraph>
                Our studio team is shipping ZenShift, an orchestration layer that keeps distributed
                product squads aligned without sacrificing focus. It&apos;s built for observability,
                thoughtful automation, and calm handoffs.
              </Typography>
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleZenShiftClick}
                  href="https://zenshift.example.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore ZenShift
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  href="#contact"
                  onClick={() => handleContactClick('zenshift-section')}
                >
                  Partner with us
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card
                elevation={6}
                sx={{
                  background: 'linear-gradient(145deg, #111827, #0f172a)',
                  borderColor: '#1f2937',
                  color: '#cbd5e1',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    Visibility without noise
                  </Typography>
                  <Typography variant="body2" paragraph>
                    ZenShift dashboards surface the work that matters and automate the updates teams
                    dread. Event tracking for this section respects privacy by only capturing
                    high-level engagement.
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                  <Typography variant="body2">
                    Click events for ZenShift are recorded anonymously via Plausible to help us
                    understand interest without storing personal identifiers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container id="contact" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h4" component="h2" gutterBottom>
              Ready to collaborate?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              If you&apos;re building the next wave of resilient infrastructure or thoughtful consumer
              products, let&apos;s talk. We keep diligence streamlined and feedback loops fast.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                href="mailto:hello@onepingfan.com"
                onClick={() => handleContactClick('contact-section')}
              >
                Contact the team
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="https://cal.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleContactClick('contact-section')}
              >
                Schedule time
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  How we engage
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Event handlers on these calls-to-action track anonymous engagement only. We care
                  about momentum, not personal data.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expect quick intros, transparent expectations, and pragmatic partnership from
                  operators who have shipped through multiple market cycles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
