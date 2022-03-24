export default {
    name:'engagement',
    title:'Engagement', 
    type:'document',
    fields:[
        {
            name:'titre',
            title:'Titre',
            type:'string',
        },
        {
            name:'texte',
            title:'Texte',
            type:'text',
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot: true
            },
        }
    ]
}