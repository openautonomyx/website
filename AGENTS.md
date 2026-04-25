<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repository Agent Instructions

Scope: entire repository.

This repository follows the shared OpenAutonomyX instruction layer in `openautonomyx/common-instructions`.

## Content-only alignment rule

For documentation alignment tasks, update README files, docs, examples, copy, and repo-level guidance only. Do not change application code unless a human maintainer explicitly requests implementation work.

## Shared references

Use these shared references as the default baseline:

- `standards/engineering-execution-standard.md`
- `policies/context-and-guardrails-policy.md`
- `policies/test-and-process-improvement-policy.md`
- `policies/airgapped-operation-policy.md`

Do not duplicate shared policies in this repository. Reference them and add only website-specific guidance.

## Website content scope

In scope:

- Product and organization website copy
- Website README and operating documentation
- Content structure and navigation notes
- SEO/schema documentation
- Review notes for substantial content changes

Out of scope:

- Organization-level vision or strategy source documents
- Shared prompt packs
- Shared code/config packages
- Unreviewed production-facing code changes

## Review guardrail

Production-facing website content should be reviewable, accurate, and aligned with OpenAutonomyX positioning. Require reviewer approval and HITL sign-off before release when changes affect public claims, pricing, security, compliance, or product commitments.
