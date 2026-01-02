'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

const spinOutSteps = [
  {
    title: 'Discovery & Framing',
    description:
      'Map the customer problem, establish founder-market fit, and set the mission for the experiment.',
  },
  {
    title: 'Validation Sprints',
    description:
      'Run weekly tests with prototypes, small pilots, and commercial signals to prove the opportunity.',
  },
  {
    title: 'Build & Prove',
    description:
      'Develop the core product, sign design partners, and document a repeatable go-to-market motion.',
  },
  {
    title: 'Launch Readiness',
    description:
      'Lock in early adopters, finalize pricing, and capture a clear path to sustainable unit economics.',
  },
  {
    title: 'Spin-Out',
    description:
      'Stand up the new company with leadership, governance, and capital support tailored to the thesis.',
  },
];

const evaluationSignals = [
  'Consistent demand signals from pilots and discovery interviews',
  'Evidence of a repeatable acquisition channel with early conversion data',
  'Clear ROI story for buyers with quantifiable savings or revenue lift',
  'Technical feasibility de-risked with a stable, supportable build',
  'A founding leader committed to owning the problem and recruiting the early team',
];

export default function HomePage() {
  return (
    <main>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box component="section" sx={{ mb: 6, textAlign: 'center' }}>
          <Typography component="h1" variant="h3" gutterBottom>
            One Ping Fan Venture Studio
          </Typography>
          <Typography color="text.secondary" variant="h6">
            We incubate products with operators, prove traction with real customers, and spin out
            independent companies with the right support structure.
          </Typography>
        </Box>

        <Box component="section" sx={{ mb: 6 }}>
          <Typography component="h2" variant="h4" gutterBottom>
            Spin-out process
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            A concise, repeatable path from first insight to a fully independent product company.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card variant="outlined">
                <CardContent>
                  <Typography component="h3" variant="h6" gutterBottom>
                    Timeline at a glance
                  </Typography>
                  <Stack divider={<Divider flexItem />} spacing={2} sx={{ mt: 1 }}>
                    {spinOutSteps.map((step, index) => (
                      <Box key={step.title} sx={{ display: 'flex', gap: 2 }}>
                        <Box
                          sx={{
                            alignItems: 'center',
                            backgroundColor: 'primary.main',
                            borderRadius: '50%',
                            color: 'primary.contrastText',
                            display: 'flex',
                            fontWeight: 700,
                            height: 36,
                            justifyContent: 'center',
                            minWidth: 36,
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Box>
                          <Typography component="h4" variant="subtitle1">
                            {step.title}
                          </Typography>
                          <Typography color="text.secondary" variant="body2">
                            {step.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography component="h3" variant="h6" gutterBottom>
                      Evaluation signals
                    </Typography>
                    <List dense>
                      {evaluationSignals.map((signal) => (
                        <ListItem key={signal} sx={{ alignItems: 'flex-start' }}>
                          <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                            <CheckCircleIcon color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primaryTypographyProps={{ variant: 'body2' }} primary={signal} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardContent>
                    <Typography component="h3" variant="h6" gutterBottom>
                      Independent ownership, governance, and fundraising
                    </Typography>
                    <Typography color="text.secondary">
                      When a product graduates, we formalize ownership for the founding team, set up
                      an independent board cadence, and support the first capital raise so the new
                      company can operate with clear autonomy while staying connected to our network.
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
