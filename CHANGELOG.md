# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.2](https://github.com/amirdaraee/astro-pulsar/compare/v0.2.1...v0.2.2) (2025-11-11)

### Fixed
- Fixed GitHub Actions build failures
- Resolved TypeScript errors in Layout.astro
- Corrected Footer component prop interface

### Changed
- Improved GitHub release notes workflow to extract full changelog content
- Updated release automation to handle both standard-version and Keep a Changelog formats

### [0.2.1](https://github.com/amirdaraee/astro-pulsar/compare/v0.2.0...v0.2.1) (2025-11-11)

### Fixed
- Fixed build errors caused by `showCopyright` prop references
- Removed unused `showCopyright` from Layout.astro Props interface
- Updated index.astro to remove `showCopyright` prop

## [0.2.0] - 2024-11-11

### Added
- WebP image support with automatic conversion for optimized performance
- Sample blog post images (sample-1.jpg, sample-2.jpg) with WebP versions
- Logo WebP version with 98% size reduction (17KB vs 829KB)
- Custom favicon set (16x16, 32x32, Apple touch icon, Android chrome icons)

### Changed
- Updated author information to "amirdaraee" throughout the project
- Updated GitHub repository URLs to amirdaraee/astro-pulsar
- Updated email to amirdaraee@gmail.com
- Blog post images now use sample-1.jpg and sample-2.jpg with image credits
- All blog post authors updated to "amirdaraee"

### Fixed
- Fixed double slash bug in blog image paths (was //sample-1.webp, now /sample-1.webp)
- Fixed image loading issues in blog listing and individual post pages
- Corrected image path handling in blog templates

### Removed
- Copyright notice from footer (keeping only social links)

## [0.1.0] - 2024-11-10

### Added
- Initial release of Astro Pulsar theme
- Dark mode support with localStorage persistence
- SEO optimization (meta tags, Open Graph, Twitter Cards, JSON-LD)
- Responsive design with pure Tailwind CSS (no Bootstrap)
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
- Comprehensive testing documentation and test suite
- Test blog post for verifying theme functionality
- Versioning and changelog system with standard-version
- Contributing guidelines and commit conventions

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
- Standard-version configuration for automated releases

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

[Unreleased]: https://github.com/amirdaraee/astro-pulsar/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/amirdaraee/astro-pulsar/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/amirdaraee/astro-pulsar/releases/tag/v0.1.0
