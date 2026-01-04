'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
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
          <Stack spacing={3} sx={{ maxWidth: 800 }}>
            <Stack spacing={1}>
              <Typography variant="overline" color="secondary" sx={{ letterSpacing: 1 }}>
                AI Venture Studio
              </Typography>
              <Typography variant="h1" component="h1" color="text.primary" sx={{ fontWeight: 800 }}>
                One Ping Fan Venture LLC
              </Typography>
            </Stack>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.7 }}>
              One Ping Fan Venture LLC is an AI Venture Studio focused on rapidly prototyping, validating,
              and scaling AI-native products. The company builds and operates its own products, spinning out
              independent companies once early signals of product-market fit are demonstrated.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.7 }}>
              The studio is independently founded and operated. Its mission is to identify real customer
              problems early, test product hypotheses with speed and rigor, and evaluate whether a product
              has the potential to become a standalone, venture-scale business. Multiple AI applications
              may be developed and evaluated in parallel, each measured against concrete signals such as
              user adoption, engagement, retention, and customer willingness to pay.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* From Validation to Spin-Out Section */}
      <Box
        component="section"
        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: 800 }}>
            <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
              From Validation to Spin-Out
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7 }}>
              Products that demonstrate strong traction and clear business viability may be separated
              into independent companies with dedicated ownership, governance, and fundraising structures.
              This model allows successful products to scale independently while preserving focus, capital
              efficiency, and execution velocity at the studio level.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Operating and Deployment Section */}
      <Container component="section" maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={3} sx={{ maxWidth: 800 }}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
            Operating and Deployment
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.7 }}>
            One Ping Fan Venture LLC also serves as the operating and deployment vehicle for its products.
            This includes building, hosting, and maintaining production applications distributed through
            websites, the Apple App Store, and Google Play, enabling real-world validation under live
            user conditions.
          </Typography>
        </Stack>
      </Container>

      {/* First Product Section */}
      <Box
        component="section"
        sx={{
          bgcolor: 'background.paper',
          py: { xs: 8, md: 10 },
          borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
              First Product
            </Typography>
            <Card
              elevation={0}
              sx={{
                maxWidth: 600,
                borderRadius: 3,
                border: (theme) => `1px solid ${theme.palette.grey[200]}`,
                boxShadow: (theme) => `0 12px 36px ${theme.palette.grey[300]}66`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Stack spacing={2}>
                  <Typography variant="h3" component="h3" sx={{ fontSize: 24, fontWeight: 800 }}>
                    ZenShift
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    The first product developed under One Ping Fan Venture LLC is ZenShift, an AI-powered
                    meditation and mindfulness application designed to deliver personalized, adaptive experiences.
                  </Typography>
                  <Link
                    href="https://zenshift.onepingfanventure.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontWeight: 700 }}
                  >
                    zenshift.onepingfanventure.com
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Box>

    </main>
  );
}
