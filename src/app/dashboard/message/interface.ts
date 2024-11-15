// 定义留言项的类型
export interface Comment {
    userAvatar: string;
    username: string;
    content: string;
}

// 定义留言消息的类型
export interface Message {
    _id?:string,
    userAvatar: string;
    username: string;
    content: string;
    comments: Comment[];
    likes:number;
    updateTime:Date;
    userId?:string
}