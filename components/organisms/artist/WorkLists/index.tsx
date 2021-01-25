// import style from './style.module.sass'
import Link from 'next/link'
import { Section } from '../../../atoms/Section'
import { WorkList } from '../../../molecules/WorkList'

export interface Props {
  works: any // FIXME
}

const List = ({ work }) => (
  <li>
    <Link href={`/artist/ats`}>
      <a>
        <WorkList
          src={work.image}
          title={work.title}
          material={work.material}
        />
      </a>
    </Link>
  </li>
)

export const WorkLists: React.FC<Props> = ({ works }) => (
  <Section color="#FAFAFA">
    <ul className="grid grid-cols-4 gap-4">
      {works.map((work) => (
        <List key={work.id} work={work} />
      ))}
    </ul>
  </Section>
)
