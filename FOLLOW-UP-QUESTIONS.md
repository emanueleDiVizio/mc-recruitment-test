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

### Q) How do I run the application?

Run `yarn android` or `yarn ios` and you're good to go (Provided you've set up dev environment and installed dependencies)

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

I Would improve the UX/UI and would add tests for sagas and NotificationService. Although not crucial, they're useful to add if there is time to spare. I would also set up `husky` to run tests and lint on commit and push. I would then set up a `fastlane` pipeline for Android and iOs build that can be also used on GitHub CI. As time has been quite tight, I've decided to deliver the project only with the strict necessary.

### Q) Which parts are you most proud of? And why?

I believe I've set up the architecture quite nicely and encapsulated components very well. Hooks, while presenting a learning curve, are a very useful tool and provide a nice declarative way to write components' logic. As I've used redux and sagas only when strictly, the repo is very lean and easy to understand.

### Q) Which parts did you spend the most time with? What did you find most difficult?

Completing the test took me around half a day, and I haven't found any significant difficulty.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.

The test is very well designed and can provide the reviewer a very accurate view of the candidate skill set and seniority.
Even though the requirements are simple, the candidate will have to be familiar with a lot of concepts and tooling that can be obscure to many developers. Also, much experience is necessary to piece everything together in a lean and maintainable manner.

All in all, a senior engineer will have no problem completing this quickly, while a less experienced developer will struggle with some concepts (sagas, hooks, testing, architecture) and would likely need more time to piece all together.

On a side note, I'd be wary of separating components between "dumb components" and "smart screens" as of these days is very easy to make small functional components redux-aware through hooks, as I've demonstrated in this project. Also, I've decide to place test specs next to the file being tested, instead of keeping them all in the `__tests__` folder. Just a personal preference, yet I find it keeps thing easier to reference.
