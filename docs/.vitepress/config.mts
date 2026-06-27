import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/grammar-club/',
  title: "Grammar Club",
  description: "从简单句到简化从句的英文句型地图",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide.md' },
      {
        text: 'Notes',
        activeMatch: '/grammar-notes/',
        items: [
          { text: '简单句', link: '/grammar-notes/01-SimpleSentences.md' },
          { text: '复合句', link: '/grammar-notes/16-CompoundSentences.md' },
          { text: '简化从句', link: '/grammar-notes/22-ReducedClauses.md' }
        ]
      },
      { text: 'Terminology', link: '/terminology.md' },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples.md' },
      //     { text: 'API Examples', link: '/api-examples.md' }
      //   ]
      // }
    ],

    outline: [2, 3],

    sidebar: {
      '/grammar-notes/': [
        {
          text: 'Start Here',
          items: [
            { text: 'Preface', link: '/preface.md' },
            { text: 'Guide', link: '/guide.md' },
            { text: 'Terminology', link: '/terminology.md' }
          ]
        },
        {
          text: '简单句',
          items: [
            { text: 'Simple Sentences', link: '/grammar-notes/01-SimpleSentences.md' },
            { text: 'Noun Phrases', link: '/grammar-notes/02-NounPhrases.md' },
            { text: 'Pronouns', link: '/grammar-notes/03-Pronouns.md' },
            { text: 'Adjective', link: '/grammar-notes/04-Adjective.md' },
            { text: 'Adverb', link: '/grammar-notes/05-Adverb.md' },
            { text: 'Comparative Pattern', link: '/grammar-notes/06-ComparativePattern.md' },
            { text: 'Prepositions', link: '/grammar-notes/07-Prepositions.md' },
            { text: 'Participles', link: '/grammar-notes/08-Participles.md' },
            { text: 'Verb Tenses', link: '/grammar-notes/09-VerbTenses.md' },
            { text: 'Voice', link: '/grammar-notes/10-Voice.md' },
            { text: 'Auxiliaries', link: '/grammar-notes/11-Auxiliaries.md' },
            { text: 'Moods', link: '/grammar-notes/12-Moods.md' },
            { text: 'Gerund', link: '/grammar-notes/13-Gerund.md' },
            { text: 'Infinitive', link: '/grammar-notes/14-Infinitive.md' },
          ]
        },
        {
          text: '复合句',
          items: [
            { text: 'Conjunction', link: '/grammar-notes/15-Conjunction.md' },
            { text: 'Compound Sentences', link: '/grammar-notes/16-CompoundSentences.md' },
            { text: 'Noun Clauses', link: '/grammar-notes/17-NounClauses.md' },
            { text: 'Adverb Clauses', link: '/grammar-notes/18-AdverbClauses.md' },
            { text: 'Relative Clauses', link: '/grammar-notes/19-RelativeClauses.md' },
            { text: 'Subject Verb Agreement', link: '/grammar-notes/20-SubjectVerbAgreement.md' },
            { text: 'Inversion', link: '/grammar-notes/21-Inversion.md' },
          ]
        },
        {
          text: '简化从句',
          items: [
            { text: 'Reduced Clauses', link: '/grammar-notes/22-ReducedClauses.md' },
            { text: 'Relative Clauses Reduced', link: '/grammar-notes/23-RelativeClausesReduced.md' },
            { text: 'Noun Clauses Reduced', link: '/grammar-notes/24-NounClausesReduced.md' },
            { text: 'Adverb Clauses Reduced', link: '/grammar-notes/25-AdverbClausesReduced.md' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/faustine8/grammar-club' }
    ]
  }
})
