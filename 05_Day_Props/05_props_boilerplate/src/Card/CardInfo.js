import asabenehImage from '../images/asabeneh.jpg'

const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
}

const user = { ...data.author, image: asabenehImage }

const info = {
    profession: 'senior developer,Finland'
}

export { data, user, info };