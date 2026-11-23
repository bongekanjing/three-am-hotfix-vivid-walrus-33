# Drafts — 3 AM commit message

Seventeen candidates, written one at a time, each tagged with the angle it
plays and an honest verdict. The bar: it has to read like a commit subject a
real developer typed at 3 AM, the laugh has to arrive in the last few words,
and nothing can be a joke *format*. The best ones are funny because they are
true — the dead register of `git log` does the work.

---

### 1. `fix(checkout): require total > 0; we sold 4,000 monitors for free between 2:58 and 3:06`

**Angle:** deeply specific detail that proves the hour (a timestamp window,
stated as a range because the on-call only knows the range).
**Why it lands:** "require total > 0" is a real one-line guard, so the subject
opens in dead technical register. Then the damage report is delivered flat,
with a number too large to be invented and a window too short to be dramatic.
The punch is the last four words: they are the proof it was 3 AM *and* the
admission that somebody was awake to watch it happen. Nobody in the line is
joking, which is exactly why it is funny.

### 2. `revert: "revert "hotfix: timezone""; 1:58 was the last time this worked`

**Angle:** the revert of a revert, plus the resignation in it.
**Why it lands:** nesting quotes inside a revert subject is instantly
recognisable to anyone who has had that night, and the semicolon admission is
pure 3 AM arithmetic — the only known-good state is now a timestamp, not a
commit. Punches on "worked". Strong runner-up; loses a point because it reads
slightly like a puzzle rather than a fact.

### 3. `fix: please`

**Angle:** one-word panic.
**Why it fails:** it is the shrug the brief warns about. Delete it. Two words,
zero information, and a judge has nothing to be amused *by* — the joke is only
in the context, and the context is not in the line.

### 4. `fix(timezone): subtract the offset, not the date, which is what I did at 1:58`

**Angle:** the commit that names exactly what the author did not understand.
**Why it lands:** "subtract the offset, not the date" is a real, hard-won
correction, and appending "which is what I did at 1:58" turns the subject into
a confession that the earlier fix *is* the outage. Good, but 1:58 is doing a
lot of work alone; it proves lateness without quite proving 3 AM.

### 5. `fix(payments): stop retrying 402s, one customer was charged 47 times, none of them successfully`

**Angle:** specific detail plus an over-honest admission of a crime.
**Why it lands:** 402 is the correct status code and retrying it is the
correct-looking bug. The trailing clause "none of them successfully" flips the
whole sentence — 47 attempts, zero money, maximum harm. Fails slightly on the
3 AM criterion: nothing anchors it to the hour.

### 6. `fix(cache): disable the cache, the cache key was the empty string, the cache was the outage`

**Angle:** naming the culprit, escalation by repetition.
**Why it fails:** the three-beat anaphora is a *joke rhythm*, not a commit
rhythm. It reads written. Real 3 AM commits are too tired for rhetorical
structure; they repeat themselves by accident, not on purpose.

### 7. `fix(monitor): health check pointed at a URL that does not exist, so it paged me at 3am about nothing`

**Angle:** blames something inanimate and true (the monitor), with a pager as
the hour's witness.
**Why it lands partially:** "paged me at 3am about nothing" is a genuine laugh
and a genuine grievance. But the punch lands mid-sentence, and the subject
runs long and chatty — a tired developer would have cut "that does not exist".

### 8. `fix(db): add the index I removed in March for being unused`

**Angle:** the admission of a crime, self-inflicted.
**Why it fails:** quietly excellent, but it is about March, not 3 AM. No hour,
no chaos, no punch in the last words. It is a *sad* commit, not a funny one.

### 9. `fix(scheduler): the 3am job now runs at 3am`

**Angle:** the resignation of a tautology.
**Why it fails:** too cryptic to be a laugh. It works only if you already know
the story, and the judge does not. Reads like a shrug in a lab coat.

### 10. `fix(reminders): subtract a timezone, not a day, everyone was reminded at 3am`

**Angle:** the commit names the misunderstanding *and* the exact hour.
**Why it fails:** the joke explains itself in order. Setup, correction, then a
stamp of the same hour — no surprise left for the last words. Funny in a
retrospective, flat in a subject.

### 11. `fix(login): session TTL was 0, users had to type fast, one of them did`

**Angle:** absurd escalation, human detail as the closer.
**Why it lands:** real bug (TTL 0), real absurdity (the app demands speed), and
"one of them did" is a hard, deserved laugh — some user typed a password in
under 200ms and got in. Runner-up. Loses to #1 only because the damage is
invisible and the hour is missing.

### 12. `fix(api): return 500 instead of the stack trace, on-call cannot read that fast anyway`

**Angle:** over-honest, mildly self-deprecating.
**Why it fails:** "cannot read that fast anyway" is a shrug dressed as wit. And
returning 500 instead of leaking a stack trace is just correct — no chaos.

### 13. `fix(env): prod has been reading staging since Tuesday; staging has been reading prod`

**Angle:** the deeply specific true detail, inverted.
**Why it lands:** the swap is real, the symmetry is real, and the second clause
arrives like the other shoe. Very strong — but "since Tuesday" is the opposite
of 3 AM. It is funny at 4 PM, which is the wrong shift.

### 14. `fix(ci): pipeline was green because the tests were not running, the tests are running now`

**Angle:** the commit that admits what was actually true all along.
**Why it fails:** the second clause is less funny than the first, so the line
deflates exactly where it should rise. Also no hour, no human.

### 15. `fix(deploy): do not deploy on Friday; it is Saturday; I deployed on Saturday`

**Angle:** the over-honest body that admits a crime, in subject form.
**Why it lands:** the escalation is deadpan and the timeline is a confession.
But the semicolon list is a bit of a *bit* — three parallel clauses announced
as a pattern. Slightly too constructed for 3 AM.

### 16. `fix(build): pin node to 22, a bot upgraded us to 23 at 2am and we all met at 3am`

**Angle:** the true detail (a bot's timing) plus the hour it caused.
**Why it lands:** "we all met at 3am" is a genuinely good closing image — the
team assembling around a broken build like a bad party. Fails on length and on
"we all", which assumes a team the judge cannot see.

### 17. `fix(orders): retried 91 times, so the customer got 91 copies of one book`

**Angle:** the deeply specific, absurd number.
**Why it fails:** 91 is a great number, but the subject has no verb of
intent — no fix, no cause, just a report. A commit subject should say what
changed. Also no hour.

---

## The one kept

**`fix(checkout): require total > 0; we sold 4,000 monitors for free between 2:58 and 3:06`**

It wins on all four things the judge weighs:

- **True to 3 AM.** The timestamp window is the whole joke's evidence. Nobody
  writes "between 2:58 and 3:06" unless they were watching a graph at 3 AM,
  and the window is short because the on-call only sees the *range* after the
  fact — exactly how a real incident reads in the morning.
- **Reads like a real commit.** `fix(scope): imperative` then a semicolon. That
  is the shape of a thousand real subjects; `require total > 0` is the honest
  one-line guard that a half-asleep developer actually writes at 3 AM, because
  the real fix (why the total went to zero) is tomorrow's problem.
- **Funny because true.** 4,000 monitors is a number a person would remember
  and no one would invent. Nothing in the line is trying to be funny, and the
  deadpan damage report after a tiny guard is the classic comic mismatch.
- **The laugh arrives last.** "between 2:58 and 3:06" is the final clause: it
  converts a bug fix into a receipt.

It also survives the negative filters: no crude word, no "asdf", no "pls work",
no bar joke, no shrug, and no named colleague to carry the blame for it.
