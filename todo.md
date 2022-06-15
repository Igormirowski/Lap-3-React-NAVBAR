# Nav Todos

## Create Pages
- [ ] create two new page components `Home` and `About` with tests:
  - [ ] `Home` renders a welcome message
  - [ ] `About` renders an About Us title

## Setup for React Router
- [ ] install `react-router-dom` and wrap App in a Router

## Add Switch
- [ ] add Switch to App with Routes for:
  - [ ] '/' (renders `Home`)
  - [ ] '/news' (renders `News`)
  - [ ] '/about' (renders `About`)
- [ ] make sure `Header` and `Footer` render on every path

## Create Navigation Interactions
- [ ] add NavLinks to Header for navigation
- [ ] create a `BackButton` component with tests
  - [ ] calls history goBack function when clicked
- [ ] add `BackButton` to `Nav`

## Use Dynamic Segments
- [ ] Refactor News page
  - [ ] Render headlines only on exact path `/news`
  - [ ] Render eg. story 1 on `/news/1`

## Test updates
- [ ] Ensure all tests run, update as needed