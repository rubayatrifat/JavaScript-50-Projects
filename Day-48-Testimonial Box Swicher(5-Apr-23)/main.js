const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.user-name')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg' ,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi, voluptas laboriosam nostrum, praesentium consequatur nulla quidem unde voluptates vero quia quas quae temporibus! Doloremque, eos! Voluptas fuga reprehenderit quod error maxime ad! Accusantium dignissimos reprehenderit asperiores rerum corrupti, sequi impedit nam id repellendus commodi laborum et pariatur tempora assumenda!',
    },

    {
       name: 'Miyah Myles',
       position: 'Marketing',
       photo: 'https://randomuser.me/api/portraits/women/46.jpg' ,
       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi, voluptas laboriosam nostrum, praesentium consequatur nulla quidem unde voluptates vero quia quas quae temporibus! Doloremque, eos! Voluptas fuga reprehenderit quod error maxime ad! Accusantium dignissimos reprehenderit asperiores rerum corrupti, sequi impedit nam id repellendus commodi laborum et pariatur tempora assumenda!',
    },

    {
        name: 'Jackson Zampa',
        position: 'Editing',
        photo: 'https://randomuser.me/api/portraits/men/46.jpg' ,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi, voluptas laboriosam nostrum, praesentium consequatur nulla quidem unde voluptates vero quia quas quae temporibus! Doloremque, eos! Voluptas fuga reprehenderit quod error maxime ad! Accusantium dignissimos reprehenderit asperiores rerum corrupti, sequi impedit nam id repellendus commodi laborum et pariatur tempora assumenda!',
     },

     {
        name: 'Kelly Jam',
        position: 'Desing',
        photo: 'https://randomuser.me/api/portraits/women/42.jpg' ,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi, voluptas laboriosam nostrum, praesentium consequatur nulla quidem unde voluptates vero quia quas quae temporibus! Doloremque, eos! Voluptas fuga reprehenderit quod error maxime ad! Accusantium dignissimos reprehenderit asperiores rerum corrupti, sequi impedit nam id repellendus commodi laborum et pariatur tempora assumenda!',
     },

     {
        name: 'Mr. Ambas Roy',
        position: 'Devoloper',
        photo: 'https://randomuser.me/api/portraits/men/89.jpg' ,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi, voluptas laboriosam nostrum, praesentium consequatur nulla quidem unde voluptates vero quia quas quae temporibus! Doloremque, eos! Voluptas fuga reprehenderit quod error maxime ad! Accusantium dignissimos reprehenderit asperiores rerum corrupti, sequi impedit nam id repellendus commodi laborum et pariatur tempora assumenda!',
     },

     {
        name: 'Harry Jr.',
        position: 'Degital Marketing',
        photo: 'https://randomuser.me/api/portraits/men/35.jpg' ,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi, voluptas laboriosam nostrum, praesentium consequatur nulla quidem unde voluptates vero quia quas quae temporibus! Doloremque, eos! Voluptas fuga reprehenderit quod error maxime ad! Accusantium dignissimos reprehenderit asperiores rerum corrupti, sequi impedit nam id repellendus commodi laborum et pariatur tempora assumenda!',
     }
]

let idx = 1

function updateTestimoneal() {
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0 
    }
}

setInterval(updateTestimoneal, 10000)

updateTestimoneal()