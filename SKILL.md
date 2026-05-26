---
name: direct-writing
description: Rewrite prose so it speaks directly about the subject instead of the artifact, author, page, course, repo, agent, or writing process. Use when Codex writes, edits, reviews, or polishes documentation, course material, UI copy, landing-page copy, research descriptions, READMEs, slides, reports, or any other prose where self-referential framing, meta commentary, "this page/example/course teaches" language, or tool-centered copy should be removed.
---

# Direct Writing

## Overview

Use direct subject-matter prose. Replace copy that talks about the page, example,
course, author, or act of explanation with copy that names the concept, behavior,
claim, evidence, or action.

## Workflow

1. Identify the real subject: method, task, artifact, result, policy, user action,
   or claim.
2. Mark self-referential phrases that point at the container instead of the
   subject.
3. Rewrite each sentence so the subject does the work.
4. Keep necessary operational context only when the reader needs it to act.
5. Check that the final copy can stand alone outside its current page or thread.

## Self-Reference To Remove

Replace patterns like:

- "This page explains..."
- "This example teaches..."
- "Students can study..."
- "The course uses this to..."
- "In this section, we will..."
- "The repo includes..."
- "The goal of this text is..."
- "A tiny CLI keeps projects organized..."
- "AI agents are allowed in the lab..."

Use direct replacements:

- "DPO compares chosen and rejected completions directly."
- "A verifier turns task success into a reward signal."
- "The artifact runs locally from a checkpoint and tokenizer state."
- "The evaluation reports accuracy, latency, failure modes, and limits."
- "The model learns the literal prompt and answer format."

## Keep When It Is The Actual Subject

Do not remove references to courses, students, repositories, pages, examples, or
agents when they are genuinely the subject of the sentence.

Keep:

- "Students submit a model card by December 13." The subject is a policy.
- "Clone the repository into `~/.codex/skills`." The subject is installation.
- "The page is published with GitHub Pages." The subject is deployment.

Remove or rewrite:

- "This page shows why DPO matters." -> "DPO matters when relative preference is
  easier to collect than a single gold answer."
- "Students can use GRPO to study rewards." -> "GRPO uses group-relative rewards
  to increase the probability of successful samples."
- "This example teaches local inference." -> "Local inference loads released
  files and generates without an external API."

## Rewrite Heuristics

- Put the concept or actor first.
- Prefer verbs that describe what happens: trains, compares, scores, loads,
  evaluates, exports, verifies, adapts.
- Replace "can learn about" with the actual operation.
- Replace "is useful for teaching/showing" with the real usefulness.
- Replace "we/you/students will" with action or requirement when possible.
- Preserve concrete commands, dates, file paths, policies, and deliverables.
- Cut throat-clearing such as "the goal is to", "the idea is that", and "this
  section covers" unless it carries necessary structure.

## Output

When editing existing prose, return the rewritten text or patch the source file.
When reviewing prose, list the self-referential phrase, explain why it weakens
the copy, and give the direct replacement.

For more before/after patterns, read `references/patterns.md`.
