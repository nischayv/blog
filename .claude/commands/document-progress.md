---
description: Document current plan and progress to a markdown file for hard restart
allowed-tools: [Write, Read, TodoRead]
---

# Document Progress for Hard Restart

For large tasks, document the current state, plan, and progress to enable continuing work after a full session restart.

Create a comprehensive `.claude/progress.md` file that includes:

1. **Current Task**: What we're working on
2. **Plan**: The overall approach and steps
3. **Completed Work**: What has been finished so far
4. **Current State**: Where we are now
5. **Next Steps**: What needs to be done next
6. **Important Context**: Any key decisions, blockers, or notes

After creating this file, inform the user they can now `/clear` and start a new session by asking Claude to read `.claude/progress.md` and continue from there.
