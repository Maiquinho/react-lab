export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Posts {
    posts: Post[];
}

export interface addPostProps {
    onAdd: (title: string, body: string) => void;
}