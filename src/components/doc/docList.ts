type docListType = {
    img:string,
    title:string,
    description:string,
    avatar:string,
    slug:string
}

const docList:docListType[] = [
    
    {
        img:'/emoji1.png',
        title:'澳洲500学签博士带陪读学签材料清单',
        description:'主申材料清单',
        avatar:'',
        slug:'mainlist',
    },
    {
        img:'',
        title:'澳洲500学签博士带陪读陪读材料清单',
        description:'副申材料清单',
        avatar:'',
        slug:'sublist',
    },
    {
        img:'',
        title:'80表格',
        description:'主申副申都要',
        avatar:'',
        slug:'80form'
    },
    {
        img:'',
        title:'1221表格',
        description:'主申副申都要',
        avatar:'',
        slug:'1221form',
    },
    
] 

export default docList