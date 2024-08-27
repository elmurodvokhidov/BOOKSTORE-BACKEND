const Joi = require("joi");

const validateBookFunction = (book) => {
    // Validate schema - sxemada obyektni qanday xossalari bo’lishi kerakligi va o’sha xossalarni turlari qanaqa bo’lishi, xossani qiymati eng kamida qancha bo’lishi yoki eng uzog’i bilan qancha bo’lishi ko'rsatib o'tiladi.
    const schema = Joi.object({
        nomi: Joi.string().required().min(3).max(30),
        narxi: Joi.number(),
        cat: Joi.string(),
        img: Joi.string(),
        description: Joi.string(),
        avtor: Joi.string(),
    });

    // Validatsiya natijasini funksiyaga qaytarish
    return schema.validate(book);
};

const validateCategoryFunction = (category) => {
    // Validate schema - sxemada obyektni qanday xossalari bo’lishi kerakligi va o’sha xossalarni turlari qanaqa bo’lishi, xossani qiymati eng kamida qancha bo’lishi yoki eng uzog’i bilan qancha bo’lishi ko'rsatib o'tiladi.
    const schema = Joi.object({
        nomi: Joi.string().required().min(3).max(15),
    });

    // Validatsiya natijasini funksiyaga qaytarish
    return schema.validate(category);
};

module.exports = {
    validateBookFunction,
    validateCategoryFunction,
}