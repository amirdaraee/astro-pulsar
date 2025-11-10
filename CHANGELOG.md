# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive testing documentation and test suite
- Test blog post for verifying theme functionality

### Changed
- Removed Bootstrap dependency, now using pure Tailwind CSS
- Updated all documentation to reflect Tailwind-only stack
- Fixed TypeScript error in blog post template (invalid ARIA role)

### Removed
- Bootstrap package and all references

## [1.0.0] - 2024-11-10

### Added
- Initial release of Astro Pulsar theme
- Dark mode support with localStorage persistence
- SEO optimization (meta tags, Open Graph, Twitter Cards, JSON-LD)
- Responsive design with Tailwind CSS
- Blog functionality with Astro Content Collections
- Syntax highlighting with Prism (GitHub Dark theme)
- Automatic sitemap generation
- Google Analytics 4 integration (optional)
- Accessible design with ARIA labels and semantic HTML
- Mobile-responsive navigation with hamburger menu
- Font Awesome 4.7 icons integration
- Custom 404 error page
- Print-friendly styles for blog posts
- Skip-to-content link for accessibility

### Components
- Layout system with customizable header and footer
- SEO component for meta tags
- Dark mode toggle component
- Responsive header with mobile menu
- Social links footer

### Pages
- Homepage with centered welcome message
- Blog listing page with post cards
- Individual blog post pages with metadata
- About page template
- 404 error page

### Configuration
- Centralized site configuration in `src/config.ts`
- TypeScript support with strict type checking
- Tailwind CSS configuration with dark mode support
- Astro configuration with sitemap integration

---

## Version History Format

### Types of Changes
- `Added` - New features
- `Changed` - Changes in existing functionality
- `Deprecated` - Soon-to-be removed features
- `Removed` - Removed features
- `Fixed` - Bug fixes
- `Security` - Security vulnerability fixes

### Semantic Versioning
- **MAJOR** version (X.0.0): Incompatible API changes
- **MINOR** version (0.X.0): New functionality in a backwards compatible manner
- **PATCH** version (0.0.X): Backwards compatible bug fixes

[Unreleased]: https://github.com/yourusername/astro-pulsar/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/yourusername/astro-pulsar/releases/tag/v1.0.0
