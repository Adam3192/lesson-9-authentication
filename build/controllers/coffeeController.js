"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoffee = exports.editCoffee = exports.editCoffeePage = exports.addCoffee = exports.addCoffeePage = exports.oneCoffee = exports.allCoffee = exports.defaultCoffee = void 0;
const coffee_1 = require("../models/coffee");
const defaultCoffee = (req, res, next) => {
    res.redirect('/coffee');
};
exports.defaultCoffee = defaultCoffee;
const allCoffee = async (req, res, next) => {
    let coffeeList = await coffee_1.Coffee.findAll();
    res.render('all-coffee', { coffeeList });
};
exports.allCoffee = allCoffee;
const oneCoffee = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let coffeeItem = await coffee_1.Coffee.findByPk(itemId);
    if (coffeeItem) {
        res.render('coffee-detail', { foundCoffee: coffeeItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
};
exports.oneCoffee = oneCoffee;
const addCoffeePage = (req, res, next) => {
    res.render('add-coffee');
};
exports.addCoffeePage = addCoffeePage;
const addCoffee = async (req, res, next) => {
    let newCoffee = req.body;
    await coffee_1.Coffee.create(newCoffee);
    res.redirect('/coffee');
};
exports.addCoffee = addCoffee;
const editCoffeePage = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let coffeeItem = await coffee_1.Coffee.findOne({
        where: { coffeeId: itemId }
    });
    if (coffeeItem) {
        res.render('edit-coffee', { foundCoffee: coffeeItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
};
exports.editCoffeePage = editCoffeePage;
const editCoffee = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let updatedItem = req.body;
    let [updated] = await coffee_1.Coffee.update(updatedItem, {
        where: { coffeeId: itemId }
    });
    if (updated === 1) {
        res.redirect('/coffee');
    }
    else {
        res.render('error', { message: 'Coffee could not be updated' });
    }
};
exports.editCoffee = editCoffee;
const deleteCoffee = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let deleted = await coffee_1.Coffee.destroy({
        where: { coffeeId: itemId }
    });
    if (deleted) {
        res.redirect('/coffee');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find item' });
    }
};
exports.deleteCoffee = deleteCoffee;
