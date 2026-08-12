# Romans Orthodontics — what we still need

The site is built, deployed and wired. 18 pages plus a branded 404, forms
landing in GoHighLevel and in the leads platform, tracking firing, privacy and
terms carrying the practice's real wording.

Everything below is either blocking launch or visibly stubbed on the site right
now. Grouped by who can answer it, because that decides how fast it comes back.

*Updated 2026-08-12.*

---

## A · The office can answer these today

**1. Do you have Facebook or Instagram?** The footer of all 19 pages currently
shows a visible `[SOCIAL PROFILE LINKS NEEDED]` flag. It is the most visible
unfinished thing on the site and it is one answer: send the profile URLs and I
add them, or tell me there are none and I remove the flag.

**2. Which PPO plans do you take?** The financial page currently says "major PPO
plans" and nothing more. Named carriers are one of the highest-value things a
practice page can list, because people search for them by name.

**3. When someone submits a form, how fast does the office call back?** Same
day? Within a business day? The confirmation page and every form carry a
`[CONFIRM: callback response time]` placeholder. We will not print a promise we
have not confirmed.

**4. After-hours calls.** We describe it as "calls reach the front desk during
office hours, leave a message outside them and the office calls back." Correct?

**5. In-house financing.** We say the payment agreement is with Romans
Orthodontics rather than an outside lender. **If you route anyone to CareCredit
or a similar company, this sentence is wrong** and needs changing.

**6. Community involvement.** We list Give Kids A Smile, Missions of Mercy,
Dentures for Veterans, and the Arizona Humane Society. Taken from the current
website. Still accurate, anything to add or drop?

**7. Confirm the address detail.** "Ground level, Suite D120, reserved parking
at the door." We also describe the building as being on the south side of the
street, which we read off a map rather than being told.

---

## B · Dr. Romans, personally

**8. Three short pieces of writing for your bio page, about 60 words each.**
Right now that page shows visible placeholders where these go. We deliberately
did not invent them, because a made-up origin story on a real doctor's page is
not something we will publish.
- What drew you to orthodontics in the first place.
- Any personal or family experience with dental care that shaped how you treat
  patients. (Skip if there isn't one. It just stays out.)
- Something outside the office: family, hobbies, a Saturday in Anthem.

**9. Sign-off on clinical statements.** These appear on the treatment pages,
are standard orthodontics, and are **not** from anything you have given us in
writing, so they should be yours before they publish under your name:
- typical treatment runs one to two years
- adjustment visits every six to eight weeks
- soreness for two to three days after braces go on
- aligners worn about 22 hours a day
- the AAO recommendation of a first check around age 7

**10. Two positioning lines we wrote.** Both extend the homepage you approved,
but neither is a direct quote from you:
- "Ceramic brackets are on the table from the first conversation."
- "Adults who were told as teenagers that their window had closed are a routine
  case here."

---

## C · Legal — mostly resolved

**Privacy and terms are done.** Both now carry the practice's own approved
wording, twelve clauses each, covering the SMS programme, opt-out, data use and
cookies. Arizona, so the general variants apply and the California clauses are
deliberately excluded. All eight forms now carry the matching SMS consent line,
which the policies require and which A2P registration also asks for.

Two items remain:

**11. Your HIPAA Notice of Privacy Practices.** We have deliberately not drafted
one. It is a regulated document with legally required content and it has to come
from your counsel or your compliance vendor. The privacy page covers website
privacy only and says so.

**12. Refund and cancellation terms.** That page is still a stub. It exists
because your old site had that URL and we do not want the link to break. Since
the site publishes no prices and no treatment terms, there is nothing for us to
write. Send your actual policy, or confirm you are happy for the page to keep
saying that financial arrangements are set out in the signed treatment
agreement.

**One conflict for whoever owns the legal text.** Privacy clause 5 states that
we do not share information with third parties for marketing or advertising.
The site loads a Meta pixel, which does share browsing behaviour with Meta for
ad targeting. Either the pixel comes off or that clause needs amending — the two
cannot both stand. Removing it would also make the site meaningfully faster.

---

## D · Internal, not the client

- **Domain cutover.** The last technical step. Seven things only become correct
  once it happens, including stripping `noindex`, re-checking the tracking on
  the real hostname, and making the phone field required again.
- **The `/REPLACE-ME` trigger** in Tag Manager, left over from the template. It
  is meant to track booking completions in the OrthoSync scheduler, which is a
  third-party page. Give it a real path or delete it.
- **Two GA4 properties** load on every page. If one is an agency roll-up rather
  than Romans' own, dropping it is the largest speed win available.

**Already resolved, previously on this list:** office hours, the GoHighLevel
webhook, the leads-platform registration, the URL scheme, the Google rating and
review count (5.0 from 42), the AAO membership, and the practice email address.

**Photography is settled:** the current photos stay. No shoot is planned, so the
stock service images and the existing iPhone photography are the final set.

---

## What is still visible on the site

38 placeholder flags are showing to anyone reading the site right now. They
collapse into a handful of answers:

| Flag | Instances | Question |
|---|---|---|
| Social profile links | 19, every footer | Number 1 above |
| Callback response time | 5 | Number 3 above |
| Accessibility details | 5 | Section C |
| Refund terms | 4 | Number 12 |
| Dr. Romans bio | 3 | Number 8 |
| PPO networks | 1 | Number 2 |
| Email reply time | 1 | Office |

---

## The short version, if you only send one message today

Do you have Facebook and Instagram · which PPOs · how fast does the office call
back.

Three questions, about two minutes, and they clear 25 of the 38 flags currently
visible on the site.
