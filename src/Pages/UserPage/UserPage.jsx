import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

const UserPage = ({ getUser, getUserRepos, user, repos, languages, loading, repoLoading, match }) => {
  useEffect(() => {
    getUser(match.params.username)
    getUserRepos(match.params.username)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="row">
      <div className="col-12">
        <Link to="/" className="text-clickable">Back to Search</Link>
      </div>
      <div className="col-12 col-lg-4">
        <div className="bo-card">
          <div className="bo-card-head bg-gray-4">
            <img src={user.avatar_url} className="bo-photo" />
          </div>
          <div className="bo-card-body">
            <table className="table" style={{ whiteSpace: 'unset' }}>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>{user.login}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{user.location}</td>
                </tr>
                <tr>
                  <td>Bio</td>
                  <td>{user.bio}</td>
                </tr>
                <tr>
                  <td>Blog</td>
                  <td>{user.blog}</td>
                </tr>
                <tr>
                  <td>Link</td>
                  <td><a href={user.html_url} className="text-clickable">Open on GitHub</a></td>
                </tr>
                <tr>
                  <td>Followers</td>
                  <td>{user.followers}</td>
                </tr>
                <tr>
                  <td>Following</td>
                  <td>{user.following}</td>
                </tr>
                <tr>
                  <td>Repos</td>
                  <td>{user.public_repos}</td>
                </tr>
                <tr>
                  <td>Gists</td>
                  <td>{user.public_gists}</td>
                </tr>
                <tr>
                  <td>Hireable</td>
                  <td>{user.hireable ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <td>Since</td>
                  <td>{dayjs(user.created_at).format('DD.MM.YYYY')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <h2 className="mb-4">Languages in {repos.length} recently updated repos</h2>
        {
          Object.entries(languages.percentages).length !== 0 ?
          Object.entries(languages.percentages).map(([key, value], index) => (
            <div key={index} className="bo-progress text-medium">
              {key}: {value} %
              <div className="bo-progress-bar">
                <div className="bo-progress-bar-inner" style={{ width: `${value}%` }}></div>
              </div>
            </div>
          )) :
          <div className="text-danger">Language percentages not calculated.</div>
        }
        <h2 className="my-4">{repos.length} recently updated repos</h2>
        {repoLoading && <div>Repo loading...</div>}
        <div className="row">
          {
            repos.map((repo, index) => (
              <div key={index} className="col-12">
                <div className="bo-card">
                  <div className="bo-card-head bg-gray-4">
                    <div className="text-center">
                      <h3>
                        {repo.name}
                      </h3>
                      <p className="mt-2">
                        {repo.description || 'No description'}
                      </p>
                    </div>
                  </div>
                  <div className="bo-card-body">
                    <table className="table" style={{ whiteSpace: 'unset' }}>
                      <tbody>
                        <tr>
                          <td>Link</td>
                          <td><a href={repo.html_url} className="text-clickable">Open on GitHub</a></td>
                        </tr>
                        <tr>
                          <td>Languages</td>
                          <td>
                            {
                              repo.languages_fetched
                              ? Object.keys(repo.languages_fetched).map((cur, i) => (i !== 0 ? ', ' : '') + cur)
                              : <div className="text-danger">Languages not fetched.</div>
                            }
                          </td>
                        </tr>
                        <tr>
                          <td>Created</td>
                          <td>{dayjs(repo.created_at).format('DD.MM.YYYY')}</td>
                        </tr>
                        <tr>
                          <td>Updated</td>
                          <td>{dayjs(repo.updated_at).format('DD.MM.YYYY')}</td>
                        </tr>
                        <tr>
                          <td>Stars</td>
                          <td>{repo.stargazers_count}</td>
                        </tr>
                        <tr>
                          <td>Forks</td>
                          <td>{repo.forks_count}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default UserPage
