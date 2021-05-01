import Image from 'next/image'
import style from './style.module.sass'
import { Section } from '../../../atoms/Section'
import { User } from '../../../../interfaces'
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMedium,
} from 'react-icons/fa'

export interface Props {
  user: User
}

export const ProfileSummary: React.FC<Props> = ({ user }) => (
  <Section isGray>
    <div className="grid grid-cols-4 gap-4">
      <div className={[style.image, 'md:col-span-1', 'col-span-2'].join(' ')}>
        <Image src={user.imageUrl} width={500} height={500} />
      </div>
      <div className="md:col-span-3 col-span-2 flex md:justify-end flex-col">
        <div className="flex flex-wrap justify-end">
          {user.linkedinUrl && (
            <a
              href={user.linkedinUrl}
              className="mb-4"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="2rem" />
            </a>
          )}
          {user.githubUrl && (
            <a
              href={user.githubUrl}
              className="ml-4 mb-4"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare size="2rem" />
            </a>
          )}
          {user.twitterUrl && (
            <a
              href={user.twitterUrl}
              className="ml-4 mb-4"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare size="2rem" />
            </a>
          )}
          {user.facebookUrl && (
            <a
              href={user.facebookUrl}
              className="ml-4 mb-4"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size="2rem" />
            </a>
          )}
          {user.instagramUrl && (
            <a
              href={user.instagramUrl}
              className="ml-4 mb-4"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare size="2rem" />
            </a>
          )}
          {user.mediumUrl && (
            <a
              href={user.mediumUrl}
              className="ml-4 mb-4"
              target="_blank"
              rel="noreferrer"
            >
              <FaMedium size="2rem" />
            </a>
          )}
        </div>
      </div>
    </div>
  </Section>
)
