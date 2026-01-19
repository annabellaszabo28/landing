import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Web2Home = lazy(() => import("./pages/Web2Home"));
const Web3Home = lazy(() => import("./pages/Web3Home"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

// Original pages (keep if needed or remove if obsolete)
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostDetail = lazy(() => import("./pages/BlogPostDetail"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PPCAdsPage = lazy(() => import("./pages/PPCAdsPage"));
const AISearchPage = lazy(() => import("./pages/AISearchPage"));
const SEOAdsPage = lazy(() => import("./pages/SEOAdsPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const WebsiteBuildingPage = lazy(() => import("./pages/WebsiteBuildingPage"));
const ProductPlanningPage = lazy(() => import("./pages/ProductPlanningPage"));
const AppBuildingPage = lazy(() => import("./pages/AppBuildingPage"));
const CMOPage = lazy(() => import("./pages/CMOPage"));
const AINativePage = lazy(() => import("./pages/AINativePage"));

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* Web2 Section */}
      <Route path="/marketing" component={Web2Home} />
      <Route path="/marketing/:slug">
        {(params) => <ServiceDetail type="web2" />}
      </Route>

      {/* Web3 Section */}
      <Route path="/web3" component={Web3Home} />
      <Route path="/web3/:slug">
        {(params) => <ServiceDetail type="web3" />}
      </Route>

      <Route path="/about" component={AboutPage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/work/:slug" component={CaseStudyDetail} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostDetail} />
      <Route path="/contact" component={ContactPage} />

      {/* Landing Pages */}
      <Route path="/ppc/performance_marketing" component={PPCAdsPage} />
      <Route path="/ai_search/growth" component={AISearchPage} />
      <Route path="/seo/organic_growth" component={SEOAdsPage} />
      <Route path="/services/website-building" component={WebsiteBuildingPage} />
      <Route path="/services/product-planning" component={ProductPlanningPage} />
      <Route path="/services/website-building" component={WebsiteBuildingPage} />
      <Route path="/services/product-planning" component={ProductPlanningPage} />
      <Route path="/services/app-building" component={AppBuildingPage} />

      {/* Premium Landing Pages */}
      <Route path="/cmo" component={CMOPage} />
      <Route path="/ai-native" component={AINativePage} />

      {/* Legal */}
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/cookies" component={CookiesPage} />

      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      // switchable
      >
        <TooltipProvider>
          {/* @ts-ignore */}
          <HelmetProvider>
            <Toaster />
            <Suspense fallback={<LoadingSpinner />}>
              <Router>
                <Routes />
              </Router>
            </Suspense>
          </HelmetProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
