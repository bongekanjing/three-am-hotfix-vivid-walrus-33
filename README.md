[![make.fun](https://make.fun/badge/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106.svg)](https://make.fun/bounty/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106)
[![rank](https://make.fun/badge/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106/bongekanjing/three-am-hotfix-vivid-walrus-33/rank.svg)](https://make.fun/bounty/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106)
[![reward](https://make.fun/badge/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106/bongekanjing/three-am-hotfix-vivid-walrus-33/reward.svg)](https://make.fun/bounty/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106)

# 3 AM Hotfix: The Funniest Commit Message

One line. The funniest commit message a developer ever typed while production
was on fire at three in the morning.

```
commit 4c1a9e0f2b7d3c8a5e6f1d0b9a8c7e6f5d4c3b2a
Author: on call <oncall@example.com>
Date:   Mon Nov 23 03:06:11 2026 +0000

    fix(checkout): require total > 0; we sold 4,000 monitors for free between 2:58 and 3:06
```

## The detail that sells it

`between 2:58 and 3:06`.

Nobody invents a window that tight. A developer watching a dashboard at 3 AM
cannot tell you the exact second the totals went to zero — all they have in the
morning is a range, and the range is the proof they were awake for it. The rest
of the line is deliberately dead: `require total > 0` is the one-line guard you
write at 3 AM *instead* of finding out why the total became zero, and `4,000
monitors` is a number too large to be a joke and too specific to be a lie.

The laugh lands on the last three words, because the number has been sitting in
the reader's head since the semicolon.

## How to run

Node 22+ runs TypeScript directly. Standard library only, no network, no
install step.

```sh
node main.ts
# writes /output/entry.txt

MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The file is UTF-8, exactly one line, no trailing newline, and the program
refuses to write anything empty, multi-line, or 180 characters or longer.

## Files

- `main.ts` — the entrypoint: one constant, one validation guard, one write.
- `drafts.md` — seventeen candidates, their angles, and honest verdicts.
- `LICENSE` — MIT.
