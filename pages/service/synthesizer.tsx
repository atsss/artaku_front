import Head from 'next/head'
import { ExternalLink } from '../../components/atoms/Link'
import { FadeInOut } from '../../components/atoms/FadeInOut'
import { Txt } from '../../components/atoms/Txt'
import { Section } from '../../components/atoms/Section'
import { DefaultTwoColumn } from '../../components/molecules/TwoColumn'
import footerStyle from '../../components/organisms/lp/Footer/style.module.sass'
import headerStyle from '../../components/organisms/lp/Header/style.module.sass'
import heroStyle from '../../components/organisms/lp/Hero/style.module.sass'

export const Synthesizer = (): JSX.Element => (
  <FadeInOut>
    <Head>
      <title>Artaku</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Save your time for the clustering, synthesis, generating insights for your design research with Artaku, your AI-powered assistant."
      />
      <meta
        name="keywords"
        content="clustering, synthesis, insights, design research, AI-powered assistant"
      />
      <meta property="og:site_name" content="Artaku" />
      <meta property="og:title" content="Artaku" />
      <meta
        property="og:description"
        content="Save your time for the clustering, synthesis, generating insights for your design research with Artaku, your AI-powered assistant."
      />
      <meta
        property="og:url"
        content="https://artaku.art/service/synthesizer"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://ciid.s3-us-west-2.amazonaws.com/syn/syn00.jpg"
      />
      <meta name="twitter:card" content="summary" />
    </Head>
    <header className={headerStyle.body}>
      <Section>
        <div className={headerStyle.block}>
          <span className={headerStyle.title}>Artaku</span>
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSc3DZq-Lh0I2m7Exh80xg2xmY3rI1-O7ZJGwHisvqa7fuUqiw/viewform?usp=sf_link">
            Apply now
          </ExternalLink>
        </div>
      </Section>
    </header>
    <main className={heroStyle.body}>
      <Section image="/img/syn00.jpg">
        <div className={heroStyle.block}>
          <h1 className="text-right">
            {['Hassle-free research', 'with a smart', 'assistant'].map(
              (text: string, index: number) => (
                <p key={index}>{text}</p>
              )
            )}
          </h1>
        </div>
      </Section>
    </main>
    <Section isPadding>
      <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
        Why join Artaku
      </Txt>
      <DefaultTwoColumn
        src="/img/syn01.jpg"
        title="Input sentence on spreadsheet while interviewing."
        values={['No extra application required', 'Zero learning cost']}
        isReversed
        className="mt-10"
      />
      <DefaultTwoColumn
        src="/img/syn02.jpg"
        title="Get the clustered results and insights automatically."
        values={['No extra application required', 'Zero learning cost']}
        className="mt-16"
      />
      <DefaultTwoColumn
        src="/img/syn03.jpg"
        title="Share it with your team member."
        values={[
          'Meeting immediately after the interview',
          'Maximize time for discussion',
        ]}
        isReversed
        className="mt-16 mb-16"
      />
    </Section>
    <footer>
      <Section isGray>
        <div className={footerStyle.block}>
          <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
            Free β trial
          </Txt>
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc3DZq-Lh0I2m7Exh80xg2xmY3rI1-O7ZJGwHisvqa7fuUqiw/viewform?embedded=true"
              width="640"
              height="1478"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </Section>
    </footer>
  </FadeInOut>
)

export default Synthesizer
