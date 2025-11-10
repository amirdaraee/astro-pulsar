# Release Process

This document describes how to create releases for Astro Pulsar.

## Automated Release Workflow

Releases are automatically created when you push a git tag. The GitHub Actions workflow will:

1. ✅ Run type checking
2. ✅ Build the project
3. ✅ Extract changelog for the version
4. ✅ Create GitHub release with changelog
5. ✅ Upload distribution archives (.tar.gz and .zip)

## Creating a Release

### Option 1: Automatic with Standard-Version (Recommended)

```bash
# 1. Make sure all changes are committed
git status

# 2. Run the release script (builds, updates version, updates CHANGELOG)
npm run release          # Automatic version bump based on commits
# OR
npm run release:patch    # 0.1.0 -> 0.1.1
npm run release:minor    # 0.1.0 -> 0.2.0
npm run release:major    # 0.1.0 -> 1.0.0

# 3. Push the commit and tag
git push --follow-tags origin main

# 4. GitHub Actions will automatically create the release! 🎉
```

### Option 2: Manual Release

```bash
# 1. Update version in package.json
npm version patch  # or minor, or major

# 2. Update CHANGELOG.md manually
# Add new version section with changes

# 3. Commit changes
git add CHANGELOG.md package.json package-lock.json
git commit -m "chore(release): x.y.z"

# 4. Create and push tag
git tag -a vx.y.z -m "Release version x.y.z"
git push origin main
git push origin vx.y.z

# 5. GitHub Actions creates the release automatically
```

### Option 3: GitHub Actions Manual Trigger

1. Go to: `Actions` → `Release & Publish` → `Run workflow`
2. Enter version (e.g., `v0.1.0`)
3. Click `Run workflow`
4. The workflow will create the release

## Release Workflow Features

### What Gets Created

1. **GitHub Release**
   - Title: Version number (e.g., "v0.1.0")
   - Description: Extracted from CHANGELOG.md
   - Assets: Distribution archives

2. **Distribution Files**
   - `astro-pulsar-x.y.z.tar.gz` - Gzipped tarball
   - `astro-pulsar-x.y.z.zip` - ZIP archive

### Pre-release Detection

The workflow automatically marks releases as pre-release if the version contains:
- `-alpha`
- `-beta`
- `-rc`
- Any other dash-separated identifier

Examples:
- `v0.1.0-alpha.1` → Pre-release ✓
- `v0.1.0-beta` → Pre-release ✓
- `v0.1.0` → Stable release ✓

## CHANGELOG Format

The workflow extracts changelog from `CHANGELOG.md`. Ensure it follows this format:

```markdown
## [Unreleased]

## [0.2.0] - 2024-11-15

### Added
- New feature description

### Changed
- Changed feature description

### Fixed
- Bug fix description

## [0.1.0] - 2024-11-10
...
```

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/) for automatic versioning:

- `feat:` → Minor version bump (0.1.0 → 0.2.0)
- `fix:` → Patch version bump (0.1.0 → 0.1.1)
- `feat!:` or `BREAKING CHANGE:` → Major version bump (0.1.0 → 1.0.0)

### Examples

```bash
# Features (minor bump)
git commit -m "feat: add RSS feed support"
git commit -m "feat(blog): add pagination to blog listing"

# Fixes (patch bump)
git commit -m "fix: resolve dark mode toggle issue"
git commit -m "fix(seo): correct meta tag generation"

# Breaking changes (major bump)
git commit -m "feat!: restructure configuration system"
git commit -m "feat: change API structure

BREAKING CHANGE: Configuration format has changed"

# Other types (no version bump)
git commit -m "docs: update README"
git commit -m "chore: update dependencies"
git commit -m "refactor: simplify component logic"
```

## Troubleshooting

### Release Not Created

**Problem**: Pushed tag but no release created

**Solutions**:
1. Check Actions tab for workflow errors
2. Ensure tag format is `v*.*.*` (e.g., `v0.1.0`)
3. Verify CHANGELOG.md contains section for the version
4. Check GitHub token permissions in repository settings

### Changelog Not Showing

**Problem**: Release created but changelog is empty

**Solutions**:
1. Ensure CHANGELOG.md format matches expected structure
2. Version in CHANGELOG must match tag (e.g., `[0.1.0]` for tag `v0.1.0`)
3. Check workflow logs for extraction errors

### Build Fails

**Problem**: Workflow fails during build step

**Solutions**:
1. Run `npm run build` locally to check for errors
2. Ensure all dependencies are in package.json
3. Fix TypeScript errors shown in logs

## Release Checklist

Before creating a release:

- [ ] All changes are committed
- [ ] Tests pass (if applicable)
- [ ] `npm run build` succeeds
- [ ] CHANGELOG.md is updated
- [ ] Version follows semantic versioning
- [ ] Commit messages follow conventional commits

After release:

- [ ] Verify release appears on GitHub
- [ ] Check release notes are correct
- [ ] Download and test distribution archives
- [ ] Announce release (if applicable)

## Version Numbering

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0): Breaking changes
- **MINOR** (0.X.0): New features (backwards compatible)
- **PATCH** (0.0.X): Bug fixes (backwards compatible)

### Examples

- `0.1.0` → `0.1.1`: Bug fix
- `0.1.0` → `0.2.0`: New feature
- `0.9.0` → `1.0.0`: First stable release or breaking change
- `1.0.0` → `2.0.0`: Breaking changes in stable version

## GitHub Permissions

The workflow requires these permissions (already configured):

- `contents: write` - Create releases and upload assets
- `pull-requests: write` - Generate release notes from PRs

These are set in the workflow file and don't require additional setup.
