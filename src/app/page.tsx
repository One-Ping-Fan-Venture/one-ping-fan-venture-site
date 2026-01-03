'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const venturePillars = [
  {
    title: 'Venture design with conviction',
    description:
      'We translate market intelligence into differentiated theses, validating problems before committing capital.',
    icon: <DesignServicesIcon fontSize="inherit" aria-hidden />,
  },
  {
    title: 'Full-stack product and GTM',
    description:
      'Technical leaders, product strategists, and revenue operators ship together to reach product-market fit faster.',
    icon: <RocketLaunchIcon fontSize="inherit" aria-hidden />,
  },
  {
    title: 'AI governance from day one',
    description:
      'Responsible data practices, observability, and model evaluation are baked into every build to protect your brand.',
    icon: <AutoGraphIcon fontSize="inherit" aria-hidden />,
  },
];

const studioPrograms = [
  {
    title: 'Venture Studio Sprints',
    description:
      'Four-week sprints to validate customer pain, ship prototypes, and size opportunity with investor-grade rigor.',
    detail: 'Led by product strategists, founders in residence, and AI engineers.',
  },
  {
    title: 'Build-Operate-Transfer',
    description:
      'We build the initial product, hire the core team, and transition ownership with playbooks and controls in place.',
    detail: 'Ideal for enterprises standing up new AI lines of business.',
  },
  {
    title: 'Venture Acceleration',
    description:
      'Scale winning products with revenue design, channel partnerships, and enterprise readiness programs.',
    detail: 'Modern delivery with security, observability, and support baked in.',
  },
];

const recentWins = [
  {
    title: 'Autonomous research copilots',
    description:
      'Reduced analysis time by 70% for a PE diligence team through retrieval-augmented research workflows.',
  },
  {
    title: 'Enterprise knowledge agents',
    description:
      'Launched a compliant, searchable knowledge layer for a global insurer serving 18k employees.',
  },
  {
    title: 'AI-first service delivery',
    description:
      'Rebuilt service playbooks with AI handoffs, lifting gross margins by 11% for a managed services provider.',
  },
];

export default function HomePage() {
  return (
    <main>
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'background.default',
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 10% 20%, rgba(15, 163, 177, 0.16), transparent 30%), radial-gradient(circle at 90% 10%, rgba(11, 61, 145, 0.18), transparent 32%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography variant="overline" color="secondary" sx={{ letterSpacing: 1 }}>
                    AI venture studio
                  </Typography>
                  <Typography variant="h1" component="h1" color="text.primary" sx={{ fontWeight: 800 }}>
                    Purpose-built AI companies with durable fundamentals
                  </Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, fontSize: 18 }}>
                  One Ping Fan partners with founders and enterprise leaders to design, validate, and launch AI-native
                  ventures. We combine research discipline with hands-on building to create products that scale.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="mailto:hello@onepingfan.com?subject=Discovery%20call"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ minWidth: 220, fontWeight: 700 }}
                  >
                    Schedule a discovery call
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    href="#programs"
                    sx={{ minWidth: 220, fontWeight: 700 }}
                  >
                    View our methodology
                  </Button>
                </Stack>
                <Grid container spacing={3} columns={{ xs: 4, sm: 8 }}>
                  {[{ label: '40+ venture experiments', value: 'Validated with enterprise buyers' },
                    { label: 'Senior builders only', value: 'Founders, AI engineers, GTM leaders' },
                    { label: 'Outcomes first', value: 'Product-market fit and revenue readiness' }].map((item) => (
                    <Grid key={item.label} item xs={4} sm={8} md={4}>
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          bgcolor: 'background.paper',
                          boxShadow: (theme) => `0 10px 40px ${theme.palette.primary.main}0d`,
                          height: '100%',
                        }}
                      >
                        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 700 }}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          {item.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                component="article"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: (theme) => `1px solid ${theme.palette.grey[200]}`,
                  boxShadow: (theme) => `0 18px 50px ${theme.palette.grey[300]}99`,
                }}
              >
                <Typography variant="h2" component="h2" sx={{ fontSize: 20, fontWeight: 800, mb: 2 }}>
                  How we build with you
                </Typography>
                <Stack spacing={2.5} divider={<Divider aria-hidden flexItem sx={{ borderColor: 'grey.200' }} />}>
                  {[
                    {
                      title: 'Thesis and opportunity sizing',
                      copy: 'We pressure-test market dynamics and customer urgency to focus on durable problems.',
                      icon: <DomainAddIcon color="primary" aria-hidden />,
                    },
                    {
                      title: 'Solution prototyping and validation',
                      copy: 'Rapid experiments with design partners and measurable adoption signals.',
                      icon: <DesignServicesIcon color="secondary" aria-hidden />,
                    },
                    {
                      title: 'Scale-up with governance',
                      copy: 'Secure infrastructure, observability, and human-in-the-loop controls for enterprise rollouts.',
                      icon: <AutoGraphIcon color="primary" aria-hidden />,
                    },
                  ].map((item) => (
                    <Stack key={item.title} direction="row" spacing={2} alignItems="flex-start">
                      <Box sx={{ fontSize: 28, mt: 0.25 }}>{item.icon}</Box>
                      <Box>
                        <Typography variant="h3" component="h3" sx={{ fontSize: 18, fontWeight: 700 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.copy}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
                <Box mt={3} display="flex" gap={1.5} flexWrap="wrap">
                  <Link href="mailto:hello@onepingfan.com" underline="hover" fontWeight={700}>
                    hello@onepingfan.com
                  </Link>
                  <Divider orientation="vertical" flexItem aria-hidden />
                  <Link href="https://www.linkedin.com/company/one-ping-fan" target="_blank" rel="noreferrer" underline="hover">
                    LinkedIn
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container component="section" maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={3} alignItems="center" textAlign="center" sx={{ maxWidth: 860, mx: 'auto' }}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
            Build decisive momentum with the right partners
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: 18 }}>
            Our studio teams blend research, AI engineering, product strategy, and revenue design to move from idea to
            defensible product quickly—and to keep quality high as you scale.
          </Typography>
        </Stack>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {venturePillars.map((pillar) => (
            <Grid item xs={12} md={4} key={pillar.title}>
              <Card
                component="article"
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: (theme) => `1px solid ${theme.palette.grey[200]}`,
                  boxShadow: (theme) => `0 14px 40px ${theme.palette.grey[300]}66`,
                }}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      fontSize: 26,
                    }}
                    aria-hidden
                  >
                    {pillar.icon}
                  </Box>
                  <Typography variant="h3" component="h3" sx={{ fontSize: 20, fontWeight: 800 }}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pillar.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        component="section"
        id="programs"
        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="overline" sx={{ letterSpacing: 1 }}>
                  Studio programs
                </Typography>
                <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
                  Engagements tailored to your stage
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 540 }}>
                  Whether you are validating an idea or scaling a product line, we assemble the right blend of builders,
                  product operators, and governance experts to move decisively.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {studioPrograms.map((program) => (
                  <Grid item xs={12} key={program.title}>
                    <Card
                      component="article"
                      sx={{
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    >
                      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant="h3" component="h3" sx={{ fontSize: 18, fontWeight: 800 }}>
                          {program.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {program.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                          {program.detail}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container component="section" maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="overline" color="secondary" sx={{ letterSpacing: 1 }}>
                Recent wins
              </Typography>
              <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
                AI ventures in the wild
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We measure success by shipped products, activated users, and the governance that keeps systems reliable.
              </Typography>
              <Link
                href="mailto:hello@onepingfan.com?subject=Portfolio%20request"
                underline="hover"
                color="primary.main"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontWeight: 700 }}
              >
                See full portfolio
                <ArrowForwardIcon fontSize="small" />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {recentWins.map((win) => (
                <Grid item xs={12} sm={6} key={win.title}>
                  <Card
                    component="article"
                    elevation={0}
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      border: (theme) => `1px solid ${theme.palette.grey[200]}`,
                      bgcolor: 'background.paper',
                      boxShadow: (theme) => `0 12px 36px ${theme.palette.grey[300]}66`,
                    }}
                  >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Typography variant="h3" component="h3" sx={{ fontSize: 18, fontWeight: 800 }}>
                        {win.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {win.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box
        component="section"
        id="contact"
        sx={{
          bgcolor: 'background.paper',
          py: { xs: 8, md: 10 },
          borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
                  Let&apos;s build your next AI venture
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
                  Tell us about the customer problem, the market timing, and the constraints. We will assemble a focused
                  team to deliver fast, safe, and measurable outcomes.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href="mailto:hello@onepingfan.com?subject=Venture%20conversation"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Start a conversation
                  </Button>
                  <Button
                    variant="text"
                    color="primary"
                    size="large"
                    href="mailto:hello@onepingfan.com?subject=One%20pager%20request"
                  >
                    Download our one-pager
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card
                component="article"
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: (theme) => `1px solid ${theme.palette.grey[200]}`,
                  bgcolor: 'background.default',
                }}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography variant="h3" component="h3" sx={{ fontSize: 18, fontWeight: 800 }}>
                    What you can expect
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Discovery call focused on objectives, constraints, and stakeholders.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • A proposed sprint plan with resourcing, timeline, and success metrics.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Clear governance and quality bar for every build.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
