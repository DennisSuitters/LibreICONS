# Contributing to LibreICONS

Looking to contribute something to LibreICONS?

**Here's how you can help.**

## Requesting new icons

New icons mostly start as requests by the [LibreICONS Issues Tracker on Github](../../issues).

Want to request a new icon? Here are some things to keep in mind:

1. Please use English, if we can't understand your language we can't help.
2. Please do not request comprehensive sets of icons related to a very specific field.
3. Please [search](../../search?type=Issues) to see if your icon request already exists.
   If you find an appropriate icon already being requested or discussed, please add a :thumbs_up: reaction to that one. Please do not make long threads by commenting with +1, doing so makes it hard for users to follow conversations.
4. Please make requests for single icons, unless you are requesting related icons.
5. Please and thank you if you include the following:
  - Title your as [Request]: icon-name` (e.g., `[Request]: icon-name`).
  - Include some use cases for your request.
  - Attach or link a single color image, preferable an SVG.

## Submitting Icons

1. Submit Icons as SVG files in an already minified format including ARIA Attributes like below:

Non-color Icons:
````
<svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M 6.998865,1 C 4.0815415,1 1.714385,3.2543987 1.714385,6.0332345 1.714385,8.814341 5.6329068,13 6.998865,13 8.3670936,13 12.285615,8.814341 12.285615,6.0332345 12.285615,3.2543987 9.919216,1 6.998865,1 l 0,0 z M 6.1520466,9.136722 C 5.9129093,9.377373 5.0819829,8.931639 4.2994894,8.137037 3.5154823,7.345463 3.0750459,6.5069685 3.3141832,6.2648042 3.5525637,6.0218831 4.3827334,6.4683736 5.1659837,7.261462 5.9477204,8.05455 6.3911839,8.892287 6.1520466,9.136722 l 0,0 z M 7.831305,9.130622 C 7.5891406,8.888504 8.0356311,8.051523 8.8309897,7.259192 9.6248346,6.4668601 10.464085,6.0211263 10.707763,6.2648042 10.949928,6.505455 10.50268,7.342436 9.708835,8.13401 8.9142336,8.926342 8.0734693,9.370562 7.831305,9.130668 l 0,0 z"/></svg>
````

Color Icons:
````
Where working on the format at present.
````

2. When submitting Icons via Pull Requests, please do not add icons into the main `svg` or `svg-color` folders, but into the `requests` and `requests-color` folders.

## Reporting issues

We only accept issues that are requests for icons, bug reports, or feature requests. Bugs must be isolated and reproducible problems that we can fix.

1. **Search for existing issues/requests.** We get a lot of duplicate issues, and you'd help us out a lot by first checking if someone else has reported the same issue. Moreover, the issue may have already been resolved with a fix available.
2. **Create an isolated and reproducible test case.** Be sure the problem exists with a [reduced test case](http://css-tricks.com/reduced-test-cases/) that should be included in each bug report.
3. **Include a live example.** Make use of jsFiddle, jsBin, or Codepen to share your isolated test cases.
4. **Share as much information as possible.** Include operating system and version, browser and version, version of LibreICONS, etc. where appropriate. Also include steps to reproduce the bug.

## Key branches

- `master` is the latest, deployed version (use for pull request if they only affect the docs)
- `gh-pages` is the hosted docs (not to be used for pull requests)

## License

By contributing your code, you agree to license your contribution under the terms of the GPLv3:
- https://github.com/DiemenDesign/LibreICONS/blob/master/LICENSE

## Thanks

Thanks to Bootstrap for their wonderful CONTRIBUTING.MD doc. It was modified to create this one.