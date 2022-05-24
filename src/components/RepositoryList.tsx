import { useState, useEffect } from "react"

import { RepositoryItem } from "./RepositoryItem"
import { Profile } from "./Profile"

import '../styles/repositories.scss'

type Repository = {
  name: string
  description: string
  html_url: string
  language: string
  visibility: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/giovannalinda/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <div className="profile">
        <Profile />
      </div>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}