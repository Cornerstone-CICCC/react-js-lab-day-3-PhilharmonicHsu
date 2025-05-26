export type Blog = {
    id: string;
    title: string;
    content: string;
    published: boolean;
}

export type BlogAction =
  | { type: 'ADD'; payload: Blog }
  | { type: 'EDIT'; payload: Blog }
  | { type: 'DELETE'; payload: string }