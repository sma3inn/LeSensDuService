export default {
    name:'prestation',
    title:'Prestation', 
    type:'document',
    fields:[
        {
            name:'titre',
            title:'Titre',
            type:'string',
        },
        {
            name:'description',
            title:'Description',
            type:'text',
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot: true
            },
        },
        {
            name:'tarif',
            title:'Tarif',
            type:'number',
        },
        {
            name:'informations',
            title:'Informations complémentaires',
            type:'text',
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength:100,
            }
        }
    ]
}