export interface IPosts{
    posts: IPost[]
}

export interface IPostProps{
    post:IPost
}
  
export interface IPost{
    slug: string,
    frontmatter: frontmatter,
  }
  
  export interface frontmatter{
    title: string,
    date: Date,
    excerpt: string,
    cover_image: string,
    category: string
    author_image: string
  }

export interface IStaticProps{
    params: {
        slug: string
    }
}

export interface IPropsPost{
    frontmatter: frontmatter,
    content: string,
    slug: string
}