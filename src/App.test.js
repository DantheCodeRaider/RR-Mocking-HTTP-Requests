import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  // sets everything back to initial state after each test
  fetch.resetMocks();
})

describe('receives values from GitHub REST API using jest fetch mock', () => {
  test("receives GitHub name", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'Dan'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('Dan')
  })
  test("receives GitHub URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/DantheCodeRaider'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByRole('html_url'))
    expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
  })

  test("receives GitHub Image URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({avatar_url: 'https://avatars.githubusercontent.com/u/103788290?v=4'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByAltText('Github profile image'))
    expect(gitHubURL).toHaveAttribute('src', expect.stringContaining('githubusercontent'))
  })
})



