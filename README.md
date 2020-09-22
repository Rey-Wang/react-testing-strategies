# Pragmatic Front-End Testing Strategies

### What the demo contains

this demo generated by the `create-react-app` + `Typescript`, contains a complete component:

[image here]

### What the demo for

We should get a answer for those questions:

1. Which part of our code should write unit testing
   - Using this repo, I would try several strategies, we could compare the differences via PR, Then we could see the coverage and other indicators
2. How could make test case writing more effective
   - Using this repo, we could choose one way, which should be simply writing and quick test
3. How do we choose testing tools
4. How do we understand the boundary between unit testing with E2E testing

### Testing Strategies

A complete component contains:

1. Component Render
   - useEffect
   - Call hooks
   - Call selectors
   - Dispatch action
   - Handle event
   - render
2. #### Hooks

   **using the `@testing-library/react-hooks` + `react-test-render` we could simply mock a component (without any child render) and execute the hooks, then test it as a pure function**

   - Call selector ✅
   - Dispatch action ✅
   - Converter ✅

3. #### Selectors ✅

   **We can simply mock the state, and call selectors as a pure function**

4. #### Slice ✅

   We use the `createSlice` instead of template code of actions, reducers, we don't need to care about what we done in reducers and actions , we should focus on the thunk action functions

   1. Actions
      - Call services
   2. Reducers
      - Manage State logic

5. Services

   - Call API ✅ we can simply mock the request function, focus on the logic inside service
   - Some response calculation ✅ keep its an pure function

6. Utils
   - pure tool function ✅
