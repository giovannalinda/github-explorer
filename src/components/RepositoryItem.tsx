import { FiBook, FiStar } from 'react-icons/fi'
import { Repository } from './RepositoryList'

type RepositoryItemProps = {
  repository: Repository
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>
        <FiBook size={16} />
        {repository.name}
      </strong>
      <span>{repository.visibility}</span>
      <p>
        {repository.description ?? 'Projeto sem descrição'}
      </p>
      <h5>
        {repository.language ?? 'Linguagem não definida'}
      </h5>
      {repository.stargazers_count > 0 && (
        <div className='starred'>
          <FiStar size={16} />
          {repository.stargazers_count}
        </div>
      )}
      <a href={repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  )
}