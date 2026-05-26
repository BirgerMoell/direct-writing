# Direct Writing Pattern Library

Use this reference when a text contains several kinds of self-referential copy.

## Core Test

Ask: "Would this sentence still make sense if copied into another page, slide, or
report?" If not, it may be talking about its container instead of its subject.

## Common Rewrites

| Weak pattern | Direct pattern |
| --- | --- |
| "This page explains X." | "X does Y." |
| "This example teaches X." | "X works by Y." |
| "Students can study X." | "X reveals Y / X supports Y / X requires Y." |
| "The course uses X to..." | "X enables..." |
| "We will look at X." | "X matters because..." |
| "The repo includes X." | "X provides..." |
| "The goal is to show X." | "X is..." |
| "A tiny CLI keeps..." | "The workflow keeps..." |

## Technical Method Copy

Before:

> This example teaches cross-entropy loss by showing how students can compare
> model outputs to labels.

After:

> Cross-entropy loss compares predicted token probabilities with the correct
> target tokens and penalizes low probability on the right answer.

Before:

> Students can study DPO as a way to learn beyond one gold answer.

After:

> DPO optimizes relative preference when several answers are plausible and one
> completion is preferred over another.

Before:

> This page shows how GRPO can be used in the course.

After:

> GRPO samples multiple completions, scores them with a verifier, and increases
> the probability of completions that outperform the group.

## Course Or Project Copy

Keep institutional facts direct:

- "The proposal is due October 8."
- "Each project submits a model card, dataset card, and artifact manifest."
- "Attendance is required at progress seminars."

Rewrite framing:

- "In this assignment, students will learn how to..." -> "The assignment requires..."
- "This project is about exploring whether..." -> "The project tests whether..."
- "The course gives students a chance to..." -> "The theme focuses on..."

## Product Or Website Copy

Before:

> This page gives you everything you need to install the skill.

After:

> Install the skill by cloning the repository into `~/.codex/skills/direct-writing`.

Before:

> The website explains the problem with self-referential writing.

After:

> Self-referential writing shifts attention from the subject to the container:
> page, repo, course, author, or process.

## Final Pass Checklist

- Subject appears before the container.
- Verbs describe the real mechanism or action.
- "This page/example/section/course/repo" appears only when the artifact itself
  is the subject.
- "Students" appears only for policy, logistics, assignments, or learning
  outcomes.
- Copy preserves concrete commands, deadlines, source names, and deliverables.
