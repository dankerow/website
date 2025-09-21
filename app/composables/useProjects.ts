export interface Project {
  name: string
  description: string
  slug?: string
  url?: string
  image?: string
  tags: string[]
  githubRepo?: string
  hasInternalPage?: boolean
  featured?: boolean
}

export const useProjects = () => {
  const projects = ref<Project[]>([
    {
      name: 'DisQ',
      description: 'A Discord bots directory.',
      slug: 'disq',
      url: 'https://disq.ink',
      image: 'disq.svg',
      tags: ['Vue', 'Nuxt', 'TypeScript', 'PostgreSQL'],
      featured: true
    },
    {
      name: 'RawGo',
      description: 'A powerful and flexible API designed to simplify the creation of memes and the application of various filters to images',
      slug: 'rawgo',
      tags: ['Typescript'],
      githubRepo: 'rawgo-api',
      hasInternalPage: true,
      featured: true
    },
    {
      name: 'blop',
      description: 'A Discord bot made with discord.js',
      url: 'https://disq.ink/bot/912113776176820234',
      tags: ['TypeScript', 'PostgreSQL'],
      githubRepo: 'blop'
    },
    {
      name: 'MIA Gospel',
      description: 'A website for a Gospel ministry.',
      slug: 'miagospel',
      url: 'https://miagospel.org',
      image: 'miagospel.webp',
      tags: ['Vue', 'Nuxt']
    }
  ])

  const getProjectRepoNames = () => {
    return projects.value
      .filter(project => project.githubRepo)
      .map(project => project.githubRepo as string)
  }

  const getProjectBySlug = (slug: string) => {
    return projects.value.find(project => project.slug === slug)
  }

  const getFeaturedProjects = () => {
    return projects.value.filter(project => project.featured)
  }

  return {
    projects,
    getProjectRepoNames,
    getProjectBySlug,
    getFeaturedProjects
  }
}
