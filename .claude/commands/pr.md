---
description: Clean up code, stage changes, and prepare a pull request
allowed-tools: [Bash, Read, Edit, Write, Glob, Grep]
---

# Prepare Pull Request

ABSOLUTELY DO NOT ADD created by claude code to the PR or commit. Take no credit whatsoever. 

Prepare a pull request by:

1. Running auto-fixes (`pnpm fix`) - formats code, fixes dependencies, and fixes lint issues
2. Running type checks (`pnpm types:check`)
3. Reviewing all changed files for any issues
4. Staging all changes with git
5. Committing changes with a clear, imperative message. Never ever include Claude Code as an author.
6. Fetching latest from remote and rebasing on main
7. Creating a pull request with a clear summary. 

Make sure all validation passes before creating the PR. Follow the commit and PR guidelines from CLAUDE.md.
