# Over-Under Tracker

## Description

This is a simple app I put together to practice integrating React (especially
form functionality) with Rails. I've always enjoyed doing quick, fun over-under
bets with my friends (e.g. How many donuts will I eat at Union Square Dounts? If
I set it at two, you should definitely take the over!). These bets get hard to track
though if there are a number of them going between friends at any given time. This
app solves that (super) pressing problem by giving a place for bets to be recorded.

This app also serves as a useful demonstration for students of the advantages of
`fetch` and React given their lack of page reloads. The initial version did not have
any JS functionality and as such reloaded the page any time a user increased the counter
for a given bet. This leads to a disruptive user experience that makes it hard to keep
an accurate count, especially if the count is being incremented quickly. Once React and
`fetch` were added in, it no longer required page reloads and vastly improved the user
experience.
