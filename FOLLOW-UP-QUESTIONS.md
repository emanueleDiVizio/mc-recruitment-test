# Implementation:

### Q) What libraries did you add? What are they used for?

Below a list of the libraries I've added with a brief explanation of each:

- "@testing-library/react-native": Provides a lot of useful tools to test functional component with hooks. Would not test React with anything else these days.
- "eslint-plugin-prettier": Small library to let eslint run prettier
- "lodash": Useful library to manipulate arrays. I've used it sparingly and could've done without, yet it's always useful on JS projects.
- "moment": Very useful library to deal with dates, I would use it any day instead of js `Date`.
- "mockdate": Useful small library to freeze date inside tests
- "prop-types": Useful library to validate React prop types. Would not do without.
- "react-native-push-notification": Very useful library to set up push notifications (remote and local) quickly and easily
- "redux-devtools-extension": Devtools extension for redux. Useful when debugging
- "react-native-circular-progress": Handy library to display circular progress bars.
- "husky": Useful library to run test on git hooks. I've used it to prevent developers to commit code that breaks tests or has lint errors. Prevents a lot of issues to reach the remote repo!
- "react-native-vector-icons": library to display vector icons
- "react-native-svg": library to deal with SVG paths efficiently. Used by react-native-circular-progress".

### Q) How do I run the application?

Run `yarn android` or `yarn ios` and you're good to go (Provided you've set up dev environment and installed dependencies)

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

I believe I've made good use of the time available and shipped an almost production ready codebase. If I had more time, I would have gladly implemented the rest of the features that were in the designs (which I loved! Kudos to the designer) but were not requested in the user stories. I would also add unit tests for `sagas`, `reducers` and `NotificationService`. As they're not crucial, I've decided to do without for the sake of the test project. In a production environment I would probably write them before shipping if time allows.

### Q) Which parts are you most proud of? And why?

I believe that any developer that works on this codebase will enjoy doing so. The project is well architectured and it's easy to follow an established pattern to add new code. Using `fastlane` and `husky` I've set up a "local" pipeline that will take care of all the developer needs (automatic linting and testing on commit, easy deploy to the stores with `fastlane`). Github Actions makes PR come alive with information about test coverage and an easy release and pre-release deploy.

I've also demonstrated the power of `hooks` by writing a custom hook to check if the user is on shift (`useIsOnShift`), which is being reused across the app. Finally, I've managed to use redux and sagas only when strictly necessary, thus keeping the codebase as simple as possible and with an easy learning curve.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I've spent a bit of time to set up Github Actions, as I'm more used to Circle CI but wanted to try out the new Github pipeline capabilities. All in all, I'm very impressed by the power of this new Github feature. That being said, I would go for a more robust solution in a production environment, like Bitrise or CircleCI.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.

The test is very well designed and can provide the reviewer a very accurate view of the candidate skill set and seniority. I have enjoyed the challenge and thank you for the opportunity!
