## Live Demo

This project is deployed via `Vercel` for exploration. Link: [Polling Project](https://202311-polling-project-3hp8.vercel.app/).

## Snapshots

### `Desktop View`
[![Image1](https://res.cloudinary.com/dy7mysmhp/image/upload/v1700019941/Screenshot_2023-11-15_at_11.41.20_AM_nbx1sy.png "Image 1")](https://example.com/link-for-image-1)


### `Mobile View`

[![Image2](https://res.cloudinary.com/dy7mysmhp/image/upload/v1700019941/Screenshot_2023-11-15_at_11.41.36_AM_jp1ocy.png "Image 2")](https://example.com/link-for-image-1)


## Design

[![Image3](https://res.cloudinary.com/dy7mysmhp/image/upload/v1700021304/Blank_diagram_2_u8uait.png "Image 3")](https://example.com/link-for-image-1)

## Principles

- Maintainability through Refactoring
- Minimalism in Design
- Optimizing User Experience Despite Time Constraints

## Test Cases

### `With @testing-library`

| Parts | Test Case 
|----------|----------|
| Polling On Display| Check Displayed Title |
| Description | Check Displayed Information | 
| Show Buttons | Check Button Functioning | 


## Enhancement Options

| Item | Details 
|----------|----------|
| State Management| Use Redux store so as to rely less on props for handling state transfer among components |
| Voting Management | Control malicious voting through, for example, IP checking or local storage | 
| Responsiveness | Responsiveness can be improved through further optimization for iPad devices and covering polling overview part | 
| Button Design | Hovering and disabling logic can be improved| 
| Notification | Loading & error cases can be handled better through design and messages| 

## Running Local Repo

```
cd polling-app
npm install
npm start
```

 