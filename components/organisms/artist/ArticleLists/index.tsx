import { Section } from '../../../atoms/Section'
import { Txt, SubTxt } from '../../../atoms/Txt'
import { Article } from '../../../../interfaces'

export interface Props {
  articles: Article[]
}

export const ArticleLists: React.FC<Props> = ({ articles }) => (
  <Section isGray>
    <ul>
      {articles.map((article) => (
        <li key={article.id} className="p-4 mb-4 bg-white">
          <a href={article.url} target="_blank" rel="noreferrer">
            <Txt className="underline">{article.title}</Txt>
            <SubTxt size="s" className="mt-2">
              {article.publishedDate}
            </SubTxt>
            <SubTxt>{article.description}</SubTxt>
          </a>
        </li>
      ))}
    </ul>
  </Section>
)
