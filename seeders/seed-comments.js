const db = require('../models')

//async function
async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    //fake sample content
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    //add comment to the place's comment array
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    //exit program
    process.exit()
}

seed()
