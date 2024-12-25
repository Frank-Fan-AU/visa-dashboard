export type AuthorProps = {
    name: string;
    picture: any;
  };
  
  export type PostItemProps = {
    title: string;
    slug: string;
    updateDate: string;
    author: AuthorProps;
    describe: string;
    coverImage: any;
    content: string;
  };
  