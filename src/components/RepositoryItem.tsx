import { FiBook } from 'react-icons/fi'

type RepositoryItemProps = {
  repository: {
    name: string
    description: string
    html_url: string
    language: string
    visibility: string
  }
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>
        <FiBook size={17} />
        {repository.name}
      </strong>
      <span>{repository.visibility}</span>
      <p>
        {repository.description ?? 'Projeto sem descrição'}
      </p>
      <h5>
        {repository.language ?? 'Linguagem não definida'}
      </h5>
      <a href={repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  )
}